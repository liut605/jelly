import * as THREE from "three";
import type { SliceMap } from "./sliceGeometry.ts";

/** A watertight cut face with rounded tunnel lips. The boundary loops are
 * shared by the caps and walls, so no sliver triangles bridge an opening. */
export function createPerforatedSlice(
  holes: THREE.Vector2[][],
  map: SliceMap,
  colorAt: (material: [number, number, number], wall: number) => THREE.Color,
): THREE.BufferGeometry {
  const outer = Array.from({ length: 128 }, (_, i) => {
    const a = (i * Math.PI * 2) / 128;
    return new THREE.Vector2(Math.cos(a) * 0.89, Math.sin(a) * 0.89);
  });
  const points = [...outer, ...holes.flat()];
  let faces = THREE.ShapeUtils.triangulateShape(outer, holes);
  let offset = 0;
  let loops = [outer, ...holes].map((loop) => loop.map(() => offset++));
  // Uniform conforming refinement keeps the cap detailed enough to deform,
  // and also refines every shared boundary edge without introducing T-joints.
  for (let pass = 0; pass < 3; pass++) {
    const mids = new Map<string, number>();
    const midpoint = (a: number, b: number): number => {
      const key = a < b ? `${a}:${b}` : `${b}:${a}`;
      let id = mids.get(key);
      if (id === undefined) {
        id = points.length;
        points.push(points[a].clone().add(points[b]).multiplyScalar(0.5));
        mids.set(key, id);
      }
      return id;
    };
    faces = faces.flatMap(([a, b, c]) => {
      const ab = midpoint(a, b),
        bc = midpoint(b, c),
        ca = midpoint(c, a);
      return [
        [a, ab, ca],
        [ab, b, bc],
        [ca, bc, c],
        [ab, bc, ca],
      ];
    });
    loops = loops.map((loop) =>
      loop.flatMap((a, i) => [a, midpoint(a, loop[(i + 1) % loop.length])]),
    );
  }
  const positions: number[] = [],
    colors: number[] = [],
    material: number[] = [],
    walls: number[] = [],
    indices: number[] = [];
  const vertex = (
    x: number,
    y: number,
    z: number,
    height?: number,
    wall = 0,
  ): number => {
    const p = map(x, y, z);
    if (height !== undefined) p[1] = height;
    const color = colorAt([x, y, z], wall);
    const id = positions.length / 3;
    positions.push(...p);
    colors.push(color.r, color.g, color.b);
    material.push(x, y, z);
    walls.push(wall);
    return id;
  };
  const top = points.map(({ x, y }) =>
    vertex(x, y, Math.sqrt(1 - x * x - y * y)),
  );
  const bottom = points.map(({ x, y }) =>
    vertex(x, y, -Math.sqrt(1 - x * x - y * y)),
  );
  for (const [a, b, c] of faces) {
    indices.push(top[a], top[b], top[c], bottom[a], bottom[c], bottom[b]);
  }
  const join = (a: number[], b: number[], inward: boolean): void => {
    for (let i = 0; i < a.length; i++) {
      const j = (i + 1) % a.length;
      if (inward) indices.push(a[i], a[j], b[i], a[j], b[j], b[i]);
      else indices.push(a[i], b[i], a[j], a[j], b[i], b[j]);
    }
  };
  // Rounded outer rind, connected directly to the two cap loops.
  let previous = loops[0].map((id) => top[id]);
  for (let step = 1; step <= 24; step++) {
    const angle = (step * Math.PI) / 24;
    const radius = 0.89 + 0.11 * Math.sin(angle);
    const height =
      -0.16 + 0.34 * Math.cos(angle) * Math.sqrt(1 + Math.sin(angle) ** 2);
    const next =
      step === 24
        ? loops[0].map((id) => bottom[id])
        : loops[0].map((id) => {
            const p = points[id].clone().multiplyScalar(radius / 0.89);
            const z =
              Math.sign(Math.cos(angle)) *
              Math.sqrt(Math.max(0, 1 - p.lengthSq()));
            return vertex(p.x, p.y, z, height);
          });
    join(previous, next, false);
    previous = next;
  }
  holes.forEach((hole, h) => {
    const center = hole
      .reduce((sum, p) => sum.add(p), new THREE.Vector2())
      .multiplyScalar(1 / hole.length);
    const loop = loops[h + 1];
    previous = loop.map((id) => top[id]);
    // Radius is relative to the cap opening. A small lip rolls smoothly into
    // the vertical tunnel and back out at the underside, with no deep funnel.
    const profile = [
      [0.012, 0.93],
      [0.03, 0.86],
      [0.09, 0.84],
      [0.25, 0.84],
      [0.5, 0.84],
      [0.75, 0.84],
      [0.91, 0.84],
      [0.97, 0.86],
      [0.988, 0.93],
      [1, 1],
    ];
    for (const [depth, radius] of profile) {
      const next =
        depth === 1
          ? loop.map((id) => bottom[id])
          : loop.map((id) => {
              const p = points[id]
                .clone()
                .sub(center)
                .multiplyScalar(radius)
                .add(center);
              const z = Math.sqrt(1 - p.lengthSq()) * (1 - 2 * depth);
              return vertex(p.x, p.y, z, 0.18 - 0.68 * depth, 1);
            });
      join(previous, next, true);
      previous = next;
    }
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute(
    "aFleshCoordinate",
    new THREE.Float32BufferAttribute(material, 3),
  );
  geometry.setAttribute(
    "aChannelWall",
    new THREE.Float32BufferAttribute(walls, 1),
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  // The exposed jelly face is smooth. Rice grains and embedded petals are
  // color detail beneath that face; deriving normals from narrow cap triangles
  // turns their tiny relief into long specular shards when the slice tilts.
  // Keep the shared lip normals rounded, and the interior cap normal planar.
  const boundary = new Set(loops.flat());
  const normals = geometry.getAttribute("normal");
  points.forEach((_point, i) => {
    if (boundary.has(i)) return;
    normals.setXYZ(top[i], 0, 1, 0);
    normals.setXYZ(bottom[i], 0, -1, 0);
  });
  geometry.userData.volumeSkinning = true;
  return geometry;
}
