import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createPeachGeometry,
  mapPeachSlicePoint,
  pitRadius,
  PEACH_RINGS,
  PEACH_SIDES,
} from "../src/scene/peachGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";

const { geometry, sourcePositions, volumeSourcePositions } =
  createPeachGeometry();
const topology = createVolumeTopology(
  volumeSourcePositions,
  PEACH_RINGS,
  PEACH_SIDES,
  mapPeachSlicePoint,
);
geometry.dispose();

test("tetrahedra form a connected, closed volume without unmatched interior faces", () => {
  const faces = new Map<string, number>();
  for (let i = 0; i < topology.tetrahedra.length; i += 4) {
    const nodes = Array.from(topology.tetrahedra.slice(i, i + 4));
    for (const indices of [
      [0, 1, 2],
      [0, 1, 3],
      [0, 2, 3],
      [1, 2, 3],
    ]) {
      const key = indices
        .map((j) => nodes[j])
        .sort((a, b) => a - b)
        .join(",");
      faces.set(key, (faces.get(key) ?? 0) + 1);
    }
  }
  assert([...faces.values()].every((count) => count === 1 || count === 2));
  const surface = new Set(topology.surfaceGrid);
  const boundaryEdges = new Map<string, number>();
  for (const [face, count] of faces) {
    if (count !== 1) continue;
    const nodes = face.split(",").map(Number);
    assert(
      nodes.every((node) => surface.has(node)),
      `Interior crack at ${face}`,
    );
    for (const pair of [
      [0, 1],
      [1, 2],
      [2, 0],
    ]) {
      const key = pair
        .map((i) => nodes[i])
        .sort((a, b) => a - b)
        .join(",");
      boundaryEdges.set(key, (boundaryEdges.get(key) ?? 0) + 1);
    }
  }
  assert([...boundaryEdges.values()].every((count) => count === 2));
  assert(
    topology.tetraRestVolumes.every(
      (volume) => Number.isFinite(volume) && volume > 0,
    ),
  );
  const visited = new Set<number>();
  const queue = [0];
  while (queue.length) {
    const node = queue.pop()!;
    if (visited.has(node)) continue;
    visited.add(node);
    queue.push(...topology.edges[node].filter((n) => !visited.has(n)));
  }
  assert.equal(visited.size, topology.nodeCount);
});

test("surface bindings preserve rigid translations and close the visible seam", () => {
  assert.equal(topology.bindings.length, sourcePositions.length / 3);
  for (const binding of topology.bindings) {
    assert(
      Math.abs(binding.weights.reduce((sum, w) => sum + w, 0) - 1) < 1e-12,
    );
    assert(
      binding.nodes.every((node) => node >= 0 && node < topology.nodeCount),
    );
  }
  for (let row = 0; row <= PEACH_RINGS; row++) {
    const first = topology.bindings[row * (PEACH_SIDES + 1)];
    const last = topology.bindings[row * (PEACH_SIDES + 1) + PEACH_SIDES];
    assert.deepEqual(first, last);
  }
});

test("the slice cavity is empty and the volume mapping does not fold cells", () => {
  const unwarped = createVolumeTopology(
    volumeSourcePositions,
    PEACH_RINGS,
    PEACH_SIDES,
    (x, y, z) => [x, z, -y],
  );
  assert.deepEqual(
    topology.tetrahedra,
    unwarped.tetrahedra,
    "A material cell flipped during cavity construction",
  );
  const frontCenter = mapPeachSlicePoint(0, 0, 1);
  const backCenter = mapPeachSlicePoint(0, 0, -1);
  const cutFace = mapPeachSlicePoint(0.65, 0, Math.sqrt(1 - 0.65 ** 2));
  const cavityDepth = cutFace[1] - frontCenter[1];
  assert(
    cavityDepth > 0.12 && cavityDepth < 0.18,
    "Pit socket must remain shallow",
  );
  assert(
    pitRadius(0.3, 0.3) > pitRadius(0.3, -0.21),
    "Teardrop should narrow towards the tip",
  );
  assert(
    frontCenter[1] > backCenter[1] + 0.15,
    "Insufficient flesh behind the cavity",
  );
  assert(
    topology.tetraRestVolumes.every((volume) => volume > 1e-5),
    "Sliver cells near the cavity",
  );
});

test("the cut face rolls into the outer skin with no rim crease", () => {
  for (const angle of [0.2, 0.8, 1.8, 2.7, 4.1, 5.7]) {
    const sample = (z: number) => {
      const r = Math.sqrt(1 - z * z);
      return mapPeachSlicePoint(r * Math.cos(angle), r * Math.sin(angle), z);
    };
    const a = sample(-0.001),
      b = sample(0),
      c = sample(0.001);
    const left = b.map((v, i) => v - a[i]),
      right = c.map((v, i) => v - b[i]);
    const dot =
      left.reduce((s, v, i) => s + v * right[i], 0) /
      (Math.hypot(...left) * Math.hypot(...right));
    assert(dot > 0.999, `Rim tangent discontinuity at ${angle}: ${dot}`);
  }
});

test("the slice has a broad level support area with rounded shoulders", () => {
  const center = mapPeachSlicePoint(0, 0, -1)[1];
  for (const [x, y] of [
    [0.5, 0],
    [-0.5, 0],
    [0, 0.5],
    [0, -0.5],
    [0.35, 0.35],
  ]) {
    const p = mapPeachSlicePoint(x, y, -Math.sqrt(1 - x * x - y * y));
    assert(
      Math.abs(p[1] - center) < 1e-10,
      "Base should share one support plane",
    );
  }
  const shoulder = mapPeachSlicePoint(0.85, 0, -Math.sqrt(1 - 0.85 ** 2));
  assert(
    shoulder[1] > center && shoulder[1] < 0,
    "Shoulder should roll up from the support plane",
  );
});
