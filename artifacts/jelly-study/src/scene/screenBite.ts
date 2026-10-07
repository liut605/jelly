import * as THREE from "three";
import { biteOutline, type BiteGuide } from "./biteVolume.ts";
import { verticalBiteGuide } from "./biteGuide.ts";

export type ScreenBite =
  | { kind: "miss" }
  | { kind: "unsupported" }
  | { kind: "hit"; guide: BiteGuide | null; fullyCovered: boolean };

/** Resolve the fixed-size screen guide against ONE up-to-date visible surface.
 * Bounds used for simulation are intentionally conservative and cannot locate a
 * bite plane: after a grab they may extend well beyond the rendered fragment. */
export function screenBite(
  geometry: THREE.BufferGeometry,
  mesh: THREE.Object3D,
  fruit: THREE.Object3D,
  camera: THREE.PerspectiveCamera,
  pointer: THREE.Vector2,
  pixelRadius: number,
  width: number,
  height: number,
): ScreenBite {
  const polygon = biteOutline(pixelRadius);
  const bounds = new THREE.Box2().setFromPoints(polygon);
  const edges = polygon.map((a, i) => {
    const b = polygon[(i + 1) % polygon.length];
    return {
      a,
      b,
      minX: Math.min(a.x, b.x),
      maxX: Math.max(a.x, b.x),
      minY: Math.min(a.y, b.y),
      maxY: Math.max(a.y, b.y),
    };
  });
  const inside = (x: number, y: number): boolean => {
    if (
      x < bounds.min.x ||
      x > bounds.max.x ||
      y < bounds.min.y ||
      y > bounds.max.y
    )
      return false;
    let result = false;
    for (const { a, b, minY, maxY } of edges) {
      if (y < minY || y >= maxY) continue;
      if (x < a.x + ((b.x - a.x) * (y - a.y)) / (b.y - a.y)) result = !result;
    }
    return result;
  };
  mesh.updateWorldMatrix(true, false);
  camera.updateMatrixWorld();
  const modelView = new THREE.Matrix4().multiplyMatrices(
    camera.matrixWorldInverse,
    mesh.matrixWorld,
  );
  const project = new THREE.Matrix4().multiplyMatrices(
    camera.projectionMatrix,
    modelView,
  );
  const positions = geometry.getAttribute("position");
  const xs = new Float64Array(positions.count),
    ys = new Float64Array(positions.count);
  const worldY = new Float64Array(positions.count),
    inverseDepth = new Float64Array(positions.count);
  const contained = new Uint8Array(positions.count);
  const p = new THREE.Vector3(),
    q = new THREE.Vector3();
  let fullyCovered = true;
  for (let i = 0; i < positions.count; i++) {
    p.fromBufferAttribute(positions, i);
    inverseDepth[i] = 1 / -q.copy(p).applyMatrix4(modelView).z;
    worldY[i] = q.copy(p).applyMatrix4(mesh.matrixWorld).y;
    q.copy(p).applyMatrix4(project);
    xs[i] = ((q.x - pointer.x) * width) / 2;
    ys[i] = ((q.y - pointer.y) * height) / 2;
    contained[i] = inverseDepth[i] > 0 && inside(xs[i], ys[i]) ? 1 : 0;
    fullyCovered &&= contained[i] === 1;
  }
  let contactHeight = -Infinity;
  const index = geometry.getIndex();
  const count = index?.count ?? positions.count;
  for (let offset = 0; offset < count; offset += 3) {
    const ids = [0, 1, 2].map((j) =>
      index ? index.getX(offset + j) : offset + j,
    );
    if (ids.some((i) => inverseDepth[i] <= 0)) continue;
    const ax = xs[ids[0]],
      ay = ys[ids[0]],
      bx = xs[ids[1]],
      by = ys[ids[1]],
      cx = xs[ids[2]],
      cy = ys[ids[2]];
    const minX = Math.min(ax, bx, cx),
      maxX = Math.max(ax, bx, cx),
      minY = Math.min(ay, by, cy),
      maxY = Math.max(ay, by, cy);
    if (
      maxX < bounds.min.x ||
      minX > bounds.max.x ||
      maxY < bounds.min.y ||
      minY > bounds.max.y
    )
      continue;
    const determinant = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    if (Math.abs(determinant) < 1e-10) continue;
    const barycentric = (x: number, y: number) => {
      const a = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / determinant;
      const b = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / determinant;
      return [a, b, 1 - a - b];
    };
    const candidates: [number, number][] = [];
    ids.forEach((i) => {
      if (contained[i]) candidates.push([xs[i], ys[i]]);
    });
    // Triangle and guide edges can cross with neither shape containing a
    // vertex of the other; checking only vertices misses those grazing bites.
    for (const edge of edges) {
      if (
        edge.maxX < minX ||
        edge.minX > maxX ||
        edge.maxY < minY ||
        edge.minY > maxY
      )
        continue;
      if (barycentric(edge.a.x, edge.a.y).every((v) => v >= -1e-9))
        candidates.push([edge.a.x, edge.a.y]);
      for (let j = 0; j < 3; j++) {
        const a = ids[j],
          b = ids[(j + 1) % 3];
        const dx = xs[b] - xs[a],
          dy = ys[b] - ys[a];
        const ex = edge.b.x - edge.a.x,
          ey = edge.b.y - edge.a.y;
        const den = dx * ey - dy * ex;
        if (Math.abs(den) < 1e-10) continue;
        const qx = edge.a.x - xs[a],
          qy = edge.a.y - ys[a];
        const t = (qx * ey - qy * ex) / den,
          u = (qx * dy - qy * dx) / den;
        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
          candidates.push([xs[a] + t * dx, ys[a] + t * dy]);
          // A scallop may pass through a triangle whose vertices are all in.
          fullyCovered = false;
        }
      }
    }
    if (!candidates.length) continue;
    candidates.push([
      candidates.reduce((sum, p) => sum + p[0], 0) / candidates.length,
      candidates.reduce((sum, p) => sum + p[1], 0) / candidates.length,
    ]);
    for (const [x, y] of candidates) {
      if (!inside(x, y)) continue;
      const weights = barycentric(x, y).map(
        (weight, j) => weight * inverseDepth[ids[j]],
      );
      const yWorld =
        weights.reduce((sum, w, j) => sum + w * worldY[ids[j]], 0) /
        weights.reduce((sum, w) => sum + w, 0);
      contactHeight = Math.max(contactHeight, yWorld);
    }
  }
  if (!Number.isFinite(contactHeight)) return { kind: "miss" };
  const caster = new THREE.Raycaster();
  caster.setFromCamera(pointer, camera);
  const guide = verticalBiteGuide(
    caster.ray,
    camera,
    fruit,
    contactHeight,
    pixelRadius,
    height,
  );
  if (!guide && !fullyCovered) return { kind: "unsupported" };
  return { kind: "hit", guide, fullyCovered };
}
