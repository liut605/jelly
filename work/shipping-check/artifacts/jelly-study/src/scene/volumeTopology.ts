/** A closed tetrahedral volume, independent of the detailed rendering mesh. */
export const VOLUME_RINGS = 16;
export const VOLUME_SIDES = 24;
export interface VolumeTopology {
  nodeCount: number;
  restPositions: Float32Array<ArrayBuffer>;
  materialPositions?: Float32Array<ArrayBuffer>;
  tetrahedra: Uint32Array;
  tetraRestVolumes: Float32Array;
  edges: number[][];
  incidentTetrahedra: number[][];
  surfaceGrid: Uint32Array;
  bindings: { nodes: number[]; weights: number[] }[];
}
export function cubic(t: number): number[] {
  return [
    -0.5 * t + t * t - 0.5 * t * t * t,
    1 - 2.5 * t * t + 1.5 * t * t * t,
    0.5 * t + 2 * t * t - 1.5 * t * t * t,
    -0.5 * t * t + 0.5 * t * t * t,
  ];
}
export type VolumePointMap = (
  x: number,
  y: number,
  z: number,
) => [number, number, number];
export function createVolumeTopology(
  source: Float32Array,
  rings: number,
  sides: number,
  warp: VolumePointMap = (x, y, z) => [x, y, z],
): VolumeTopology {
  // The slice is meshed as radial columns from its convex back to the
  // recessed front face. Columns follow the pit socket instead of bridging it.
  const radialCount = VOLUME_RINGS / 2,
    depthCount = 5;
  const rest: number[] = [];
  const material: number[] = [];
  const add = (x: number, y: number, z: number): number => {
    const id = rest.length / 3;
    rest.push(...warp(x, y, z));
    material.push(x, y, z);
    return id;
  };
  const nodes: number[][][] = Array.from({ length: depthCount }, () =>
    Array.from({ length: radialCount + 1 }, () => []),
  );
  const rim: number[] = [];
  for (let c = 0; c < VOLUME_SIDES; c++) {
    const angle = (c / VOLUME_SIDES) * Math.PI * 2;
    rim.push(add(Math.sin(angle), Math.cos(angle), 0));
  }
  for (let depth = 0; depth < depthCount; depth++) {
    const center = add(0, 0, (depth / (depthCount - 1)) * 2 - 1);
    nodes[depth][0] = Array(VOLUME_SIDES).fill(center);
    nodes[depth][radialCount] = rim;
    for (let r = 1; r < radialCount; r++)
      for (let c = 0; c < VOLUME_SIDES; c++) {
        const vertex =
          Math.round((r * rings) / VOLUME_RINGS) * (sides + 1) +
          Math.round((c * sides) / VOLUME_SIDES);
        nodes[depth][r][c] = add(
          source[vertex * 3],
          source[vertex * 3 + 1],
          source[vertex * 3 + 2] * ((depth / (depthCount - 1)) * 2 - 1),
        );
      }
  }
  const at = (depth: number, r: number, c: number): number =>
    nodes[depth][r][((c % VOLUME_SIDES) + VOLUME_SIDES) % VOLUME_SIDES];
  const tets: number[] = [],
    volumes: number[] = [];
  const tet = (a: number, b: number, c: number, d: number): void => {
    if (new Set([a, b, c, d]).size < 4) return;
    const ax = rest[b * 3] - rest[a * 3],
      ay = rest[b * 3 + 1] - rest[a * 3 + 1],
      az = rest[b * 3 + 2] - rest[a * 3 + 2];
    const bx = rest[c * 3] - rest[a * 3],
      by = rest[c * 3 + 1] - rest[a * 3 + 1],
      bz = rest[c * 3 + 2] - rest[a * 3 + 2];
    const cx = rest[d * 3] - rest[a * 3],
      cy = rest[d * 3 + 1] - rest[a * 3 + 1],
      cz = rest[d * 3 + 2] - rest[a * 3 + 2];
    const volume =
      (ax * (by * cz - bz * cy) +
        ay * (bz * cx - bx * cz) +
        az * (bx * cy - by * cx)) /
      6;
    if (Math.abs(volume) < 1e-12) throw new Error("Degenerate material cell");
    if (volume < 0) [b, c] = [c, b];
    tets.push(a, b, c, d);
    volumes.push(Math.abs(volume));
  };
  for (let depth = 0; depth < depthCount - 1; depth++)
    for (let r = 0; r < radialCount; r++)
      for (let c = 0; c < VOLUME_SIDES; c++) {
        const a = at(depth, r, c),
          b = at(depth, r + 1, c),
          d = at(depth, r, c + 1),
          e = at(depth + 1, r, c);
        const f = at(depth, r + 1, c + 1),
          g = at(depth + 1, r + 1, c),
          h = at(depth + 1, r, c + 1),
          i = at(depth + 1, r + 1, c + 1);
        tet(a, b, f, i);
        tet(a, f, d, i);
        tet(a, d, h, i);
        tet(a, h, e, i);
        tet(a, e, g, i);
        tet(a, g, b, i);
      }
  const nodeCount = rest.length / 3;
  const neighborSets = Array.from(
    { length: nodeCount },
    () => new Set<number>(),
  );
  const incidentTetrahedra: number[][] = Array.from(
    { length: nodeCount },
    () => [],
  );
  for (let t = 0; t < volumes.length; t++)
    for (let j = 0; j < 4; j++) {
      const a = tets[t * 4 + j];
      incidentTetrahedra[a].push(t);
      for (let k = 0; k < 4; k++)
        if (j !== k) neighborSets[a].add(tets[t * 4 + k]);
    }
  const surfaceGrid = new Uint32Array((VOLUME_RINGS + 1) * VOLUME_SIDES);
  for (let r = 0; r <= VOLUME_RINGS; r++)
    for (let c = 0; c < VOLUME_SIDES; c++)
      surfaceGrid[r * VOLUME_SIDES + c] =
        r <= radialCount
          ? at(depthCount - 1, r, c)
          : at(0, VOLUME_RINGS - r, c);
  const surfaceAt = (r: number, c: number): number =>
    surfaceGrid[
      r * VOLUME_SIDES + (((c % VOLUME_SIDES) + VOLUME_SIDES) % VOLUME_SIDES)
    ];
  const bindings: VolumeTopology["bindings"] = [];
  for (let r = 0; r <= rings; r++)
    for (let c = 0; c <= sides; c++) {
      const u = (c * VOLUME_SIDES) / sides,
        v = (r * VOLUME_RINGS) / rings;
      const wx = cubic(u - Math.floor(u)),
        wy = cubic(v - Math.floor(v));
      const map = new Map<number, number>();
      for (let y = 0; y < 4; y++)
        for (let x = 0; x < 4; x++) {
          const node = surfaceAt(
            Math.max(0, Math.min(VOLUME_RINGS, Math.floor(v) + y - 1)),
            Math.floor(u) + x - 1,
          );
          map.set(node, (map.get(node) ?? 0) + wx[x] * wy[y]);
        }
      bindings.push({ nodes: [...map.keys()], weights: [...map.values()] });
    }
  return {
    nodeCount,
    restPositions: new Float32Array(rest),
    materialPositions: new Float32Array(material),
    tetrahedra: new Uint32Array(tets),
    tetraRestVolumes: new Float32Array(volumes),
    edges: neighborSets.map((s) => [...s]),
    incidentTetrahedra,
    surfaceGrid,
    bindings,
  };
}
