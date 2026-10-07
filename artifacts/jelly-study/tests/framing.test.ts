import assert from "node:assert/strict";
import { test } from "node:test";
import * as THREE from "three";
import {
  frameSpecimen,
  createPlayBounds,
  DEFAULT_VIEW,
  setPlayViewport,
} from "../src/scene/framing.ts";

test("orbit and resize preserve the requested camera distance", () => {
  for (const aspect of [1710 / 866, 390 / 844, 320 / 568, 844 / 390]) {
    const camera = new THREE.PerspectiveCamera(37, aspect, 0.1, 100);
    for (const scale of [0.2, 0.7, 1])
      for (const yaw of [-3, 0.92, 2.8])
        for (const pitch of [0.16, 1, 1.35]) {
          const d = frameSpecimen(
            camera,
            scale,
            DEFAULT_VIEW.distance,
            DEFAULT_VIEW.distance,
            yaw,
            pitch,
          );
          assert(Math.abs(d - DEFAULT_VIEW.distance) < 1e-12);
          assert(
            Math.abs(
              camera.position.distanceTo(
                new THREE.Vector3(0, -0.3 * scale, 0),
              ) - d,
            ) < 1e-12,
          );
          const bounds = createPlayBounds(camera, scale);
          const depth = 0.5;
          const edge = bounds.focus
            .clone()
            .addScaledVector(bounds.direction, depth)
            .addScaledVector(
              bounds.right,
              (bounds.distance - depth) * bounds.halfFov.x,
            )
            .multiplyScalar(scale)
            .project(camera);
          assert(
            Math.abs(edge.x - 0.94) < 1e-12,
            "Contact wall must match the viewport",
          );
        }
    const near = frameSpecimen(camera, 0.7, 3.8, DEFAULT_VIEW.distance);
    assert(near < DEFAULT_VIEW.distance);
    const far = frameSpecimen(camera, 0.7, 7.4, DEFAULT_VIEW.distance);
    assert(far > DEFAULT_VIEW.distance);
  }
});

test("full viewport walls include the title area with desktop and phone composition", () => {
  for (const [width, height] of [
    [1710, 866],
    [390, 844],
    [320, 568],
    [844, 390],
  ]) {
    const camera = new THREE.PerspectiveCamera(33, width / height, 0.1, 100);
    setPlayViewport(camera, width, height);
    frameSpecimen(camera, 0.7, 4.95, 4.95);
    const bounds = createPlayBounds(camera, 0.7);
    const center = bounds.focus.clone().multiplyScalar(0.7).project(camera);
    assert(
      Math.abs(center.x - (width <= 760 && height > width ? 0 : 0.25)) < 1e-10,
    );
    for (const side of [-1, 1]) {
      const p = bounds.focus
        .clone()
        .addScaledVector(
          bounds.right,
          bounds.distance * (bounds.offsetFov.x + side * bounds.halfFov.x),
        )
        .multiplyScalar(0.7)
        .project(camera);
      assert(Math.abs(p.x - side * 0.94) < 1e-10);
    }
  }
});
