import * as THREE from "three";
import { biteArch } from "./biteProfile.ts";
import type { VolumeTopology } from "./volumeTopology.ts";
import type { SoftBodySnapshot } from "./softBodyGpu.ts";

export class MunchRejected extends Error {}
export interface BiteGuide {
  origin: THREE.Vector3;
  right: THREE.Vector3;
  up: THREE.Vector3;
  forward: THREE.Vector3;
  radius: number;
  /** Screen-proportioned arch projected onto the horizontal cutting plane. */
  arch?: THREE.Vector2[];
}
export const MIN_REMNANT_VOLUME = 0.008;
export function outlineDistance(
  x: number,
  y: number,
  polygon: THREE.Vector2[],
): number {
  let inside = false,
    distanceSq = Infinity;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i],
      b = polygon[j],
      dx = b.x - a.x,
      dy = b.y - a.y;
    const t = THREE.MathUtils.clamp(
      ((x - a.x) * dx + (y - a.y) * dy) / (dx * dx + dy * dy),
      0,
      1,
    );
    distanceSq = Math.min(
      distanceSq,
      (x - a.x - dx * t) ** 2 + (y - a.y - dy * t) ** 2,
    );
    if (
      a.y > y !== b.y > y &&
      x < ((b.x - a.x) * (y - a.y)) / (b.y - a.y) + a.x
    )
      inside = !inside;
  }
  return (inside ? -1 : 1) * Math.sqrt(distanceSq);
}
export function biteOutline(guide: number | BiteGuide): THREE.Vector2[] {
  const radius = typeof guide === "number" ? guide : guide.radius;
  const points =
    typeof guide === "number" || !guide.arch
      ? biteArch(radius)
      : guide.arch.map((p) => p.clone());
  // The open end faces the user: swallow the near side of the arch.
  points.push(
    new THREE.Vector2(points.at(-1)!.x, -8 * radius),
    new THREE.Vector2(points[0].x, -8 * radius),
  );
  return points;
}
export function biteDistance(point: THREE.Vector3, guide: BiteGuide): number {
  const q = point.clone().sub(guide.origin);
  return outlineDistance(
    q.dot(guide.right),
    q.dot(guide.up),
    biteOutline(guide),
  );
}
function signedVolume(p: number[], ids: number[]): number {
  const [a, b, c, d] = ids.map((i) => new THREE.Vector3().fromArray(p, i * 3));
  return b.sub(a).dot(c.sub(a).cross(d.sub(a))) / 6;
}

/** Clip physical tetrahedra, retaining conforming shared edge intersections.
 * This removes both mass and constraints from the swallowed region. */
export function cutVolume(
  snapshot: SoftBodySnapshot,
  guide: BiteGuide,
  supportDistance?: (point: THREE.Vector3) => number,
): SoftBodySnapshot[] {
  const old = snapshot.topology;
  const rest = Array.from(old.restPositions),
    positions = Array.from(snapshot.positions),
    velocities = Array.from(snapshot.velocities);
  const material = Array.from(old.materialPositions ?? old.restPositions);
  const polygon = biteOutline(guide);
  const distances = Array.from({ length: old.nodeCount }, (_, i) => {
    const point = new THREE.Vector3().fromArray(positions, i * 3),
      q = point.clone().sub(guide.origin);
    const distance = outlineDistance(
      q.dot(guide.right),
      q.dot(guide.up),
      polygon,
    );
    return Math.min(distance, supportDistance?.(point) ?? Infinity);
  });
  if (distances.every((d) => d >= 0)) return [snapshot];
  if (distances.every((d) => d < 0)) return [];
  const intersections = new Map<string, number>(),
    tets: number[][] = [];
  const intersect = (a: number, b: number): number => {
    const key = a < b ? `${a}:${b}` : `${b}:${a}`;
    const cached = intersections.get(key);
    if (cached !== undefined) return cached;
    const t = THREE.MathUtils.clamp(
      distances[a] / (distances[a] - distances[b]),
      0.08,
      0.92,
    );
    const id = rest.length / 3;
    for (const values of [rest, positions, velocities, material])
      for (let k = 0; k < 3; k++)
        values.push(
          THREE.MathUtils.lerp(values[a * 3 + k], values[b * 3 + k], t),
        );
    distances.push(0);
    intersections.set(key, id);
    return id;
  };
  const add = (ids: number[]): void => {
    const v = signedVolume(rest, ids);
    if (Math.abs(v) < 1e-10)
      throw new MunchRejected(
        "That bite leaves a sliver too thin to simulate. Move the guide a little farther in.",
      );
    if (v < 0) [ids[1], ids[2]] = [ids[2], ids[1]];
    tets.push(ids);
  };
  for (let i = 0; i < old.tetrahedra.length; i += 4) {
    const ids = Array.from(old.tetrahedra.subarray(i, i + 4));
    const kept = ids.filter((n) => distances[n] >= 0);
    if (kept.length === 4) {
      tets.push(ids);
      continue;
    }
    if (kept.length === 0) continue;
    const [a, b, c, d] = ids;
    const faces = [
        [a, c, b],
        [a, b, d],
        [a, d, c],
        [b, c, d],
      ],
      clipped: number[][] = [],
      cap = new Set<number>();
    for (const face of faces) {
      const polygon: number[] = [];
      for (let j = 0; j < face.length; j++) {
        const start = face[j],
          end = face[(j + 1) % face.length],
          s = distances[start] >= 0,
          e = distances[end] >= 0;
        if (s !== e) {
          const n = intersect(start, end);
          polygon.push(n);
          cap.add(n);
        }
        if (e) polygon.push(end);
      }
      if (polygon.length >= 3) clipped.push(polygon);
    }
    const capIds = [...cap],
      center = new THREE.Vector3();
    capIds.forEach((n) =>
      center.add(new THREE.Vector3().fromArray(positions, n * 3)),
    );
    center.divideScalar(capIds.length);
    const u = new THREE.Vector3()
      .fromArray(positions, capIds[0] * 3)
      .sub(center)
      .normalize();
    const normal = new THREE.Vector3();
    for (const id of capIds) {
      const candidate = new THREE.Vector3()
        .fromArray(positions, id * 3)
        .sub(center)
        .cross(u);
      if (candidate.lengthSq() > normal.lengthSq()) normal.copy(candidate);
    }
    normal.normalize();
    const v = new THREE.Vector3().crossVectors(normal, u);
    capIds.sort((a, b) => {
      const pa = new THREE.Vector3().fromArray(positions, a * 3).sub(center),
        pb = new THREE.Vector3().fromArray(positions, b * 3).sub(center);
      return (
        Math.atan2(pa.dot(v), pa.dot(u)) - Math.atan2(pb.dot(v), pb.dot(u))
      );
    });
    clipped.push(capIds);
    const pivot = Math.min(...kept);
    for (const face of clipped) {
      if (face.includes(pivot)) continue;
      const first = face.indexOf(Math.min(...face)),
        ordered = face.map((_, j) => face[(first + j) % face.length]);
      for (let j = 1; j < ordered.length - 1; j++)
        add([pivot, ordered[0], ordered[j], ordered[j + 1]]);
    }
  }
  if (tets.length > 10000)
    throw new MunchRejected(
      "This bite is too complex to simulate safely. Try a wider bite or Reset.",
    );
  // Find disconnected pieces by shared faces. Each receives its own solver,
  // rather than elastic constraints spanning a cut or swallowed region.
  const parent = tets.map((_, i) => i),
    faceOwner = new Map<string, number>();
  const find = (i: number): number =>
    parent[i] === i ? i : (parent[i] = find(parent[i]));
  tets.forEach((tet, i) => {
    for (let skip = 0; skip < 4; skip++) {
      const key = tet
        .filter((_, j) => j !== skip)
        .sort((a, b) => a - b)
        .join(":");
      const other = faceOwner.get(key);
      if (other === undefined) faceOwner.set(key, i);
      else parent[find(i)] = find(other);
    }
  });
  const groups = new Map<number, number[][]>();
  tets.forEach((tet, i) => {
    const key = find(i),
      group = groups.get(key) ?? [];
    group.push(tet);
    groups.set(key, group);
  });
  // Swallow tiny detached crumbs instead of leaving surface-only artifacts.
  const substantial = [...groups.values()].filter(
    (group) =>
      group.reduce((sum, tet) => sum + signedVolume(rest, tet), 0) >=
      MIN_REMNANT_VOLUME,
  );
  if (substantial.length > 3)
    throw new MunchRejected(
      "That bite would leave too many pieces. Move the guide to the edge.",
    );
  return substantial.map((group) => {
    const used = [...new Set(group.flat())],
      lookup = new Map(used.map((id, i) => [id, i]));
    const compact = (values: number[]) =>
      new Float32Array(used.flatMap((n) => values.slice(n * 3, n * 3 + 3)));
    const tetrahedra = new Uint32Array(
      group.flatMap((tet) => tet.map((n) => lookup.get(n)!)),
    );
    const tetraRestVolumes = new Float32Array(
      group.map((tet) => signedVolume(rest, tet)),
    );
    const edges = used.map(() => new Set<number>()),
      incidentTetrahedra = used.map(() => [] as number[]);
    group.forEach((tet, i) =>
      tet.forEach((n) => {
        const a = lookup.get(n)!;
        incidentTetrahedra[a].push(i);
        tet.forEach((m) => {
          if (m !== n) edges[a].add(lookup.get(m)!);
        });
      }),
    );
    const topology: VolumeTopology = {
      nodeCount: used.length,
      restPositions: compact(rest),
      materialPositions: compact(material),
      tetrahedra,
      tetraRestVolumes,
      edges: edges.map((s) => [...s]),
      incidentTetrahedra,
      surfaceGrid: new Uint32Array(24 * 17),
      bindings: [],
    };
    return {
      topology,
      positions: compact(positions),
      velocities: compact(velocities),
    };
  });
}
