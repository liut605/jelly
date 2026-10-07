import assert from "node:assert/strict";
import * as THREE from "three";
import { bindVolumeSurface } from "../src/scene/volumeSkinning.ts";
import { test } from "node:test";
import {
  createLotusRootGeometry,
  mapLotusRootPoint,
  mapLotusRootSurface,
  lotusRiceMask,
  lotusHollowDistance,
  LOTUS_CHAMBERS,
  LOTUS_HOLLOW_CHANNELS,
  lotusRootInteriorColor,
  OSMANTHUS_FLOWERS,
  osmanthusMask,
} from "../src/scene/lotusRootGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";

test("stuffed lotus root is a supported thick composite volume with attached rice and flower relief", () => {
  const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
    createLotusRootGeometry();
  const volume = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    mapLotusRootPoint,
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
    "Root mapping folded a material cell",
  );
  assert(volume.tetraRestVolumes.every((v) => v > 1e-5));
  assert(sourcePositions.every(Number.isFinite));
  assert.equal(mapLotusRootSurface(0.5, 0, -Math.sqrt(0.75))[1], -0.5);
  assert(mapLotusRootPoint(0, 0, 1)[1] - mapLotusRootPoint(0, 0, -1)[1] > 0.65);
  const [cx, cy] = LOTUS_CHAMBERS[0];
  const cz = Math.sqrt(1 - cx * cx - cy * cy);
  const depression =
    mapLotusRootPoint(cx, cy, cz)[1] - mapLotusRootSurface(cx, cy, cz)[1];
  assert(
    depression > 0.003 && depression < 0.025,
    "Sticky rice should sit just inside its channel rim",
  );
  const [fx, fy] = OSMANTHUS_FLOWERS[0],
    fz = Math.sqrt(1 - fx * fx - fy * fy);
  assert(
    mapLotusRootSurface(fx, fy, fz)[1] - mapLotusRootPoint(fx, fy, fz)[1] >
      0.007,
    "Embedded petals need shallow physical relief",
  );
  assert.equal(
    mapLotusRootSurface(fx, fy, -fz)[1],
    mapLotusRootPoint(fx, fy, -fz)[1],
    "Flowers should only affect the upward surface",
  );
  geometry.dispose();
});

test("lace channels contain contrasting white rice and nine separate four-petalled blossoms", () => {
  const flesh = lotusRootInteriorColor(0.2, 0, 0);
  assert(
    flesh.r > flesh.g && flesh.r < flesh.g * 3 && flesh.g > flesh.b,
    "Flesh should be muted salmon pink",
  );
  for (const [x, y] of LOTUS_CHAMBERS) {
    assert(lotusRiceMask(x, y) > 0.99);
    const white = lotusRootInteriorColor(x, y, -0.7);
    assert(
      white.g > 0.85 && white.b > 0.75,
      "Rice stays ivory through the filled channel depth",
    );
    assert(
      white.g > flesh.g * 3,
      "Filling should remain distinct from salmon root flesh",
    );
  }
  const widths = LOTUS_CHAMBERS.map((c) => c[3]),
    radii = LOTUS_CHAMBERS.map((c) => Math.hypot(c[0], c[1]));
  assert(
    Math.max(...widths) - Math.min(...widths) > 0.02 &&
      Math.max(...radii) - Math.min(...radii) > 0.04,
  );
  for (const [x, y] of LOTUS_HOLLOW_CHANNELS) {
    assert(lotusHollowDistance(x, y) < 1e-6);
    assert.equal(
      lotusRiceMask(x, y),
      0,
      "Small channels must not contain rice",
    );
  }
  assert.equal(OSMANTHUS_FLOWERS.length, 9);
  for (const [fx, fy, rotation, size] of OSMANTHUS_FLOWERS) {
    assert(
      lotusHollowDistance(fx, fy) > 2,
      "Blossoms must sit on flesh rather than disappear inside a tunnel",
    );
    let regions = 0;
    const value = (a: number) =>
      osmanthusMask(
        fx + 0.58 * size * Math.cos(a),
        fy + 0.58 * size * Math.sin(a),
      ) > 0.5;
    let inside = value(rotation + Math.PI / 4);
    for (let i = 1; i <= 256; i++) {
      const next = value(rotation + Math.PI / 4 + (i * Math.PI) / 128);
      if (next && !inside) regions++;
      inside = next;
    }
    assert.equal(
      regions,
      4,
      "Each osmanthus blossom should have four rounded petals",
    );
  }
});

test("small lotus tunnels are watertight, open through both caps, and bounded by the slice", () => {
  const { geometry, sourcePositions } = createLotusRootGeometry();
  const index = geometry.getIndex()!;
  const edges = new Map<string, number>();
  for (let i = 0; i < index.count; i += 3) {
    const ids = [index.getX(i), index.getX(i + 1), index.getX(i + 2)];
    for (let j = 0; j < 3; j++) {
      const a = ids[j],
        b = ids[(j + 1) % 3],
        key = a < b ? `${a}:${b}` : `${b}:${a}`;
      edges.set(key, (edges.get(key) ?? 0) + 1);
    }
  }
  assert(
    [...edges.values()].every((n) => n === 2),
    "Every cap, rim and tunnel edge must meet exactly two triangles",
  );
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }),
  );
  mesh.updateMatrixWorld();
  for (const [x, y] of LOTUS_HOLLOW_CHANNELS) {
    const p = mapLotusRootPoint(x, y, Math.sqrt(1 - x * x - y * y));
    const ray = new THREE.Raycaster(
      new THREE.Vector3(p[0], 1, p[2]),
      new THREE.Vector3(0, -1, 0),
    );
    assert.equal(
      ray.intersectObject(mesh).length,
      0,
      "No cap or stretched wall may obstruct the channel center",
    );
  }
  for (let i = 0; i < sourcePositions.length; i += 3) {
    assert(
      sourcePositions[i + 1] >= -0.500001 && sourcePositions[i + 1] < 0.2,
      "Tunnel wall protrudes beyond the fruit",
    );
  }
  geometry.dispose();
  mesh.material.dispose();
});

test("tunnel skin follows the actual volume under rigid tilt and local affine deformation", () => {
  const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
    createLotusRootGeometry();
  const volume = createVolumeTopology(
    volumeSourcePositions,
    rings,
    sides,
    mapLotusRootPoint,
  );
  bindVolumeSurface(geometry, sourcePositions, volume);
  assert.equal(volume.bindings.length, sourcePositions.length / 3);
  const transform = new THREE.Matrix4().makeRotationFromEuler(
    new THREE.Euler(0.7, -0.4, 0.25),
  );
  transform.scale(new THREE.Vector3(1.08, 0.92, 1.03));
  transform.setPosition(0.2, 0.5, -0.1);
  const moved = Array.from({ length: volume.nodeCount }, (_, i) =>
    new THREE.Vector3()
      .fromArray(volume.restPositions, i * 3)
      .applyMatrix4(transform),
  );
  const normalMatrix = new THREE.Matrix3().getNormalMatrix(transform);
  const basis = geometry.getAttribute("aVolumeNormal"),
    normals = geometry.getAttribute("normal");
  const expected = new THREE.Vector3(),
    actual = new THREE.Vector3();
  for (let i = 0; i < volume.bindings.length; i++) {
    const { nodes, weights } = volume.bindings[i];
    actual.set(0, 0, 0);
    nodes.forEach((n, j) => actual.addScaledVector(moved[n], weights[j]));
    expected.fromArray(sourcePositions, i * 3).applyMatrix4(transform);
    assert(
      actual.distanceTo(expected) < 1e-5,
      "A cap or wall vertex detached during a tilt",
    );
    const [a, b, c, d] = nodes.map((n) => moved[n]);
    const e = b.clone().sub(a),
      f = c.clone().sub(a),
      g = d.clone().sub(a);
    actual
      .copy(f)
      .cross(g)
      .multiplyScalar(basis.getX(i))
      .addScaledVector(g.clone().cross(e), basis.getY(i))
      .addScaledVector(e.clone().cross(f), basis.getZ(i))
      .normalize();
    expected
      .fromBufferAttribute(normals, i)
      .applyMatrix3(normalMatrix)
      .normalize();
    assert(
      actual.distanceTo(expected) < 1e-4,
      "Tunnel normal does not follow its volume deformation",
    );
  }
  geometry.dispose();
});
