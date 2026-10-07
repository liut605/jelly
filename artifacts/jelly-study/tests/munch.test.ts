import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import {
  createDriedPersimmonGeometry,
  mapDriedPersimmonPoint,
} from "../src/scene/driedPersimmonGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";
import {
  cutVolume,
  biteDistance,
  type BiteGuide,
} from "../src/scene/biteVolume.ts";
import { bindVolumeSurface } from "../src/scene/volumeSkinning.ts";
import { biteArch } from "../src/scene/biteProfile.ts";
import { verticalBiteGuide } from "../src/scene/biteGuide.ts";
import {
  volumeNormalFrames,
  surfaceNormalFrame,
} from "../src/scene/volumeNormals.ts";
import {
  createRemnantCleanup,
  MIN_BITE_THICKNESS,
} from "../src/scene/biteRemnants.ts";
import { munchGeometry, initializeMunch } from "../src/scene/munchGeometry.ts";

const guide = (x = 0, y = -0.6): BiteGuide => ({
  origin: new THREE.Vector3(x, 0, y),
  right: new THREE.Vector3(1, 0, 0),
  up: new THREE.Vector3(0, 0, 1),
  forward: new THREE.Vector3(0, -1, 0),
  radius: 0.65,
});
function snapshot() {
  const d = createDriedPersimmonGeometry();
  d.geometry.dispose();
  const topology = createVolumeTopology(
    d.volumeSourcePositions,
    d.rings,
    d.sides,
    mapDriedPersimmonPoint,
  );
  return {
    topology,
    positions: topology.restPositions.slice(),
    velocities: new Float32Array(topology.nodeCount * 3),
  };
}
test("Munch removes volume and constraints while retaining a closed conforming tetrahedral boundary", () => {
  const before = snapshot(),
    after = cutVolume(before, guide());
  assert(after.length > 0);
  const volume = (t: typeof before.topology) =>
    t.tetraRestVolumes.reduce((a, b) => a + b, 0);
  const kept = after.reduce((s, p) => s + volume(p.topology), 0);
  assert(
    kept < volume(before.topology) * 0.95 &&
      kept > volume(before.topology) * 0.15,
  );
  for (const { topology: t } of after) {
    assert(t.tetraRestVolumes.every((v) => v > 1e-10));
    const faces = new Map<string, number[]>();
    for (let i = 0; i < t.tetrahedra.length; i += 4) {
      const tet = Array.from(t.tetrahedra.slice(i, i + 4));
      for (let skip = 0; skip < 4; skip++) {
        const f = tet.filter((_, j) => j !== skip).sort((a, b) => a - b),
          key = f.join(":");
        if (faces.has(key)) faces.delete(key);
        else faces.set(key, f);
      }
    }
    const edges = new Map<string, number>();
    for (const f of faces.values())
      for (let i = 0; i < 3; i++) {
        const pair = [f[i], f[(i + 1) % 3]].sort((a, b) => a - b).join(":");
        edges.set(pair, (edges.get(pair) ?? 0) + 1);
      }
    assert(
      [...edges.values()].every((n) => n === 2),
      "The cut physical surface has an open edge or T-junction",
    );
  }
});
test("a missed Munch leaves the exact original snapshot untouched", () => {
  const s = snapshot();
  assert.equal(cutVolume(s, guide(5, 5))[0], s);
});
test("a guide containing the complete remainder consumes its physical body", () => {
  const s = snapshot(),
    g = guide(0, 1);
  g.radius = 3;
  assert(
    s.positions.every(
      (_, i) =>
        i % 3 !== 0 ||
        biteDistance(new THREE.Vector3().fromArray(s.positions, i), g) < 0,
    ),
  );
  assert.equal(cutVolume(s, g).length, 0);
});
test("Munch creates a closed visible tooth-marked surface with new interior material", async () => {
  const d = createDriedPersimmonGeometry(),
    s = snapshot();
  const result = await munchGeometry(d.geometry, s, guide(), "dried-persimmon");
  assert.equal(result.kind, "cut");
  if (result.kind === "cut")
    for (const piece of result.pieces) {
      assert(
        piece.geometry.getAttribute("aCutSurface").array.some((v) => v > 0.5),
      );
      assert(
        piece.geometry
          .getAttribute("aInteriorColor")
          .array.every(Number.isFinite),
      );
      assert(piece.source.every(Number.isFinite));
      piece.geometry.dispose();
    }
  d.geometry.dispose();
});

test("a central bite can create independent physical pieces without cross-cut links", () => {
  const s = snapshot(),
    g = guide(0, 0.7);
  g.radius = 0.8;
  const pieces = cutVolume(s, g);
  assert.equal(pieces.length, 2);
  for (const { topology: t } of pieces) {
    assert(t.edges.every((row) => row.every((n) => n >= 0 && n < t.nodeCount)));
    assert(
      t.incidentTetrahedra.every((row) =>
        row.every((n) => n < t.tetraRestVolumes.length),
      ),
    );
  }
});

test("Munch accepts a grazing bite below the old overlap minimum and preserves its input", async () => {
  const d = createDriedPersimmonGeometry(),
    s = snapshot(),
    before = new Float32Array(d.geometry.getAttribute("position").array);
  const result = await munchGeometry(
    d.geometry,
    s,
    guide(0, -1.95),
    "dried-persimmon",
  );
  assert.equal(result.kind, "cut");
  if (result.kind === "cut") {
    const originalVolume = s.topology.tetraRestVolumes.reduce(
      (sum, v) => sum + v,
      0,
    );
    assert(
      result.removedVolume > 0 && result.removedVolume < originalVolume * 0.04,
    );
    const remainingMass = result.pieces.reduce(
      (sum, p) =>
        sum + p.state.topology.tetraRestVolumes.reduce((s, v) => s + v, 0),
      0,
    );
    assert(
      remainingMass < originalVolume,
      "Grazing cut must also remove physical mass",
    );
    for (const piece of result.pieces) piece.geometry.dispose();
  }
  assert.deepEqual(d.geometry.getAttribute("position").array, before);
  d.geometry.dispose();
});
test("a dividing bite produces two closed visible pieces with separate physical volumes", async () => {
  const d = createDriedPersimmonGeometry(),
    s = snapshot(),
    g = guide(0, 0.7);
  g.radius = 0.8;
  const result = await munchGeometry(d.geometry, s, g, "dried-persimmon");
  assert.equal(result.kind, "cut");
  if (result.kind === "cut") {
    assert.equal(result.pieces.length, 2);
    for (const p of result.pieces) {
      const positions = p.geometry.getAttribute("position"),
        index = p.geometry.getIndex()!;
      const keys = Array.from({ length: positions.count }, (_, i) =>
        [positions.getX(i), positions.getY(i), positions.getZ(i)]
          .map((v) => v.toFixed(5))
          .join(","),
      );
      const edges = new Map<string, number>();
      for (let i = 0; i < index.count; i += 3)
        for (let j = 0; j < 3; j++) {
          const a = keys[index.getX(i + j)],
            b = keys[index.getX(i + ((j + 1) % 3))];
          if (a === b) continue;
          const key = [a, b].sort().join(":");
          edges.set(key, (edges.get(key) ?? 0) + 1);
        }
      assert(
        [...edges.values()].every((n) => n % 2 === 0),
        "Visible cut has an open boundary",
      );
      p.geometry.dispose();
    }
  }
  d.geometry.dispose();
});

test("the supplied scalloped arch has its tall proportions and cuts vertically at every orbit", () => {
  const arch = biteArch(1);
  assert(Math.max(...arch.map((p) => p.y)) > 1.7);
  assert(Math.max(...arch.map((p) => p.x)) > 0.97);
  const fruit = new THREE.Group();
  fruit.scale.setScalar(0.7);
  fruit.updateMatrixWorld();
  for (const pitch of [0.16, 0.55, 1.3])
    for (const yaw of [-1, 0, 1]) {
      const camera = new THREE.PerspectiveCamera(35, 1.5, 0.01, 100);
      camera.position.set(
        5 * Math.cos(pitch) * Math.sin(yaw),
        5 * Math.sin(pitch),
        5 * Math.cos(pitch) * Math.cos(yaw),
      );
      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();
      const ray = new THREE.Ray(
        camera.position.clone(),
        camera.position.clone().negate().normalize(),
      );
      const g = verticalBiteGuide(ray, camera, fruit, 0, 100, 900)!;
      assert(g && Math.abs(g.forward.y) === 1);
      assert(Math.abs(g.up.y) < 1e-8 && Math.abs(g.right.y) < 1e-8);
      assert(g.right.clone().cross(g.up).dot(g.forward) > 0.999);
      assert.equal(
        Math.sign(biteDistance(new THREE.Vector3(0.1, -0.8, -0.1), g)),
        Math.sign(biteDistance(new THREE.Vector3(0.1, 0.8, -0.1), g)),
      );
    }
});

test("cut faces are finely tessellated, vertical and bound without changing their current pose", async () => {
  const d = createDriedPersimmonGeometry(),
    s = snapshot();
  const g = guide();
  const result = await munchGeometry(d.geometry, s, g, "dried-persimmon");
  assert.equal(result.kind, "cut");
  if (result.kind !== "cut") return;
  for (const p of result.pieces) {
    const geom = p.geometry,
      flags = geom.getAttribute("aCutSurface"),
      index = geom.getIndex()!,
      normals = geom.getAttribute("normal");
    const current = p.state.topology.bindings.map(({ nodes, weights }, i) => {
      const point = new THREE.Vector3();
      nodes.forEach((n, j) =>
        point.addScaledVector(
          new THREE.Vector3().fromArray(p.state.positions, n * 3),
          weights[j],
        ),
      );
      assert(
        point.distanceTo(new THREE.Vector3().fromArray(p.source, i * 3)) < 2e-6,
      );
      if (flags.getX(i) > 0.5 && flags.getX(i) < 1.5) {
        assert(Math.abs(normals.getY(i)) < 1e-4, "cut wall is angled");
        assert(
          Math.abs(biteDistance(point, g)) < 0.003,
          `cut wall diverges from guide: ${biteDistance(point, g)} at ${point.toArray()}`,
        );
      }
      return point;
    });
    let longest = 0;
    for (let i = 0; i < index.count; i += 3)
      for (let j = 0; j < 3; j++) {
        const a = index.getX(i + j),
          b = index.getX(i + ((j + 1) % 3));
        if (flags.getX(a) > 0.5 && flags.getX(b) > 0.5)
          longest = Math.max(longest, current[a].distanceTo(current[b]));
      }
    assert(longest < 0.095, `long cap triangle ${longest}`);
    p.geometry.dispose();
  }
  d.geometry.dispose();
});

test("the vertical cutter preserves the SVG's screen proportions across viewport, orbit and zoom", () => {
  const fruit = new THREE.Group();
  fruit.scale.setScalar(0.7);
  fruit.updateMatrixWorld();
  for (const [width, height] of [
    [1280, 720],
    [390, 844],
  ])
    for (const pitch of [0.4, 0.68, 1.3])
      for (const distance of [3.8, 7.4]) {
        const camera = new THREE.PerspectiveCamera(
          35,
          width / height,
          0.01,
          100,
        );
        camera.position.set(
          distance * Math.cos(pitch) * Math.sin(0.92),
          distance * Math.sin(pitch),
          distance * Math.cos(pitch) * Math.cos(0.92),
        );
        camera.lookAt(0, 0, 0);
        camera.updateMatrixWorld();
        const caster = new THREE.Raycaster();
        caster.setFromCamera(new THREE.Vector2(0.12, -0.2), camera);
        const radius = Math.min(135, Math.max(60, width * 0.085));
        const g = verticalBiteGuide(
          caster.ray,
          camera,
          fruit,
          0.1,
          radius,
          height,
        )!;
        assert(g?.arch);
        const screenArch = biteArch(radius);
        const center = fruit.localToWorld(g.origin.clone()).project(camera);
        g.arch.forEach((p, i) => {
          const local = g.origin
            .clone()
            .addScaledVector(g.right, p.x)
            .addScaledVector(g.up, p.y);
          const screen = fruit.localToWorld(local.clone()).project(camera);
          assert(
            Math.abs(((screen.x - center.x) * width) / 2 - screenArch[i].x) <
              1e-6,
          );
          assert(
            Math.abs(((screen.y - center.y) * height) / 2 - screenArch[i].y) <
              1e-6,
          );
          assert(Math.abs(biteDistance(local, g)) < 1e-6);
          assert(
            Math.abs(biteDistance(local.addScaledVector(g.forward, 0.8), g)) <
              1e-6,
          );
        });
      }
});

test("smooth volume normals reproduce affine strain without discontinuities at physical cell boundaries", () => {
  const { topology: t } = snapshot();
  const transform = new THREE.Matrix3().set(1, 0.1, 0, 0, 1, 0.08, 0.1, 0, 0.9);
  const positions = t.restPositions.slice();
  for (let i = 0; i < t.nodeCount; i++)
    new THREE.Vector3()
      .fromArray(positions, i * 3)
      .applyMatrix3(transform)
      .addScalar(0.3)
      .toArray(positions, i * 3);
  const frames = volumeNormalFrames(t, positions);
  for (let i = 0; i < t.nodeCount; i++) {
    const f = surfaceNormalFrame(frames, { nodes: [i], weights: [1] });
    assert(
      f.elements.every((v, k) => Math.abs(v - transform.elements[k]) < 1e-4),
    );
  }
});

test("a bite made in a deformed body retains its vertical surface and smooth normals when rebound", async () => {
  const d = createDriedPersimmonGeometry(),
    s = snapshot();
  bindVolumeSurface(d.geometry, d.sourcePositions, s.topology);
  d.geometry.userData.volumeSkinning = true;
  for (let i = 0; i < s.topology.nodeCount; i++) {
    const x = s.positions[i * 3],
      z = s.positions[i * 3 + 2];
    s.positions[i * 3 + 1] += 0.06 * Math.sin(x * 3) + 0.02 * z * z;
    s.positions[i * 3] += 0.025 * Math.sin(z * 3);
  }
  const attr = d.geometry.getAttribute("position");
  s.topology.bindings.forEach(({ nodes, weights }, i) => {
    const p = new THREE.Vector3();
    nodes.forEach((n, j) =>
      p.addScaledVector(
        new THREE.Vector3().fromArray(s.positions, n * 3),
        weights[j],
      ),
    );
    attr.setXYZ(i, p.x, p.y, p.z);
  });
  const g = guide();
  const result = await munchGeometry(d.geometry, s, g, "dried-persimmon");
  assert.equal(result.kind, "cut");
  if (result.kind === "cut")
    for (const piece of result.pieces) {
      const frames = volumeNormalFrames(
        piece.state.topology,
        piece.state.positions,
      );
      const flags = piece.geometry.getAttribute("aCutSurface"),
        normals = piece.geometry.getAttribute("normal");
      assert.equal(
        piece.state.topology.bindings.length,
        piece.source.length / 3,
      );
      piece.state.topology.bindings.forEach((binding, i) => {
        if (flags.getX(i) < 0.5 || flags.getX(i) > 1.5) return;
        const p = new THREE.Vector3();
        binding.nodes.forEach((n, j) =>
          p.addScaledVector(
            new THREE.Vector3().fromArray(piece.state.positions, n * 3),
            binding.weights[j],
          ),
        );
        assert(
          Math.abs(biteDistance(p, g)) < 0.003,
          "restoring strain moved a cut vertex off the guide",
        );
        const normal = new THREE.Vector3()
          .fromBufferAttribute(normals, i)
          .applyMatrix3(
            surfaceNormalFrame(frames, binding).invert().transpose(),
          )
          .normalize();
        assert(
          Math.abs(normal.y) < 1e-5,
          "restoring strain changed the cut normal",
        );
      });
      piece.geometry.dispose();
    }
  d.geometry.dispose();
});

test("local remnant cleanup removes an attached paper-thin flap while retaining the solid mass", async () => {
  const m = await initializeMunch();
  for (const sheetZ of [0, 0.011]) {
    const base = m.Manifold.cube([0.8, 0.6, 0.3]).translate([
      -0.4, 1.02, -0.15,
    ]);
    const flap = m.Manifold.cube([0.24, 0.28, 0.012]).translate([
      -0.34,
      0.76,
      sheetZ - 0.006,
    ]);
    const original = base.add(flap);
    const g: BiteGuide = {
      origin: new THREE.Vector3(),
      right: new THREE.Vector3(1, 0, 0),
      up: new THREE.Vector3(0, 1, 0),
      forward: new THREE.Vector3(0, 0, 1),
      radius: 0.65,
    };
    const cleanup = createRemnantCleanup(m, original, g);
    assert(cleanup, "the attached flap needs thickness cleanup");
    assert(
      cleanup.supportDistance(new THREE.Vector3(-0.22, 0.87, sheetZ)) < 0,
      "paper-thin flap retained",
    );
    assert(
      cleanup.supportDistance(new THREE.Vector3(0, 1.4, 0)) > 0,
      "solid interior lost",
    );
    const geometry = cleanup.geometry;
    const mesh = new m.Mesh({
      numProp: 3,
      vertProperties: new Float32Array(geometry.getAttribute("position").array),
      triVerts: new Uint32Array(geometry.getIndex()!.array),
    });
    mesh.merge();
    const mask = new m.Manifold(mesh),
      kept = original.subtract(mask);
    assert.equal(kept.status(), "NoError");
    assert(kept.volume() > 0.8 * 0.6 * 0.3 * 0.94);
    assert.equal(
      kept.rayCast([-0.22, 0.87, -0.2], [-0.22, 0.87, 0.2]).length,
      0,
    );
    assert.equal(kept.rayCast([0, 1.4, -0.2], [0, 1.4, 0.2]).length, 2);
    assert(MIN_BITE_THICKNESS > 0.012);
    geometry.dispose();
    [base, flap, original, mask, kept].forEach((s) => s.delete());
  }
});

test("thickness cleanup leaves a healthy rounded surface intact without a pale skim band", async () => {
  const m = await initializeMunch();
  const sphere = m.Manifold.sphere(0.6, 80);
  const solid = sphere.scale([1, 1, 0.6]);
  const g: BiteGuide = {
    origin: new THREE.Vector3(0, -1, 0),
    right: new THREE.Vector3(1, 0, 0),
    up: new THREE.Vector3(0, 1, 0),
    forward: new THREE.Vector3(0, 0, 1),
    radius: 0.65,
  };
  const cleanup = createRemnantCleanup(m, solid, g);
  cleanup?.geometry.dispose();
  [sphere, solid].forEach((s) => s.delete());
  assert.equal(
    cleanup,
    null,
    "cleanup must not shave the sound exterior into new interior material",
  );
});
