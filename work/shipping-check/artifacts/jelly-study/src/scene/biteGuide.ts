import * as THREE from "three";
import type { BiteGuide } from "./biteVolume.ts";
import { biteArch } from "./biteProfile.ts";

/** Straight world-Y extrusion whose footprint matches the screen-space arc. */
export function verticalBiteGuide(
  ray: THREE.Ray,
  camera: THREE.PerspectiveCamera,
  fruit: THREE.Object3D,
  height: number,
  pixelRadius: number,
  viewportHeight: number,
): BiteGuide | null {
  const normal = new THREE.Vector3(0, 1, 0);
  const world = ray.intersectPlane(
    new THREE.Plane(normal, -height),
    new THREE.Vector3(),
  );
  if (!world || Math.abs(ray.direction.y) < 0.05) return null;
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  right.y = 0;
  right.normalize();
  const up = new THREE.Vector3().crossVectors(right, normal).negate();
  const forward = new THREE.Vector3(0, 1, 0);
  const viewDepth = -world.clone().applyMatrix4(camera.matrixWorldInverse).z;
  if (viewDepth <= 0) return null;
  const inverse = fruit.matrixWorld.clone().invert();
  const guide: BiteGuide = {
    origin: fruit.worldToLocal(world),
    right: right.transformDirection(inverse),
    up: up.transformDirection(inverse),
    forward: forward.transformDirection(inverse),
    radius:
      (pixelRadius *
        2 *
        viewDepth *
        Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) /
      viewportHeight /
      fruit.scale.x,
  };
  // Keep the supplied profile uniform in screen pixels. Inverse-project it
  // onto the horizontal plane so the real vertical cutter meets that preview.
  const center = fruit.localToWorld(guide.origin.clone()).project(camera);
  const caster = new THREE.Raycaster();
  const plane = new THREE.Plane(normal, -height);
  const viewportWidth = viewportHeight * camera.aspect;
  const arch: THREE.Vector2[] = [];
  for (const p of biteArch(pixelRadius)) {
    caster.setFromCamera(
      new THREE.Vector2(
        center.x + (2 * p.x) / viewportWidth,
        center.y + (2 * p.y) / viewportHeight,
      ),
      camera,
    );
    const hit = caster.ray.intersectPlane(plane, new THREE.Vector3());
    if (!hit || Math.abs(caster.ray.direction.y) < 0.025) return null;
    const q = fruit.worldToLocal(hit).sub(guide.origin);
    arch.push(new THREE.Vector2(q.dot(guide.right), q.dot(guide.up)));
  }
  guide.arch = arch;
  return guide;
}
