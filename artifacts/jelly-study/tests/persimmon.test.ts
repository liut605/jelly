import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createPersimmonGeometry,
  mapPersimmonPoint,
  persimmonStar,
} from "../src/scene/persimmonGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";

test("persimmon has a thick supported closed volume without folded material cells", () => {
  const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
    createPersimmonGeometry();
  const volume = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    mapPersimmonPoint,
  );
  const baseline = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    (x, y, z) => [x, z, -y],
  );
  assert.deepEqual(
    volume.tetrahedra,
    baseline.tetrahedra,
    "Slice mapping reversed a material cell",
  );
  assert(volume.tetraRestVolumes.every((v) => v > 1e-5));
  assert.equal(mapPersimmonPoint(0.5, 0, -Math.sqrt(0.75))[1], -0.5);
  assert(mapPersimmonPoint(0, 0, 1)[1] - mapPersimmonPoint(0, 0, -1)[1] > 0.55);
  assert(sourcePositions.every(Number.isFinite));
  const rim = Array.from({ length: 256 }, (_, i) => {
    const a = (i * Math.PI) / 128,
      p = mapPersimmonPoint(Math.sin(a), Math.cos(a), 0);
    return Math.hypot(p[0], p[2]);
  });
  assert(
    Math.max(...rim) - Math.min(...rim) < 0.03,
    "The peel should have a circular outline",
  );
  geometry.dispose();
});

test("persimmon tissue has eight separate star rays around a pale unmasked center", () => {
  let regions = 0,
    wasInside = false;
  for (let i = 0; i <= 1024; i++) {
    const a = (i * Math.PI) / 512,
      inside = persimmonStar(0.45 * Math.sin(a), 0.45 * Math.cos(a)) > 0.5;
    if (inside && !wasInside) regions++;
    wasInside = inside;
  }
  assert.equal(regions, 8);
  assert.equal(persimmonStar(0, 0), 0);
  assert.equal(persimmonStar(0.98, 0), 0);
});
