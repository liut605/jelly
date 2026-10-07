import assert from "node:assert/strict";
import { test } from "node:test";
import {
  createDriedPersimmonGeometry,
  mapDriedPersimmonPoint,
  mapDriedPersimmonSurface,
  driedPersimmonCutFace,
  driedPersimmonStar,
  driedPersimmonInteriorColor,
} from "../src/scene/driedPersimmonGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";

test("dried persimmon slice has positive supported volume and a smooth planar leaf-free cut", () => {
  const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
    createDriedPersimmonGeometry();
  const t = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    mapDriedPersimmonPoint,
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
    "Slice mapping folded a material cell",
  );
  assert(t.tetraRestVolumes.every((v) => v > 1e-5));
  assert(sourcePositions.every(Number.isFinite));
  assert.equal(mapDriedPersimmonPoint(0.5, 0, -Math.sqrt(0.75))[1], -0.5);
  assert(
    mapDriedPersimmonPoint(0, 0, 1)[1] - mapDriedPersimmonPoint(0, 0, -1)[1] >
      0.55,
  );
  for (let i = 0; i <= 8; i++) {
    const r = i / 10;
    for (let j = 0; j < 32; j++) {
      const a = (j * Math.PI) / 16,
        x = r * Math.sin(a),
        y = r * Math.cos(a),
        z = Math.sqrt(1 - r * r);
      const p = mapDriedPersimmonSurface(x, y, z);
      assert(
        Math.abs(p[1] - 0.1) < 1e-6,
        "Exposed flesh must be planar, without calyx or stem relief",
      );
      assert.equal(driedPersimmonCutFace(x, y, z), 1);
      assert.equal(
        driedPersimmonCutFace(x, y, -z),
        0,
        "Underside must retain its dried skin",
      );
    }
  }
  assert.equal(
    driedPersimmonCutFace(1, 0, 0),
    0,
    "Exterior rim retains its frosting",
  );
  geometry.dispose();
});

test("exposed dried persimmon has eight tissue rays, a darker heart and orange speckled flesh", () => {
  let regions = 0,
    inside = driedPersimmonStar(0, 0.45) > 0.5;
  for (let i = 1; i <= 1024; i++) {
    const a = (i * Math.PI) / 512,
      next = driedPersimmonStar(0.45 * Math.sin(a), 0.45 * Math.cos(a)) > 0.5;
    if (next && !inside) regions++;
    inside = next;
  }
  assert.equal(regions, 8);
  assert.equal(driedPersimmonStar(0.97, 0), 0);
  const center = driedPersimmonInteriorColor(0, 0, 0),
    outer = driedPersimmonInteriorColor(0.37, 0.47, 0);
  assert(
    center.r + center.g + center.b < (outer.r + outer.g + outer.b) * 0.5,
    "Center must read darker than the exposed flesh",
  );
  let dark = 0,
    orange = 0;
  for (let i = 0; i < 400; i++) {
    const c = driedPersimmonInteriorColor(
      ((i % 20) + 15.5) / 105,
      (Math.floor(i / 20) + 15.5) / 105,
      0.5 / 105,
    );
    assert([c.r, c.g, c.b].every(Number.isFinite));
    if (c.r < 0.25) dark++;
    else if (c.r > c.g * 2 && c.g > c.b * 2) orange++;
  }
  assert(
    dark > 5 && orange > 250,
    "Cut-face material needs orange flesh with sparse dark specks",
  );
});
