import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import { screenBite } from "../src/scene/screenBite.ts";
import { biteDistance, type BiteGuide } from "../src/scene/biteVolume.ts";
import {
  createDriedPersimmonGeometry,
  mapDriedPersimmonPoint,
} from "../src/scene/driedPersimmonGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";
import { munchGeometry } from "../src/scene/munchGeometry.ts";

const width = 1000,
  height = 800,
  radius = 135;
function scene() {
  const fruit = new THREE.Group();
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.01, 100);
  camera.position.set(0, 5, 8);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();
  return { fruit, camera };
}
function pointerBelow(point: THREE.Vector3, camera: THREE.PerspectiveCamera) {
  const p = point.clone().project(camera);
  return new THREE.Vector2(p.x, p.y - (radius * 1.6) / height);
}

test("screen overlap includes edge crossings and excludes a real miss", () => {
  const { fruit, camera } = scene();
  const pointer = new THREE.Vector2();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const raycaster = new THREE.Raycaster();
  // A narrow triangle crossing the entire arch: none of its vertices is inside.
  const coordinates = [
    [-200, 65],
    [200, 65],
    [200, 70],
  ].flatMap(([x, y]) => {
    raycaster.setFromCamera(
      new THREE.Vector2((x * 2) / width, (y * 2) / height),
      camera,
    );
    return raycaster.ray.intersectPlane(plane, new THREE.Vector3())!.toArray();
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(coordinates, 3),
  );
  const mesh = new THREE.Mesh(geometry);
  fruit.add(mesh);
  const hit = screenBite(
    geometry,
    mesh,
    fruit,
    camera,
    pointer,
    radius,
    width,
    height,
  );
  assert.equal(hit.kind, "hit");
  if (hit.kind === "hit") {
    assert.equal(hit.fullyCovered, false);
    assert(hit.guide);
    assert(Math.abs(hit.guide.forward.y) === 1);
    assert(Math.abs(hit.guide.origin.y) < 1e-6);
  }
  assert.equal(
    screenBite(
      geometry,
      mesh,
      fruit,
      camera,
      new THREE.Vector2(0.9, 0.9),
      radius,
      width,
      height,
    ).kind,
    "miss",
  );
  geometry.dispose();
});

test("moved and tilted split fragments resolve in their own current pose, independent of a higher neighbor", async () => {
  const data = createDriedPersimmonGeometry();
  const topology = createVolumeTopology(
    data.volumeSourcePositions,
    data.rings,
    data.sides,
    mapDriedPersimmonPoint,
  );
  const guide: BiteGuide = {
    origin: new THREE.Vector3(0, 0, 0.7),
    right: new THREE.Vector3(1, 0, 0),
    up: new THREE.Vector3(0, 0, 1),
    forward: new THREE.Vector3(0, -1, 0),
    radius: 0.8,
  };
  const split = await munchGeometry(
    data.geometry,
    {
      topology,
      positions: topology.restPositions.slice(),
      velocities: new Float32Array(topology.nodeCount * 3),
    },
    guide,
    "dried-persimmon",
  );
  assert.equal(split.kind, "cut");
  if (split.kind !== "cut") return;
  assert.equal(split.pieces.length, 2);
  const { fruit, camera } = scene();
  const [piece, neighbor] = split.pieces;
  const pose = new THREE.Matrix4().compose(
    new THREE.Vector3(-1.2, 0.55, 0.25),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(0.35, 0.2, -0.6)),
    new THREE.Vector3(1, 1, 1),
  );
  piece.geometry.applyMatrix4(pose);
  const p = new THREE.Vector3();
  for (let i = 0; i < piece.state.positions.length; i += 3)
    p.fromArray(piece.state.positions, i)
      .applyMatrix4(pose)
      .toArray(piece.state.positions, i);
  const mesh = new THREE.Mesh(piece.geometry),
    other = new THREE.Mesh(neighbor.geometry);
  fruit.add(mesh, other);
  piece.geometry.computeBoundingBox();
  const center = piece.geometry.boundingBox!.getCenter(new THREE.Vector3());
  const pointer = pointerBelow(center, camera);
  const target = screenBite(
    piece.geometry,
    mesh,
    fruit,
    camera,
    pointer,
    radius,
    width,
    height,
  );
  assert.equal(target.kind, "hit");
  if (target.kind !== "hit") return;
  assert.equal(target.fullyCovered, true);
  assert(target.guide);
  const movedNeighbor = neighbor.geometry.getAttribute("position");
  for (let i = 0; i < movedNeighbor.count; i++)
    movedNeighbor.setY(i, movedNeighbor.getY(i) + 2.5);
  const again = screenBite(
    piece.geometry,
    mesh,
    fruit,
    camera,
    pointer,
    radius,
    width,
    height,
  );
  assert.deepEqual(
    again,
    target,
    "A different piece's height changed this piece's bite",
  );
  const neighborBefore = new Float32Array(movedNeighbor.array);
  const consumed = await munchGeometry(
    piece.geometry,
    piece.state,
    target.guide,
    "dried-persimmon",
    target.fullyCovered,
  );
  assert.equal(consumed.kind, "consumed");
  assert.deepEqual(movedNeighbor.array, neighborBefore);

  // Shift the arch to cut only the right edge of this translated/tilted piece.
  const edgePointer = pointer.clone();
  edgePointer.x += (radius * 1.7) / width;
  const partial = screenBite(
    piece.geometry,
    mesh,
    fruit,
    camera,
    edgePointer,
    radius,
    width,
    height,
  );
  assert.equal(partial.kind, "hit");
  if (partial.kind === "hit") {
    assert.equal(partial.fullyCovered, false);
    assert(partial.guide);
    assert(Math.abs(partial.guide.forward.y) === 1);
    const cut = await munchGeometry(
      piece.geometry,
      piece.state,
      partial.guide,
      "dried-persimmon",
    );
    assert.equal(
      cut.kind,
      "cut",
      "Visible overlap after moving a split piece missed its physical body",
    );
    if (cut.kind === "cut")
      for (const result of cut.pieces) {
        assert(result.state.topology.tetraRestVolumes.every((v) => v > 0));
        const flags = result.geometry.getAttribute("aCutSurface"),
          positions = result.geometry.getAttribute("position");
        let matchingWall = false;
        for (let i = 0; i < flags.count; i++) {
          const binding = result.state.topology.bindings[i];
          p.set(0, 0, 0);
          binding.nodes.forEach((n, j) =>
            p.addScaledVector(
              new THREE.Vector3().fromArray(result.state.positions, n * 3),
              binding.weights[j],
            ),
          );
          if (
            flags.getX(i) > 0.5 &&
            flags.getX(i) < 1.5 &&
            Math.abs(biteDistance(p, partial.guide)) < 0.003
          )
            matchingWall = true;
        }
        assert(
          matchingWall,
          "The new wall does not follow the resolved guide in its current pose",
        );
        result.geometry.dispose();
      }
  }
  data.geometry.dispose();
  split.pieces.forEach((p) => p.geometry.dispose());
});
