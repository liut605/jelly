import * as THREE from "three";

export type EntryVariation = "direct" | "overhead" | "orbit";
export const ENTRY_VARIATIONS = [
  {
    id: "direct",
    label: "Lens glide",
    description: "Turn and move into the lens in one continuous motion.",
  },
  {
    id: "overhead",
    label: "Overhead",
    description: "Rise to a horizontal top view, then move into the lens.",
  },
  {
    id: "orbit",
    label: "Arc in",
    description: "Sweep around the camera before closing in on the lens.",
  },
] as const;
export interface CameraPose {
  position: THREE.Vector3;
  target: THREE.Vector3;
  up: THREE.Vector3;
  offset: THREE.Vector2;
  fov: number;
}
const ease = (t: number) => {
  t = THREE.MathUtils.clamp(t, 0, 1);
  return t * t * (3 - 2 * t);
};
export function landingPose(width: number, height: number): CameraPose {
  const portrait = width < 760 && height > width;
  const target = new THREE.Vector3(0, 0.49, 0);
  const direction = new THREE.Vector3(0.52, 0.32, 0.79).normalize();
  return {
    position: target.clone().addScaledVector(direction, portrait ? 3.05 : 1.98),
    target,
    up: new THREE.Vector3(0, 1, 0),
    offset: new THREE.Vector2(portrait ? 0 : -0.225, portrait ? -0.1 : -0.005),
    fov: portrait ? 38 : 30,
  };
}
function blend(a: CameraPose, b: CameraPose, t: number): CameraPose {
  const k = ease(t);
  return {
    position: a.position.clone().lerp(b.position, k),
    target: a.target.clone().lerp(b.target, k),
    up: a.up.clone().lerp(b.up, k).normalize(),
    offset: a.offset.clone().lerp(b.offset, k),
    fov: THREE.MathUtils.lerp(a.fov, b.fov, k),
  };
}
/** A bounded camera path. This never changes the jelly's physical coordinates. */
export function entryPose(
  start: CameraPose,
  lens: THREE.Vector3,
  normal: THREE.Vector3,
  variation: EntryVariation,
  progress: number,
): CameraPose {
  const end: CameraPose = {
    position: lens.clone().addScaledVector(normal, 0.013),
    target: lens.clone(),
    up: new THREE.Vector3(0, 1, 0),
    offset: new THREE.Vector2(),
    fov: 26,
  };
  if (variation === "overhead") {
    const top: CameraPose = {
      position: new THREE.Vector3(0, 2.45, 0.001),
      target: new THREE.Vector3(0, 0.48, 0),
      up: new THREE.Vector3(-0.56, 0, -0.83).normalize(),
      offset: new THREE.Vector2(),
      fov: 31,
    };
    if (progress < 0.48) return blend(start, top, progress / 0.48);
    const t = (progress - 0.48) / 0.52;
    const pose = blend(top, end, t);
    pose.position.copy(
      new THREE.QuadraticBezierCurve3(
        top.position,
        lens.clone().addScaledVector(normal, 0.8),
        end.position,
      ).getPoint(ease(t)),
    );
    return pose;
  }
  const pose = blend(start, end, progress);
  const k = ease(progress);
  // Approach along the lens normal before the final close-up, rather than
  // crossing the camera housing on a straight line to the tiny target.
  pose.position.copy(
    new THREE.QuadraticBezierCurve3(
      start.position,
      lens.clone().addScaledVector(normal, 1.1),
      end.position,
    ).getPoint(k),
  );
  const p = THREE.MathUtils.clamp(progress, 0, 1);
  // Resolve the target earlier than the dolly, so every path clearly selects the lens.
  pose.target.copy(start.target).lerp(lens, ease(Math.min(1, p * 1.6)));
  if (variation === "orbit") {
    const arc = Math.sin(Math.PI * p) * (1 - p);
    pose.position.add(new THREE.Vector3(-0.7 * arc, 0.65 * arc, 0.18 * arc));
  }
  return pose;
}
export function applyEntryPose(
  camera: THREE.PerspectiveCamera,
  pose: CameraPose,
  width: number,
  height: number,
): void {
  camera.aspect = width / height;
  camera.fov = pose.fov;
  camera.position.copy(pose.position);
  camera.up.copy(pose.up);
  camera.setViewOffset(
    width,
    height,
    width * pose.offset.x,
    height * pose.offset.y,
    width,
    height,
  );
  camera.lookAt(pose.target);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
}
