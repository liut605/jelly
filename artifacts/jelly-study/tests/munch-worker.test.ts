import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import {
  createPeachGeometry,
  mapPeachSlicePoint,
} from "../src/scene/peachGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";
import {
  packRequest,
  unpackRequest,
  transferBuffers,
  packResult,
  unpackResult,
  type CutResponse,
  type CutRequest,
} from "../src/scene/munchTransfer.ts";
import { MunchWorkerClient } from "../src/scene/munchWorkerClient.ts";
const guide = {
  origin: new THREE.Vector3(),
  right: new THREE.Vector3(1, 0, 0),
  up: new THREE.Vector3(0, 0, 1),
  forward: new THREE.Vector3(0, -1, 0),
  radius: 0.65,
};
function fixture() {
  const d = createPeachGeometry();
  const topology = createVolumeTopology(
    d.volumeSourcePositions,
    d.rings,
    d.sides,
    mapPeachSlicePoint,
  );
  return {
    geometry: d.geometry,
    state: {
      topology,
      positions: topology.restPositions.slice(),
      velocities: new Float32Array(topology.nodeCount * 3),
    },
  };
}
test("worker transfer preserves the live mesh, variable-length bindings, material coordinates and velocities", () => {
  const f = fixture();
  f.state.velocities[1] = 0.123;
  const packed = packRequest(1, f.geometry, f.state, guide, "peach", false);
  const received = structuredClone(packed, {
    transfer: transferBuffers(packed),
  });
  assert.equal(packed.geometry.attributes.position.array.byteLength, 0);
  assert(f.geometry.getAttribute("position").array.byteLength > 0);
  assert(f.state.topology.restPositions.byteLength > 0);
  assert(f.state.positions.byteLength > 0);
  const decoded = unpackRequest(received);
  assert.deepEqual(decoded.state, f.state);
  assert.deepEqual(decoded.guide, guide);
  for (const name of Object.keys(received.geometry.attributes))
    assert.deepEqual(
      decoded.geometry.getAttribute(name).array,
      f.geometry.getAttribute(name).array,
    );
  decoded.geometry.userData.volumeSkinning = true;
  decoded.geometry.userData.volumeBindingsReady = true;
  const result = packResult({
    kind: "cut",
    removedVolume: 0.5,
    pieces: [
      {
        geometry: decoded.geometry,
        source: decoded.state.positions.slice(),
        state: decoded.state,
      },
    ],
  });
  const restored = unpackResult(
    structuredClone(result, { transfer: transferBuffers(result) }),
  );
  assert.equal(restored.kind, "cut");
  if (restored.kind === "cut") {
    assert.deepEqual(restored.pieces[0].state, f.state);
    assert.equal(
      restored.pieces[0].geometry.userData.volumeBindingsReady,
      true,
    );
    restored.pieces[0].geometry.dispose();
  }
  f.geometry.dispose();
  decoded.geometry.dispose();
});
class FakeWorker {
  onmessage: ((e: MessageEvent<CutResponse>) => void) | null = null;
  onerror: (() => void) | null = null;
  onmessageerror: (() => void) | null = null;
  terminated = false;
  requests: CutRequest[] = [];
  postMessage(message: CutRequest, transfer: ArrayBuffer[]) {
    this.requests.push(structuredClone(message, { transfer }));
  }
  terminate() {
    this.terminated = true;
  }
  respond(message: CutResponse) {
    this.onmessage?.({ data: message } as MessageEvent<CutResponse>);
  }
}
test("one reusable worker: misses/rejections retain scene and overlapping clicks are rejected", async () => {
  const f = fixture(),
    w = new FakeWorker();
  let starts = 0;
  const client = new MunchWorkerClient(() => {
    starts++;
    return w as unknown as Worker;
  });
  client.warmup();
  client.warmup();
  const first = client.cut(f.geometry, f.state, guide, "peach");
  await assert.rejects(
    client.cut(f.geometry, f.state, guide, "peach"),
    /current bite/,
  );
  w.respond({ id: w.requests[0].id, result: { kind: "miss" } });
  assert.deepEqual(await first, { kind: "miss" });
  const second = client.cut(f.geometry, f.state, guide, "peach");
  w.respond({ id: w.requests[1].id, error: "Too thin to simulate" });
  await assert.rejects(second, /Too thin/);
  assert.equal(starts, 1);
  assert(f.geometry.getAttribute("position").array.byteLength > 0);
  client.dispose();
  f.geometry.dispose();
});
test("reset cancels in-flight work and late replies cannot revive a disposed scene", async () => {
  const f = fixture(),
    w = new FakeWorker(),
    client = new MunchWorkerClient(() => w as unknown as Worker);
  const pending = client.cut(f.geometry, f.state, guide, "peach");
  const rejected = assert.rejects(pending, { name: "AbortError" });
  client.dispose();
  await rejected;
  assert(w.terminated);
  w.respond({
    id: w.requests[0].id,
    result: { kind: "consumed", removedVolume: 1 },
  });
  await assert.rejects(client.cut(f.geometry, f.state, guide, "peach"), {
    name: "AbortError",
  });
  f.geometry.dispose();
});
test("worker load failure is recoverable on the next bite", async () => {
  const f = fixture(),
    workers: FakeWorker[] = [];
  const client = new MunchWorkerClient(() => {
    const w = new FakeWorker();
    workers.push(w);
    return w as unknown as Worker;
  });
  const pending = client.cut(f.geometry, f.state, guide, "peach");
  workers[0].onerror?.();
  await assert.rejects(pending, /could not load/);
  const next = client.cut(f.geometry, f.state, guide, "peach");
  workers[1].respond({
    id: workers[1].requests[0].id,
    result: { kind: "miss" },
  });
  assert.deepEqual(await next, { kind: "miss" });
  assert(workers[0].terminated);
  client.dispose();
  f.geometry.dispose();
});
