import * as THREE from "three";
import type { VolumeTopology } from "./volumeTopology.ts";

/** Attach a detailed, non-grid surface to the actual surrounding tetrahedra.
 * In particular, a tunnel bottom must follow the bottom of the volume, not
 * inherit the displacement of the top face from which it was constructed. */
export function bindVolumeSurface(
  geometry: THREE.BufferGeometry,
  source: Float32Array,
  topology: VolumeTopology,
): void {
  const rest = topology.restPositions;
  const cells = Array.from(
    { length: topology.tetraRestVolumes.length },
    (_, i) => {
      const nodes = Array.from(topology.tetrahedra.slice(i * 4, i * 4 + 4));
      const p = nodes.map((n) => new THREE.Vector3().fromArray(rest, n * 3));
      const edges = p.slice(1).map((v) => v.clone().sub(p[0]));
      const inverse = new THREE.Matrix3()
        .set(
          edges[0].x,
          edges[1].x,
          edges[2].x,
          edges[0].y,
          edges[1].y,
          edges[2].y,
          edges[0].z,
          edges[1].z,
          edges[2].z,
        )
        .invert();
      return {
        nodes,
        p,
        edges,
        inverse,
        bounds: new THREE.Box3().setFromPoints(p).expandByScalar(0.035),
      };
    },
  );
  const bins = new Map<string, number[]>();
  const bin = (x: number) => Math.floor(x / 0.16);
  cells.forEach((cell, i) => {
    for (let x = bin(cell.bounds.min.x); x <= bin(cell.bounds.max.x); x++)
      for (let y = bin(cell.bounds.min.y); y <= bin(cell.bounds.max.y); y++)
        for (let z = bin(cell.bounds.min.z); z <= bin(cell.bounds.max.z); z++) {
          const key = `${x},${y},${z}`;
          const list = bins.get(key) ?? [];
          list.push(i);
          bins.set(key, list);
        }
  });
  const ids = new Float32Array((source.length / 3) * 4);
  const weights = new Float32Array(ids.length);
  const normalBasis = new Float32Array(source.length);
  const normals = geometry.getAttribute("normal");
  const point = new THREE.Vector3(),
    q = new THREE.Vector3(),
    normal = new THREE.Vector3();
  const bindings: VolumeTopology["bindings"] = [];
  for (let i = 0; i < source.length / 3; i++) {
    point.fromArray(source, i * 3);
    let candidates = bins.get(
      `${bin(point.x)},${bin(point.y)},${bin(point.z)}`,
    );
    const nearby = (): number[] => {
      const found = new Set<number>();
      for (let x = bin(point.x) - 1; x <= bin(point.x) + 1; x++)
        for (let y = bin(point.y) - 1; y <= bin(point.y) + 1; y++)
          for (let z = bin(point.z) - 1; z <= bin(point.z) + 1; z++)
            for (const j of bins.get(`${x},${y},${z}`) ?? []) found.add(j);
      return [...found];
    };
    // The detailed rind may extend beyond the coarse cut volume. Search the
    // neighboring cells rather than attaching it to an arbitrarily thin cap.
    if (!candidates?.length) candidates = nearby();
    if (!candidates.length)
      throw new Error(
        "This fragment is too thin to attach its surface safely. Try a wider bite.",
      );
    let best = -1,
      score = Infinity,
      chosen = [0, 0, 0, 0];
    const choose = (candidateIds: number[]): void => {
      for (const j of candidateIds) {
        const cell = cells[j];
        q.copy(point).sub(cell.p[0]).applyMatrix3(cell.inverse);
        const w0 = 1 - q.x - q.y - q.z;
        const outside =
          Math.max(0, -w0) +
          Math.max(0, -q.x) +
          Math.max(0, -q.y) +
          Math.max(0, -q.z);
        if (outside < score) {
          best = j;
          score = outside;
          chosen[0] = w0;
          chosen[1] = q.x;
          chosen[2] = q.y;
          chosen[3] = q.z;
          if (outside < 1e-7) break;
        }
      }
    };
    choose(candidates);
    if (score > 0.75) choose(nearby());
    if (score > 3)
      throw new Error(
        "This fragment is too thin to attach its surface safely. Try a wider bite.",
      );
    const cell = cells[best];
    ids.set(cell.nodes, i * 4);
    weights.set(chosen, i * 4);
    normal.fromBufferAttribute(normals, i);
    normalBasis.set(
      cell.edges.map((e) => e.dot(normal)),
      i * 3,
    );
    bindings.push({ nodes: cell.nodes, weights: chosen });
  }
  topology.bindings = bindings;
  geometry.setAttribute("aVolumeNodes", new THREE.BufferAttribute(ids, 4));
  geometry.setAttribute(
    "aVolumeWeights",
    new THREE.BufferAttribute(weights, 4),
  );
  geometry.setAttribute(
    "aVolumeNormal",
    new THREE.BufferAttribute(normalBasis, 3),
  );
}
