import * as THREE from "three";

export interface RefractionBackdrop {
  texture: THREE.CanvasTexture;
  size: THREE.Vector2;
  pixelRatio: { value: number };
  update(): void;
  dispose(): void;
}

/** HTML is outside WebGL's transmission buffer. Capture only the background
 * typography that sits below the jelly, keeping controls and accessibility in
 * the DOM. The texture is sampled through the material, never alpha-composited
 * straight through the fruit. Repaint on layout/font changes, not physics steps. */
export function createRefractionBackdrop(
  mount: HTMLElement,
): RefractionBackdrop {
  const shell =
    mount.closest<HTMLElement>(".playground-shell") ?? mount.parentElement!;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  const size = new THREE.Vector2(1, 1);
  const pixelRatio = { value: 1 };
  let dirty = true,
    disposed = false;
  const invalidate = () => {
    dirty = true;
  };
  const resize = new ResizeObserver(invalidate);
  resize.observe(mount);
  const elements = [
    ...shell.querySelectorAll<HTMLElement>(
      ".specimen-heading, .specimen-caption",
    ),
  ];
  const mutations = new MutationObserver(invalidate);
  mutations.observe(shell, {
    attributes: true,
    attributeFilter: ["data-entering"],
  });
  for (const element of elements) {
    resize.observe(element);
    mutations.observe(element, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
  void document.fonts.ready.then(() => {
    if (!disposed) invalidate();
  });
  document.fonts.addEventListener("loadingdone", invalidate);

  const update = () => {
    if (disposed || (!dirty && shell.dataset.entering !== "true")) return;
    dirty = false;
    const viewport = mount.getBoundingClientRect();
    // A reduced-resolution image is sufficient for frosted transmission; cap large
    // monitors to avoid allocating a full-resolution extra framebuffer.
    const ratio = Math.min(
      0.75,
      1536 / Math.max(1, viewport.width, viewport.height),
    );
    const width = Math.max(2, Math.round(viewport.width * ratio));
    const height = Math.max(2, Math.round(viewport.height * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    pixelRatio.value = ratio;
    size.set(width, height);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.globalAlpha = 1;
    context.fillStyle = getComputedStyle(shell).backgroundColor;
    context.fillRect(0, 0, viewport.width + 2, viewport.height + 2);
    context.textBaseline = "top";
    const range = document.createRange();
    for (const element of elements) {
      if (
        !element.getClientRects().length ||
        getComputedStyle(element).display === "none"
      )
        continue;
      const style = getComputedStyle(element);
      context.globalAlpha = Number(style.opacity);
      const box = element.getBoundingClientRect();
      if (parseFloat(style.borderTopWidth) > 0) {
        context.fillStyle = style.borderTopColor;
        context.fillRect(
          box.left - viewport.left,
          box.top - viewport.top,
          box.width,
          parseFloat(style.borderTopWidth),
        );
      }
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const parent = node.parentElement!;
        const textStyle = getComputedStyle(parent);
        if (textStyle.display === "none" || textStyle.visibility === "hidden")
          continue;
        context.font = `${textStyle.fontStyle} ${textStyle.fontWeight} ${textStyle.fontSize} ${textStyle.fontFamily}`;
        context.fillStyle = textStyle.color;
        const text = node.textContent ?? "";
        // DOM ranges preserve actual line wraps, letter-spacing, Chinese font
        // fallback, and the differently weighted words in the lotus caption.
        for (let offset = 0; offset < text.length;) {
          const character = String.fromCodePoint(text.codePointAt(offset)!);
          range.setStart(node, offset);
          offset += character.length;
          range.setEnd(node, offset);
          if (!character.trim()) continue;
          const rect = range.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          const glyph =
            textStyle.textTransform === "uppercase"
              ? character.toUpperCase()
              : character;
          context.fillText(
            glyph,
            rect.left - viewport.left,
            rect.top - viewport.top,
          );
        }
      }
    }
    context.globalAlpha = 1;
    texture.needsUpdate = true;
  };
  update();
  return {
    texture,
    size,
    pixelRatio,
    update,
    dispose() {
      disposed = true;
      resize.disconnect();
      mutations.disconnect();
      document.fonts.removeEventListener("loadingdone", invalidate);
      texture.dispose();
    },
  };
}

/** Keep Three's normal/IOR/thickness-driven Snell refraction, but fill its
 * transparent background with real page color sampled at the refracted UV.
 * Roughness filters that input in the GPU; curved normals therefore magnify /
 * bend its soft color shapes instead of letting sharp HTML leak through. */
export function bindJellyOptics(
  material: THREE.MeshPhysicalMaterial,
  backdrop: RefractionBackdrop,
): void {
  const compile = material.onBeforeCompile.bind(material);
  const key = material.customProgramCacheKey();
  material.transparent = false;
  material.opacity = 1;
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.uniforms.uJellyBackdrop = { value: backdrop.texture };
    shader.uniforms.uJellyBackdropSize = { value: backdrop.size };
    shader.uniforms.uJellyBackdropRatio = backdrop.pixelRatio;
    const transmission = THREE.ShaderChunk.transmission_pars_fragment
      .replace(
        "uniform sampler2D transmissionSamplerMap;",
        `uniform sampler2D transmissionSamplerMap;
uniform sampler2D uJellyBackdrop;
uniform vec2 uJellyBackdropSize;
uniform float uJellyBackdropRatio;`,
      )
      .replace(
        "return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );",
        `vec4 sceneColor = textureBicubic(transmissionSamplerMap, fragCoord.xy, lod);
// Frost scatters background detail across a broad cone. Keep this in screen
// pixels so switching between desktop and mobile does not sharpen the text.
float scatterPixels = 10.0 + 110.0 * roughness * roughness;
float maxLod = max(0.0, floor(log2(min(uJellyBackdropSize.x, uJellyBackdropSize.y))) - 1.0);
float pageLod = clamp(log2(max(1.0, scatterPixels * uJellyBackdropRatio)), 0.0, maxLod);
vec3 pageColor = textureBicubic(uJellyBackdrop, clamp(fragCoord.xy, vec2(0.001), vec2(0.999)), pageLod).rgb;
// Three r170 clears its transmission target to premultiplied white at
// alpha 0.5 when the main canvas has alpha. Remove that fallback before
// filling uncovered pixels with the real page. Preserve opaque scene color.
float sceneCoverage = clamp(sceneColor.a * 2.0 - 1.0, 0.0, 1.0);
vec3 sceneRadiance = max(vec3(0.0), sceneColor.rgb - vec3(0.5 * (1.0 - sceneCoverage)));
return vec4(sceneRadiance + pageColor * (1.0 - sceneCoverage), 1.0);`,
      );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <transmission_pars_fragment>",
      transmission,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <opaque_fragment>",
      "#include <opaque_fragment>\n// Transmission is already resolved; do not composite the HTML a second time.\ngl_FragColor.a = 1.0;",
    );
  };
  material.customProgramCacheKey = () => key + "-frosted-page-refraction-v1";
}
