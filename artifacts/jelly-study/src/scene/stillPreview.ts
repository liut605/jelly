import * as THREE from "three";
import { DEFAULT_VIEW } from "./framing";
import { PEACH_RINGS, PEACH_SIDES } from "./peachGeometry";

export interface StillPreviewHandle {
  setZoom(distance: number): void;
  dispose(): void;
}

/** A static software rendering of the same cavity-up slice when WebGL itself
 * is unavailable. No fake motion or simulation controls are substituted. */
export function startStillPreview(
  mount: HTMLElement,
  sourcePositions: Float32Array,
  sourceColors: Float32Array,
  label = "peach slice",
  {
    rings = PEACH_RINGS,
    sides = PEACH_SIDES,
    indices,
  }: {
    rings?: number;
    sides?: number;
    indices?: ArrayLike<number>;
  } = {},
): StillPreviewHandle {
  mount.replaceChildren();
  const canvas = document.createElement("canvas");
  canvas.dataset.testid = "still-peach-preview";
  canvas.setAttribute("role", "img");
  canvas.setAttribute(
    "aria-label",
    `Still preview of ${label}. GPU simulation unavailable.`,
  );
  mount.appendChild(canvas);
  const context = canvas.getContext("2d");
  if (!context) return { setZoom: () => {}, dispose: () => canvas.remove() };
  const { yaw, pitch } = DEFAULT_VIEW;
  const direction = new THREE.Vector3(
    Math.sin(yaw) * Math.cos(pitch),
    Math.sin(pitch),
    Math.cos(yaw) * Math.cos(pitch),
  );
  const right = new THREE.Vector3()
    .crossVectors(new THREE.Vector3(0, 1, 0), direction)
    .normalize();
  const up = new THREE.Vector3().crossVectors(direction, right);
  const light = new THREE.Vector3(-0.5, 0.8, 0.3).normalize();
  const point = new THREE.Vector3();
  const projected = Array.from(
    { length: sourcePositions.length / 3 },
    (_, i) => {
      point.fromArray(sourcePositions, i * 3);
      return {
        x: point.dot(right),
        y: point.dot(up),
        depth: point.dot(direction),
      };
    },
  );
  const minX = Math.min(...projected.map((p) => p.x)),
    maxX = Math.max(...projected.map((p) => p.x));
  const minY = Math.min(...projected.map((p) => p.y)),
    maxY = Math.max(...projected.map((p) => p.y));
  const triangles: { ids: number[]; depth: number; color: string }[] = [];
  const a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3();
  const addTriangle = (ids: number[]): void => {
    a.fromArray(sourcePositions, ids[0] * 3);
    b.fromArray(sourcePositions, ids[1] * 3);
    c.fromArray(sourcePositions, ids[2] * 3);
    const normal = b.sub(a).cross(c.sub(a)).normalize();
    if (normal.dot(direction) <= 0) return;
    const color = new THREE.Color(0, 0, 0);
    for (const id of ids)
      color.add(new THREE.Color().fromArray(sourceColors, id * 3));
    color.multiplyScalar((0.72 + 0.4 * Math.max(0, normal.dot(light))) / 3);
    triangles.push({
      ids,
      depth: ids.reduce((sum, id) => sum + projected[id].depth, 0) / 3,
      color: color.getStyle(THREE.SRGBColorSpace),
    });
  };
  if (indices) {
    for (let i = 0; i < indices.length; i += 3)
      addTriangle([indices[i], indices[i + 1], indices[i + 2]]);
  } else {
    for (let row = 0; row < rings; row++)
      for (let column = 0; column < sides; column++) {
        const i = row * (sides + 1) + column,
          j = i + sides + 1;
        addTriangle([i, i + 1, j]);
        addTriangle([i + 1, j + 1, j]);
      }
  }
  triangles.sort((a, b) => a.depth - b.depth);
  let distance = 4.95;
  const render = (): void => {
    const width = Math.max(mount.clientWidth, 1),
      height = Math.max(mount.clientHeight, 1);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const scale =
      Math.min(
        (width * (width <= 760 && height > width ? 0.74 : 0.36)) /
          (maxX - minX),
        (height * 0.62) / (maxY - minY),
      ) * Math.min(1.14, 4.95 / distance);
    const x = (value: number): number =>
      width * (width <= 760 && height > width ? 0.5 : 0.625) +
      (value - (minX + maxX) / 2) * scale;
    const y = (value: number): number =>
      height * (width <= 760 && height > width ? 0.54 : 0.575) -
      (value - (minY + maxY) / 2) * scale;
    context.fillStyle = "rgba(53,60,45,.10)";
    context.beginPath();
    context.ellipse(
      width * (width <= 760 && height > width ? 0.5 : 0.625),
      y(minY) - 3,
      (maxX - minX) * scale * 0.46,
      scale * 0.05,
      0,
      0,
      Math.PI * 2,
    );
    context.fill();
    for (const triangle of triangles) {
      context.beginPath();
      triangle.ids.forEach((id, index) => {
        const p = projected[id];
        if (index === 0) context.moveTo(x(p.x), y(p.y));
        else context.lineTo(x(p.x), y(p.y));
      });
      context.closePath();
      context.fillStyle = triangle.color;
      context.strokeStyle = triangle.color;
      context.lineWidth = 0.45;
      context.fill();
      context.stroke();
    }
  };
  const observer = new ResizeObserver(render);
  observer.observe(mount);
  render();
  return {
    setZoom: (value) => {
      distance = value;
      render();
    },
    dispose: () => {
      observer.disconnect();
      canvas.remove();
    },
  };
}
