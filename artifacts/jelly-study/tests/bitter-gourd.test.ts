import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createBitterGourdGeometry,
  mapBitterGourdPoint,
  mapBitterGourdSurface,
} from "../src/scene/bitterGourdGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";
test("bitter gourd has connected positive volume, a thick supported core and real external tubercles", () => {
  const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
    createBitterGourdGeometry();
  const t = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    mapBitterGourdPoint,
    mapBitterGourdSurface,
  );
  const unwarped = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    (x, y, z) => [x, z, -y],
  );
  assert.deepEqual(
    t.tetrahedra,
    unwarped.tetrahedra,
    "Gourd warp reversed a material cell",
  );
  assert(t.tetraRestVolumes.every((v) => v > 1e-5));
  assert(
    mapBitterGourdPoint(0, 0, 1)[1] - mapBitterGourdPoint(0, 0, -1)[1] > 0.5,
  );
  assert.equal(mapBitterGourdPoint(0.5, 0, -Math.sqrt(0.75))[1], -0.5);
  const rim = [];
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2,
      p = mapBitterGourdSurface(Math.sin(a), Math.cos(a), 0);
    rim.push(Math.hypot(p[0], p[2]));
  }
  assert(
    Math.max(...rim) - Math.min(...rim) > 0.1,
    "Exterior must contain real bumps",
  );
  // Fine bumps must have real side-wall relief, rather than only a wavy outline.
  let maxRelief = 0;
  for (let i = 0; i < sourcePositions.length; i += 3) {
    const p = mapBitterGourdPoint(
      ...(Array.from(volumeSourcePositions.slice(i, i + 3)) as [
        number,
        number,
        number,
      ]),
    );
    const relief =
      Math.hypot(sourcePositions[i], sourcePositions[i + 2]) -
      Math.hypot(p[0], p[2]);
    maxRelief = Math.max(maxRelief, relief);
  }
  assert(
    maxRelief > 0.04,
    "The exterior should have raised wart-like tubercles",
  );
  assert(sourcePositions.every(Number.isFinite));
  geometry.dispose();
});
