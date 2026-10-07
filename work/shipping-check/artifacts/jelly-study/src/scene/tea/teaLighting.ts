import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

// A directional softbox from the upper left, with contact-hardening shadow
// filtering. Geometry casts the shadows; no baked tabletop image is used.
export function applyTeaShadowShader(material: THREE.Material): void {
  const previous = material.onBeforeCompile.bind(material);
  const previousKey = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    const chunk = THREE.ShaderChunk.shadowmap_pars_fragment;
    const start = chunk.indexOf("#if defined( SHADOWMAP_TYPE_PCF )");
    const end = chunk.indexOf(
      "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )",
      start,
    );
    const filter = `#if defined( SHADOWMAP_TYPE_PCF )
      vec2 teaTexel = 1.0 / shadowMapSize;
      float teaBlocker = 0.0;
      float teaCount = 0.0;
      for (int i = 0; i < 12; i++) {
        float fi = float(i) + 0.5;
        float angle = fi * 2.39996323;
        vec2 offset = vec2(cos(angle), sin(angle)) * sqrt(fi / 12.0);
        float depth = unpackRGBAToDepth(texture2D(shadowMap, shadowCoord.xy + offset * teaTexel * shadowRadius));
        if (depth < shadowCoord.z - 0.00008) { teaBlocker += depth; teaCount += 1.0; }
      }
      if (teaCount > 0.0) {
        float gap = max(0.0, shadowCoord.z - teaBlocker / teaCount);
        float radius = clamp(gap * 1800.0, 1.25, shadowRadius);
        shadow = 0.0;
        for (int i = 0; i < 32; i++) {
          float fi = float(i) + 0.5;
          float angle = fi * 2.39996323;
          vec2 offset = vec2(cos(angle), sin(angle)) * sqrt(fi / 32.0);
          shadow += texture2DCompare(shadowMap, shadowCoord.xy + offset * teaTexel * radius, shadowCoord.z);
        }
        shadow /= 32.0;
      }
    `;
    if (start < 0 || end < 0)
      throw new Error(
        "Tea shadow shader no longer matches this Three.js version",
      );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <shadowmap_pars_fragment>",
      chunk.slice(0, start) + filter + chunk.slice(end),
    );
  };
  material.customProgramCacheKey = () => `${previousKey}-tea-softbox-v1`;
}

export function createTeaLighting(scene: THREE.Scene): () => void {
  RectAreaLightUniformsLib.init();
  const hemisphere = new THREE.HemisphereLight("#fff9e9", "#a5a28f", 1.65);
  const key = new THREE.DirectionalLight("#fff7e6", 1.8);
  key.position.set(-2.8, 4.8, 3.5);
  key.target.position.set(0, 0.25, 0);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, {
    left: -1.35,
    right: 1.35,
    top: 1.4,
    bottom: -1.2,
    near: 0.1,
    far: 10,
  });
  key.shadow.bias = -0.00006;
  key.shadow.normalBias = 0.0015;
  key.shadow.radius = 64;
  const softbox = new THREE.RectAreaLight("#fff7e6", 5, 3.5, 3.5);
  softbox.position.copy(key.position);
  softbox.lookAt(key.target.position);
  const fill = new THREE.DirectionalLight("#eff2e8", 0.5);
  fill.position.set(3, 2, 1);
  scene.add(hemisphere, key, key.target, fill, softbox);
  return () => {
    key.shadow.map?.dispose();
    scene.remove(hemisphere, key, key.target, fill, softbox);
  };
}
