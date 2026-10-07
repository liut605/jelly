import * as THREE from "three";
import { specimens, type SpecimenId } from "../src/scene/specimens";
import { createGpuSoftBody, type SoftBodyGpu } from "../src/scene/softBodyGpu";
import { DEFAULT_SOFT_BODY_SETTINGS } from "../src/scene/softBodySettings";
import {
  initializeMunch,
  munchGeometry,
  addCutAppearance,
} from "../src/scene/munchGeometry";
import { MunchRejected, type BiteGuide } from "../src/scene/biteVolume";
import { screenBite } from "../src/scene/screenBite";
import { MunchWorkerClient } from "../src/scene/munchWorkerClient";
import wasmUrl from "manifold-3d/manifold.wasm?url";
const output = document.querySelector<HTMLPreElement>("#results")!;
const log = (s: string) => {
  output.textContent += "\n" + s;
};
const assert = (c: boolean, s: string) => {
  if (!c) throw new Error(s);
};
const frame = () =>
  new Promise<void>((resolve) => {
    const channel = new MessageChannel();
    channel.port1.onmessage = () => {
      channel.port1.close();
      channel.port2.close();
      resolve();
    };
    channel.port2.postMessage(null);
  });
const guide = (x = 0, z = -0.6, r = 0.65): BiteGuide => ({
  origin: new THREE.Vector3(x, 0, z),
  right: new THREE.Vector3(1, 0, 0),
  up: new THREE.Vector3(0, 0, 1),
  forward: new THREE.Vector3(0, -1, 0),
  radius: r,
});
async function run() {
  const workerMode = new URLSearchParams(location.search).has("worker");
  const worker = workerMode ? new MunchWorkerClient() : null;
  if (worker) worker.warmup();
  else await initializeMunch(() => wasmUrl);
  let totalBeats = 0;
  const heartbeat = setInterval(() => totalBeats++, 16);
  const cut: typeof munchGeometry = async (...args) => {
    const start = performance.now(),
      before = totalBeats;
    try {
      return await (worker ? worker.cut(...args) : munchGeometry(...args));
    } finally {
      const elapsed = performance.now() - start;
      log(`Cut ${Math.round(elapsed)}ms; UI heartbeats ${totalBeats - before}`);
      if (worker && elapsed > 250)
        assert(totalBeats > before, "Worker blocked the main thread");
    }
  };
  try {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(320, 240);
    document.body.append(renderer.domElement);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(40, 4 / 3, 0.01, 20);
    camera.position.set(0, 3, 3);
    camera.lookAt(0, -0.3, 0);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x777777, 3));
    const settings = {
      ...DEFAULT_SOFT_BODY_SETTINGS,
      paused: false,
      slowMotion: false,
      gravity: true,
    };
    const only = new URLSearchParams(location.search).get("specimen");
    output.textContent =
      "Testing live GPU solvers after real Boolean/volume cuts.";
    for (const id of Object.keys(specimens) as SpecimenId[]) {
      if (only && id !== only) continue;
      const spec = specimens[id],
        original = spec.create();
      let geometry = original.geometry,
        body: SoftBodyGpu = createGpuSoftBody(
          renderer,
          geometry,
          original.sourcePositions,
          original.rings,
          original.sides,
          original.volumeSourcePositions,
          spec.map,
        );
      const inspect = () => {
        const d = body.diagnostics();
        assert(
          Object.values(d).every(Number.isFinite),
          id + ": nonfinite state",
        );
        assert(
          d.minVolumeRatio > 0,
          id + ": inverted cell " + JSON.stringify(d),
        );
        assert(
          Math.abs(d.volumeRatio - 1) < 0.08,
          id + ": volume loss " + JSON.stringify(d),
        );
        // Cutting creates short subdivision edges: their raw stretch ratio is
        // ill-conditioned. Check resolved edges and absolute extension as well.
        const state = body.snapshot(),
          rest = body.topology.restPositions;
        let extension = 0,
          resolvedRatio = 1;
        body.topology.edges.forEach((links, i) =>
          links.forEach((j) => {
            const length = Math.hypot(
              ...[0, 1, 2].map(
                (k) => state.positions[j * 3 + k] - state.positions[i * 3 + k],
              ),
            );
            const original = Math.hypot(
              ...[0, 1, 2].map((k) => rest[j * 3 + k] - rest[i * 3 + k]),
            );
            extension = Math.max(extension, length - original);
            if (original > 0.02)
              resolvedRatio = Math.max(resolvedRatio, length / original);
          }),
        );
        assert(
          extension < 0.25 && resolvedRatio < 4,
          id +
            ": excessive cut strain " +
            JSON.stringify({ extension, resolvedRatio, ...d }),
        );
        assert(d.maxSpeed < 10, id + ": explosive motion " + JSON.stringify(d));
        body.syncSurfaceForRaycast();
        assert(
          geometry.getAttribute("position").array.every(Number.isFinite),
          id + ": invalid surface",
        );
        return d;
      };
      const advance = async (n: number) => {
        for (let i = 0; i < n; i++) {
          body.step(1 / 120, settings);
          if (i % 16 === 0) {
            inspect();
            await frame();
          }
        }
        return inspect();
      };
      await advance(60);
      for (let bite = 0; bite < 2; bite++) {
        body.syncSurfaceForRaycast();
        const before = body.snapshot();
        // The detailed rind can leave an unsupported sliver at some tooth/edge
        // intersections. Those must reject atomically; moving farther in is the
        // documented recovery. Exercise that recovery as well as successful cuts.
        const candidates =
          bite === 0 ? [-0.9, -0.75, -0.6] : [-0.5, -0.4, -0.3, -0.15, 0];
        let result: Awaited<ReturnType<typeof munchGeometry>> | undefined;
        for (const z of candidates) {
          try {
            result = await cut(geometry, before, guide(0, z, 0.65), id);
          } catch (error) {
            if (!(error instanceof MunchRejected)) throw error;
            assert(
              body
                .snapshot()
                .positions.every((v, i) => v === before.positions[i]),
              id + ": rejected cut modified physics",
            );
            log(
              id +
                ": unsupported thin overlap explicitly rejected; retry farther in.",
            );
            continue;
          }
          if (result.kind === "cut") break;
        }
        assert(!!result, id + ": no supported cut");
        if (!result) throw new Error(id + ": no supported cut");
        assert(result.kind === "cut", id + ": expected physical cut");
        if (result.kind !== "cut") continue;
        log(
          id +
            " bite " +
            (bite + 1) +
            ": " +
            result.pieces.length +
            " remaining piece(s).",
        );
        body.dispose();
        geometry.dispose();
        result.pieces.sort(
          (a, b) =>
            a.state.topology.tetraRestVolumes.reduce((s, v) => s + v, 0) -
            b.state.topology.tetraRestVolumes.reduce((s, v) => s + v, 0),
        );
        for (const piece of result.pieces) {
          geometry = piece.geometry;
          body = createGpuSoftBody(
            renderer,
            geometry,
            piece.source,
            0,
            0,
            piece.source,
            spec.map,
            piece.state.topology,
          );
          body.restoreState(piece.state.positions, piece.state.velocities);
          const material = new THREE.MeshPhysicalMaterial({
            vertexColors: true,
            roughness: 0.4,
          });
          body.bindSurfaceMaterial(material);
          spec.appearance(material);
          addCutAppearance(material, id);
          const mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);
          renderer.render(scene, camera);
          assert(renderer.getContext().getError() === 0, id + ": render error");
          await advance(60);
          for (let attempt = 0; attempt < 3; attempt++) {
            body.syncSurfaceForRaycast();
            const p = geometry.getAttribute("position");
            const vertex = Math.floor(p.count * (0.19 + attempt * 0.21));
            const point = new THREE.Vector3().fromBufferAttribute(p, vertex);
            body.beginGrab(point, [vertex], new THREE.Vector3(1, 0, 0));
            body.moveGrab(
              point.clone().add(new THREE.Vector3(0.12, 0.24, -0.08)),
            );
            await advance(24);
            body.endGrab();
            await advance(36);
          }
          const d = inspect();
          log(
            id +
              " bite " +
              (bite + 1) +
              ": grabbing/release stable; volume " +
              d.volumeRatio.toFixed(4) +
              ", min cell " +
              d.minVolumeRatio.toFixed(4),
          );
          renderer.render(scene, camera);
          scene.remove(mesh);
          material.dispose();
          if (piece !== result.pieces.at(-1)) {
            const removed = await cut(
              geometry,
              body.snapshot(),
              guide(0, 1, 4),
              id,
            );
            assert(
              removed.kind === "consumed",
              id + ": individual piece removal failed",
            );
            body.dispose();
            geometry.dispose();
          }
        }
      }
      body.syncSurfaceForRaycast();
      const finish = await cut(geometry, body.snapshot(), guide(0, 1, 4), id);
      assert(finish.kind === "consumed", id + ": finish failed");
      body.dispose();
      geometry.dispose();
      const fresh = spec.create();
      body = createGpuSoftBody(
        renderer,
        fresh.geometry,
        fresh.sourcePositions,
        fresh.rings,
        fresh.sides,
        fresh.volumeSourcePositions,
        spec.map,
      );
      geometry = fresh.geometry;
      const dropped = body.snapshot().positions;
      for (let i = 1; i < dropped.length; i += 3) dropped[i] += 0.6;
      body.restoreState(dropped);
      await advance(90);
      body.reset();
      assert(
        Math.abs(body.diagnostics().volumeRatio - 1) < 1e-4,
        id + ": reset failed",
      );
      body.dispose();
      geometry.dispose();
      log(id + ": consume, fresh drop, and whole-body reset PASS.");
      await frame();
    }
    // A bite through the center leaves two separate caps. Pick, stretch, and
    // consume each independently, with no constraints connecting them.
    const splitSpec = specimens["dried-persimmon"],
      data = splitSpec.create();
    const whole = createGpuSoftBody(
      renderer,
      data.geometry,
      data.sourcePositions,
      data.rings,
      data.sides,
      data.volumeSourcePositions,
      splitSpec.map,
    );
    whole.syncSurfaceForRaycast();
    const split = await cut(
      data.geometry,
      whole.snapshot(),
      guide(0, 0.7, 0.8),
      "dried-persimmon",
    );
    assert(
      split.kind === "cut" && split.pieces.length === 2,
      "Expected two independent remaining pieces",
    );
    whole.dispose();
    data.geometry.dispose();
    if (split.kind === "cut")
      for (const [pieceIndex, piece] of split.pieces.entries()) {
        const body = createGpuSoftBody(
          renderer,
          piece.geometry,
          piece.source,
          0,
          0,
          piece.source,
          splitSpec.map,
          piece.state.topology,
        );
        body.restoreState(piece.state.positions, piece.state.velocities);
        body.syncSurfaceForRaycast();
        const mesh = new THREE.Mesh(
          piece.geometry,
          new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }),
        );
        const index = piece.geometry.getIndex()!,
          positions = piece.geometry.getAttribute("position");
        const a = new THREE.Vector3().fromBufferAttribute(
            positions,
            index.getX(0),
          ),
          b = new THREE.Vector3().fromBufferAttribute(positions, index.getX(1)),
          c = new THREE.Vector3().fromBufferAttribute(positions, index.getX(2));
        const normal = new THREE.Vector3()
          .crossVectors(b.clone().sub(a), c.clone().sub(a))
          .normalize();
        const center = a.clone().add(b).add(c).divideScalar(3);
        const hits = new THREE.Raycaster(
          center.clone().addScaledVector(normal, 2),
          normal.clone().negate(),
        ).intersectObject(mesh);
        assert(hits.length > 0, "Remaining piece could not be picked");
        const hit = hits[0],
          face = hit.face!,
          bary = new THREE.Vector3();
        THREE.Triangle.getBarycoord(
          hit.point,
          new THREE.Vector3().fromBufferAttribute(positions, face.a),
          new THREE.Vector3().fromBufferAttribute(positions, face.b),
          new THREE.Vector3().fromBufferAttribute(positions, face.c),
          bary,
        );
        body.beginGrab(hit.point, [face.a, face.b, face.c], bary);
        body.moveGrab(
          hit.point
            .clone()
            .add(
              new THREE.Vector3(pieceIndex === 0 ? -0.35 : 0.35, 0.55, 0.12),
            ),
        );
        for (let i = 0; i < 100; i++) {
          if (i === 30) body.endGrab();
          body.step(1 / 120, settings);
          if (i % 16 === 0) {
            const d = body.diagnostics();
            assert(
              d.minVolumeRatio > 0 &&
                Math.abs(d.volumeRatio - 1) < 0.08 &&
                d.maxSpeed < 10,
              "Unstable disconnected piece " + JSON.stringify(d),
            );
            await frame();
          }
        }
        body.syncSurfaceForRaycast();
        const fruit = new THREE.Group();
        fruit.add(mesh);
        const biteCamera = new THREE.PerspectiveCamera(
          40,
          1000 / 800,
          0.01,
          100,
        );
        biteCamera.position.set(0, 5, 8);
        biteCamera.lookAt(0, 0, 0);
        biteCamera.updateMatrixWorld();
        piece.geometry.computeBoundingBox();
        const projected = piece.geometry
          .boundingBox!.getCenter(new THREE.Vector3())
          .project(biteCamera);
        const target = screenBite(
          piece.geometry,
          mesh,
          fruit,
          biteCamera,
          new THREE.Vector2(projected.x, projected.y - (135 * 1.6) / 800),
          135,
          1000,
          800,
        );
        assert(
          target.kind === "hit" && target.fullyCovered,
          "Moved fragment did not match its visible bite guide",
        );
        if (target.kind !== "hit") throw new Error("Missing moved fragment");
        const removed = await cut(
          piece.geometry,
          body.snapshot(),
          target.guide ?? guide(),
          "dried-persimmon",
          target.fullyCovered,
        );
        assert(removed.kind === "consumed", "Piece removal failed");
        body.dispose();
        piece.geometry.dispose();
        mesh.material.dispose();
        log(
          "Independent piece " +
            (pieceIndex + 1) +
            ": ray picking, grab/release, current screen alignment and consumption PASS.",
        );
      }
    log("PASS: Munch GPU suite complete.");
    document.body.dataset.result = "pass";
    renderer.dispose();
  } finally {
    worker?.dispose();
    clearInterval(heartbeat);
  }
}
run().catch((error) => {
  log("FAIL: " + String(error));
  document.body.dataset.result = "fail";
  console.error(error);
});
