import { test } from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  landingPose,
  entryPose,
  applyEntryPose,
  ENTRY_VARIATIONS,
} from "../src/scene/entryCamera.ts";

const lens = new THREE.Vector3(-0.18542, 0.91221, 0.17161);
const normal = new THREE.Vector3(-0.457, 0.86, 0.227).normalize();
test("all entry paths stay finite and approach the same black lens without a camera flip", () => {
  for (const [width, height] of [
    [1728, 1117],
    [1710, 926],
    [390, 844],
    [320, 568],
    [844, 390],
  ]) {
    const start = landingPose(width, height);
    for (const { id } of ENTRY_VARIATIONS) {
      const first = entryPose(start, lens, normal, id, 0);
      assert(first.position.distanceTo(start.position) < 1e-10);
      const camera = new THREE.PerspectiveCamera(
        30,
        width / height,
        0.002,
        100,
      );
      let previous: THREE.Vector3 | null = null;
      for (let i = 0; i <= 200; i++) {
        const pose = entryPose(start, lens, normal, id, i / 200);
        applyEntryPose(camera, pose, width, height);
        assert(camera.matrixWorld.elements.every(Number.isFinite));
        assert(camera.projectionMatrix.elements.every(Number.isFinite));
        const direction = pose.target.clone().sub(pose.position).normalize();
        assert(
          new THREE.Vector3().crossVectors(direction, pose.up).length() > 0.01,
          `${id}: singular camera up vector`,
        );
        assert(pose.position.distanceTo(pose.target) > camera.near);
        if (previous)
          assert(
            previous.distanceTo(pose.position) < 0.12,
            `${id}: discontinuous camera path`,
          );
        previous = pose.position;
      }
      const end = entryPose(start, lens, normal, id, 1);
      assert(end.target.distanceTo(lens) < 1e-10);
      assert(Math.abs(end.position.distanceTo(lens) - 0.013) < 1e-10);
      assert(end.position.clone().sub(lens).normalize().dot(normal) > 0.9999);
      const projected = lens.clone().project(camera);
      assert(
        Math.abs(projected.x) < 1e-6 && Math.abs(projected.y) < 1e-6,
        `${id}: lens not centered at entry`,
      );
    }
  }
});

test("overhead entry reaches a horizontal top view before closing in", () => {
  const pose = entryPose(
    landingPose(1728, 1117),
    lens,
    normal,
    "overhead",
    0.48,
  );
  assert(pose.position.clone().sub(pose.target).normalize().y > 0.999);
  const camera = new THREE.PerspectiveCamera();
  applyEntryPose(camera, pose, 1728, 1117);
  const front = new THREE.Vector3(-0.244, 0.846, 0.186).project(camera);
  const back = new THREE.Vector3(0.23, 0.51, -0.17).project(camera);
  assert(front.x < back.x);
  assert(
    Math.abs(front.y - back.y) < 0.09,
    "camera assembly not horizontal in overhead view",
  );
});
