import * as THREE from "three";
import { specimens, type SpecimenId } from "../src/scene/specimens";
import { createVolumeTopology } from "../src/scene/volumeTopology";
import {
  munchGeometry,
  initializeMunch,
  type MunchResult,
} from "../src/scene/munchGeometry";
import { MunchWorkerClient } from "../src/scene/munchWorkerClient";
import { packResult } from "../src/scene/munchTransfer";
import wasmUrl from "manifold-3d/manifold.wasm?url";
const out = document.querySelector<HTMLPreElement>("#results")!;
const log = (s: string) => {
  out.textContent += "\n" + s;
};
const assert = (c: boolean, s: string) => {
  if (!c) throw new Error(s);
};
const guide = {
  origin: new THREE.Vector3(0, 0, -0.6),
  right: new THREE.Vector3(1, 0, 0),
  up: new THREE.Vector3(0, 0, 1),
  forward: new THREE.Vector3(0, -1, 0),
  radius: 0.65,
};
function equal(a: unknown, b: unknown, path = "result"): void {
  if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
    const x = new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
      y = new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
    assert(
      x.length === y.length && x.every((v, i) => v === y[i]),
      path + " buffer differs",
    );
    return;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    const x = a as Record<string, unknown>,
      y = b as Record<string, unknown>;
    assert(
      JSON.stringify(Object.keys(x)) === JSON.stringify(Object.keys(y)),
      path + " keys differ",
    );
    for (const k of Object.keys(x)) equal(x[k], y[k], path + "." + k);
  } else assert(a === b, path + " differs");
}
const dispose = (r: MunchResult) => {
  if (r.kind === "cut") r.pieces.forEach((p) => p.geometry.dispose());
};
async function run() {
  const worker = new MunchWorkerClient();
  worker.warmup();
  await initializeMunch(() => wasmUrl);
  try {
    for (const id of Object.keys(specimens) as SpecimenId[]) {
      const spec = specimens[id],
        d = spec.create();
      const topology = createVolumeTopology(
        d.volumeSourcePositions,
        d.rings,
        d.sides,
        spec.map,
      );
      const state = {
        topology,
        positions: topology.restPositions.slice(),
        velocities: new Float32Array(topology.nodeCount * 3),
      };
      const start = performance.now();
      let beats = 0;
      const interval = setInterval(() => beats++, 16);
      let remote: MunchResult;
      try {
        remote = await worker.cut(d.geometry, state, guide, id);
      } finally {
        clearInterval(interval);
      }
      log(
        `${id}: worker ${Math.round(performance.now() - start)}ms, ${beats} UI updates`,
      );
      assert(beats > 0, "Main thread blocked");
      assert(
        d.geometry.getAttribute("position").array.byteLength > 0,
        "Live geometry detached",
      );
      const direct = await munchGeometry(d.geometry, state, guide, id);
      equal(packResult(remote), packResult(direct));
      log(
        id +
          ": worker and direct geometry, materials, velocities and constraints are byte-for-byte identical",
      );
      dispose(direct);
      dispose(remote);
      const miss = await worker.cut(
        d.geometry,
        state,
        { ...guide, origin: new THREE.Vector3(20, 0, 20) },
        id,
      );
      assert(miss.kind === "miss", "Miss changed scene");
      // Terminate real WASM work immediately and verify that it cannot commit.
      const cancelled = new MunchWorkerClient();
      const pending = cancelled.cut(d.geometry, state, guide, id);
      cancelled.dispose();
      const error = await pending.then(
        () => null,
        (e) => e,
      );
      assert(error?.name === "AbortError", "Cancellation failed");
      const consumed = await worker.cut(d.geometry, state, guide, id, true);
      assert(
        consumed.kind === "consumed",
        "Worker unusable after separate scene reset",
      );
      d.geometry.dispose();
      log(id + ": miss, cancellation, reuse and consumption PASS");
    }
    log("PASS: worker integration complete");
    document.body.dataset.result = "pass";
  } finally {
    worker.dispose();
  }
}
run().catch((e) => {
  log("FAIL: " + e);
  document.body.dataset.result = "fail";
});
