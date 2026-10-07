import * as THREE from "three";
import {
  bindJellyOptics,
  createRefractionBackdrop,
  type RefractionBackdrop,
} from "../src/scene/jellyOptics";
import { specimens, type SpecimenId } from "../src/scene/specimens";
import { createGpuSoftBody } from "../src/scene/softBodyGpu";
import {
  addCutAppearance,
  initializeMunch,
  munchGeometry,
} from "../src/scene/munchGeometry";
import wasmUrl from "manifold-3d/manifold.wasm?url";

const output = document.querySelector<HTMLPreElement>("#results")!;
const log = (message: string) => {
  output.textContent += "\n" + message;
};
const assert = (condition: boolean, message: string) => {
  if (!condition) throw new Error(message);
};
async function run() {
  const captured = createRefractionBackdrop(
    document.querySelector<HTMLElement>("#capture")!,
  );
  await document.fonts.ready;
  captured.update();
  const source = captured.texture.image as HTMLCanvasElement;
  const ink = source
    .getContext("2d")!
    .getImageData(0, 0, source.width, source.height).data;
  let inkPixels = 0;
  for (let i = 0; i < ink.length; i += 4) if (ink[i] < 170) inkPixels++;
  assert(
    inkPixels > 100,
    "Typography was not included in the refraction input",
  );
  log("DOM heading/caption are present in the transmission texture.");

  const width = 320,
    height = 240;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.NoToneMapping;
  document.body.append(renderer.domElement);
  const target = new THREE.WebGLRenderTarget(width, height);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.01, 30);
  camera.position.set(0, 0, 3);
  camera.lookAt(0, 0, 0);
  const stripes = document.createElement("canvas");
  stripes.width = width;
  stripes.height = height;
  const context = stripes.getContext("2d")!;
  for (let x = 0; x < width; x += 24) {
    context.fillStyle = (x / 24) % 2 ? "white" : "black";
    context.fillRect(x, 0, 24, height);
  }
  const texture = new THREE.CanvasTexture(stripes);
  texture.colorSpace = THREE.SRGBColorSpace;
  const backdrop: RefractionBackdrop = {
    texture,
    size: new THREE.Vector2(width, height),
    pixelRatio: { value: 1 },
    update() {},
    dispose() {
      texture.dispose();
    },
  };
  const material = new THREE.MeshPhysicalMaterial({
    transmission: 1,
    roughness: 0,
    thickness: 0.75,
    ior: 1,
    color: "white",
  });
  bindJellyOptics(material, backdrop);
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 80, 48),
    material,
  );
  scene.add(sphere);
  const render = () => {
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
    const pixels = new Uint8Array(width * height * 4);
    renderer.readRenderTargetPixels(target, 0, 0, width, height, pixels);
    assert(renderer.getContext().getError() === 0, "WebGL optical pass failed");
    return pixels;
  };
  const flat = render();
  assert(
    flat[((height / 2) * width + width / 2) * 4 + 3] === 255,
    "Jelly still leaks raw HTML through canvas alpha",
  );
  assert(flat[3] === 0, "Empty canvas no longer preserves the page background");
  material.ior = 1.4;
  const lens = render();
  let shifts = 0;
  for (let i = 0; i < lens.length; i += 4) {
    if (lens[i + 3] !== 255 || flat[i + 3] !== 255) continue;
    if ((flat[i] < 80 && lens[i] > 170) || (flat[i] > 170 && lens[i] < 80))
      shifts++;
  }
  assert(
    shifts > 100,
    "Curved-surface refraction did not spatially shift the background stripes: " +
      shifts,
  );
  log(
    "Curved surface + IOR bends the background: " +
      shifts +
      " pixels change stripe band.",
  );
  material.roughness = 0.65;
  const frost = render();
  const contrast = (pixels: Uint8Array) => {
    const samples: number[] = [];
    for (let y = 85; y < 155; y++)
      for (let x = 115; x < 205; x++) samples.push(pixels[(y * width + x) * 4]);
    const mean = samples.reduce((sum, x) => sum + x, 0) / samples.length;
    return (
      samples.reduce((sum, x) => sum + (x - mean) ** 2, 0) / samples.length
    );
  };
  assert(
    contrast(frost) < contrast(lens) * 0.5,
    "Frost did not suppress sharp background contrast",
  );
  log(
    "Frost reduces transmitted stripe contrast by " +
      (100 * (1 - contrast(frost) / contrast(lens))).toFixed(1) +
      "%.",
  );
  scene.remove(sphere);
  sphere.geometry.dispose();
  material.dispose();
  camera.position.set(0, 2.8, 3.5);
  camera.lookAt(0, -0.15, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x777777, 2));
  await initializeMunch(() => wasmUrl);
  for (const id of Object.keys(specimens) as SpecimenId[]) {
    const spec = specimens[id],
      data = spec.create();
    const body = createGpuSoftBody(
      renderer,
      data.geometry,
      data.sourcePositions,
      data.rings,
      data.sides,
      data.volumeSourcePositions,
      spec.map,
    );
    const skin = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.58,
      transmission: 0.62,
      thickness: 0.75,
      ior: 1.4,
    });
    body.bindSurfaceMaterial(skin);
    spec.appearance(skin);
    bindJellyOptics(skin, captured);
    const mesh = new THREE.Mesh(data.geometry, skin);
    scene.add(mesh);
    const pixels = render();
    let visible = 0;
    for (let i = 3; i < pixels.length; i += 4)
      if (pixels[i]) {
        visible++;
        assert(pixels[i] === 255, id + " has a translucent canvas alpha pixel");
      }
    assert(visible > 500, id + " did not render");
    scene.remove(mesh);
    skin.dispose();
    if (id === "peach") {
      body.syncSurfaceForRaycast();
      const result = await munchGeometry(
        data.geometry,
        body.snapshot(),
        {
          origin: new THREE.Vector3(0, 0, -0.6),
          right: new THREE.Vector3(1, 0, 0),
          up: new THREE.Vector3(0, 0, 1),
          forward: new THREE.Vector3(0, -1, 0),
          radius: 0.65,
        },
        id,
      );
      assert(result.kind === "cut", "Expected a cut for optics regression");
      if (result.kind === "cut")
        for (const piece of result.pieces) {
          const cutBody = createGpuSoftBody(
            renderer,
            piece.geometry,
            piece.source,
            0,
            0,
            piece.source,
            spec.map,
            piece.state.topology,
          );
          cutBody.restoreState(piece.state.positions, piece.state.velocities);
          const cutSkin = new THREE.MeshPhysicalMaterial({
            vertexColors: true,
            roughness: 0.58,
            transmission: 0.62,
            thickness: 0.75,
            ior: 1.4,
          });
          cutBody.bindSurfaceMaterial(cutSkin);
          spec.appearance(cutSkin);
          addCutAppearance(cutSkin, id);
          bindJellyOptics(cutSkin, captured);
          const cutMesh = new THREE.Mesh(piece.geometry, cutSkin);
          scene.add(cutMesh);
          const cutPixels = render();
          assert(
            cutPixels.every((v, i) => i % 4 !== 3 || v === 0 || v === 255),
            "Bitten surface leaks HTML alpha",
          );
          scene.remove(cutMesh);
          cutSkin.dispose();
          cutBody.dispose();
          piece.geometry.dispose();
        }
    }
    body.dispose();
    data.geometry.dispose();
    log(
      id + ": deformed surface shader, transmission and opaque coverage PASS.",
    );
  }
  renderer.setRenderTarget(null);
  target.dispose();
  backdrop.dispose();
  captured.dispose();
  renderer.dispose();
  document.body.dataset.result = "pass";
  log("PASS: Frost, refraction, all specimens and bite surfaces.");
}
run().catch((error) => {
  document.body.dataset.result = "fail";
  log("FAIL: " + String(error));
  console.error(error);
});
