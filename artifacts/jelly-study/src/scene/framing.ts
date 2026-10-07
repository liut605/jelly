import * as THREE from "three";

export const DEFAULT_VIEW = { distance: 4.95, yaw: 0.92, pitch: 0.68 } as const;
export const MIN_ZOOM_DISTANCE = 3.8;
export const MAX_ZOOM_DISTANCE = 7.4;

export interface PlayBounds {
  right: THREE.Vector3;
  up: THREE.Vector3;
  direction: THREE.Vector3;
  focus: THREE.Vector3;
  distance: number;
  halfFov: THREE.Vector2;
  offsetFov: THREE.Vector2;
  depthLimit: number;
}

/** Camera pose depends only on the user's orbit/menu zoom and viewport scale.
 * Physics positions must never feed back into camera distance or its target. */
export function frameSpecimen(
  camera: THREE.PerspectiveCamera,
  scale: number,
  requestedDistance: number,
  currentDistance: number,
  yaw = DEFAULT_VIEW.yaw as number,
  pitch = DEFAULT_VIEW.pitch as number,
): number {
  const distance = THREE.MathUtils.lerp(
    currentDistance,
    THREE.MathUtils.clamp(
      requestedDistance,
      MIN_ZOOM_DISTANCE,
      MAX_ZOOM_DISTANCE,
    ),
    0.14,
  );
  const focus = new THREE.Vector3(0, -0.3 * scale, 0);
  camera.position
    .set(
      Math.sin(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.cos(yaw) * Math.cos(pitch),
    )
    .multiplyScalar(distance)
    .add(focus);
  camera.lookAt(focus);
  camera.updateMatrixWorld(true);
  return distance;
}

/** Full viewport: composed to the right on desktop, centered on portrait phones. */
export function setPlayViewport(
  camera: THREE.PerspectiveCamera,
  width: number,
  height: number,
): void {
  camera.aspect = width / height;
  const portraitPhone = width <= 760 && height > width;
  camera.setViewOffset(
    width,
    height,
    portraitPhone ? 0 : -width * 0.125,
    -height * (portraitPhone ? 0.04 : 0.075),
    width,
    height,
  );
  camera.updateProjectionMatrix();
}

/** Invisible contact walls expressed in material coordinates. Corrections are
 * lateral to the camera, so hitting a wall cannot push the jelly into the back. */
export function createPlayBounds(
  camera: THREE.PerspectiveCamera,
  scale: number,
): PlayBounds {
  const direction = camera.getWorldDirection(new THREE.Vector3()).negate();
  const right = new THREE.Vector3()
    .crossVectors(new THREE.Vector3(0, 1, 0), direction)
    .normalize();
  const up = new THREE.Vector3().crossVectors(direction, right);
  const focus = new THREE.Vector3(0, -0.3, 0);
  const projection = camera.projectionMatrix.elements;
  return {
    right,
    up,
    direction,
    focus,
    distance:
      camera.position.distanceTo(focus.clone().multiplyScalar(scale)) / scale,
    halfFov: new THREE.Vector2(0.94 / projection[0], 0.94 / projection[5]),
    offsetFov: new THREE.Vector2(
      projection[8] / projection[0],
      projection[9] / projection[5],
    ),
    depthLimit: 1.65,
  };
}
