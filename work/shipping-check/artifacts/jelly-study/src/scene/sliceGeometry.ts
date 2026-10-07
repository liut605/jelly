import * as THREE from "three";
export const SLICE_RINGS = 112;
export const SLICE_SIDES = 144;
export type SliceMap = (
  x: number,
  y: number,
  z: number,
) => [number, number, number];
export interface SliceGeometryData {
  rings: number;
  sides: number;
  geometry: THREE.BufferGeometry;
  sourcePositions: Float32Array;
  volumeSourcePositions: Float32Array;
}

export function createSliceGeometry(
  warp: SliceMap,
  colorAt: (
    point: [number, number, number],
    material: [number, number, number],
  ) => THREE.Color,
  { rings = SLICE_RINGS, sides = SLICE_SIDES } = {},
): SliceGeometryData {
  const sourcePositions = new Float32Array((rings + 1) * (sides + 1) * 3);
  const volumeSourcePositions = new Float32Array(sourcePositions.length);
  const colors = new Float32Array(sourcePositions.length);
  const indices: number[] = [];
  for (let row = 0; row <= rings; row++) {
    const theta = (row / rings) * Math.PI;
    for (let column = 0; column <= sides; column++) {
      const angle = (column / sides) * Math.PI * 2;
      const x = Math.sin(theta) * Math.sin(angle),
        y = Math.sin(theta) * Math.cos(angle),
        z = Math.cos(theta);
      const index = (row * (sides + 1) + column) * 3;
      volumeSourcePositions.set([x, y, z], index);
      const point = warp(x, y, z);
      sourcePositions.set(point, index);
      const color = colorAt(point, [x, y, z]);
      colors.set([color.r, color.g, color.b], index);
    }
  }
  for (let row = 0; row < rings; row++)
    for (let column = 0; column < sides; column++) {
      const a = row * (sides + 1) + column,
        b = a + sides + 1;
      indices.push(a, a + 1, b, a + 1, b + 1, b);
    }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(sourcePositions.slice(), 3),
  );
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute(
    "aFleshCoordinate",
    new THREE.BufferAttribute(volumeSourcePositions.slice(), 3),
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const normals = geometry.getAttribute("normal");
  for (let row = 0; row <= rings; row++) {
    const first = row * (sides + 1),
      last = first + sides;
    const normal = new THREE.Vector3()
      .fromBufferAttribute(normals, first)
      .add(new THREE.Vector3().fromBufferAttribute(normals, last))
      .normalize();
    normals.setXYZ(first, normal.x, normal.y, normal.z);
    normals.setXYZ(last, normal.x, normal.y, normal.z);
  }
  for (const row of [0, rings]) {
    const normal = new THREE.Vector3();
    for (let c = 0; c < sides; c++)
      normal.add(
        new THREE.Vector3().fromBufferAttribute(normals, row * (sides + 1) + c),
      );
    normal.normalize();
    for (let c = 0; c <= sides; c++)
      normals.setXYZ(row * (sides + 1) + c, normal.x, normal.y, normal.z);
  }
  return { geometry, sourcePositions, volumeSourcePositions, rings, sides };
}
