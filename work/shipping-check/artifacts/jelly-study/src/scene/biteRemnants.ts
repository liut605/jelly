import * as THREE from "three";
import type { Manifold, ManifoldToplevel, Mat4, Vec3 } from "manifold-3d";
import { biteOutline, outlineDistance, type BiteGuide } from "./biteVolume.ts";

// A retained region must be able to contain a 0.09-unit ball. Only the new
// bite's neighborhood is cleaned; rind, flowers and rice elsewhere are intact.
export const MIN_BITE_THICKNESS = 0.09;
const CLEANUP_BAND = 0.19;
const FAR = 1e10;

/** Exact separable squared Euclidean distance transform, in grid units. */
function distanceTransform(
  mask: Uint8Array,
  nx: number,
  ny: number,
  nz: number,
): Float32Array {
  const values = Float32Array.from(mask, (v) => (v ? 0 : FAR));
  const length = Math.max(nx, ny, nz),
    f = new Float64Array(length),
    out = new Float64Array(length);
  const sites = new Int32Array(length),
    limits = new Float64Array(length + 1);
  const line = (start: number, stride: number, n: number) => {
    for (let i = 0; i < n; i++) f[i] = values[start + i * stride];
    let k = 0;
    sites[0] = 0;
    limits[0] = -Infinity;
    limits[1] = Infinity;
    for (let q = 1; q < n; q++) {
      let split =
        (f[q] + q * q - (f[sites[k]] + sites[k] ** 2)) / (2 * (q - sites[k]));
      while (split <= limits[k]) {
        k--;
        split =
          (f[q] + q * q - (f[sites[k]] + sites[k] ** 2)) / (2 * (q - sites[k]));
      }
      sites[++k] = q;
      limits[k] = split;
      limits[k + 1] = Infinity;
    }
    k = 0;
    for (let q = 0; q < n; q++) {
      while (limits[k + 1] < q) k++;
      out[q] = (q - sites[k]) ** 2 + f[sites[k]];
    }
    for (let i = 0; i < n; i++) values[start + i * stride] = out[i];
  };
  for (let z = 0; z < nz; z++)
    for (let y = 0; y < ny; y++) line(nx * (y + ny * z), 1, nx);
  for (let z = 0; z < nz; z++)
    for (let x = 0; x < nx; x++) line(x + nx * ny * z, nx, ny);
  for (let y = 0; y < ny; y++)
    for (let x = 0; x < nx; x++) line(x + nx * y, nx * ny, nz);
  return values;
}

export interface RemnantCleanup {
  /** Closed removal volume, to subtract from both the surface and physics. */
  geometry: THREE.BufferGeometry;
  supportDistance: (point: THREE.Vector3) => number;
}

/** Morphological opening detects attached paper-thin flaps as well as crumbs.
 * It is a cleanup mask, never a replacement/remesh of the detailed specimen. */
export function createRemnantCleanup(
  m: ManifoldToplevel,
  remaining: Manifold,
  guide: BiteGuide,
): RemnantCleanup | null {
  const matrix = new THREE.Matrix4()
    .makeBasis(guide.right, guide.up, guide.forward)
    .setPosition(guide.origin);
  const inverse = matrix.clone().invert();
  const aligned = remaining.transform(inverse.elements as Mat4);
  let maskSolid: Manifold | undefined;
  try {
    const bounds = aligned.boundingBox(),
      radius = MIN_BITE_THICKNESS / 2;
    const step = Math.max(
      0.022,
      Math.max(...bounds.max.map((v, i) => v - bounds.min[i])) / 112,
    );
    const min = bounds.min.map((v) => v - radius * 3) as Vec3;
    const size = bounds.max.map(
      (v, i) => Math.ceil((v - min[i] + radius * 3) / step) + 1,
    );
    const [nx, ny, nz] = size;
    if (nx * ny * nz > 1500000)
      throw new Error(
        "This stretched shape is too large to check for thin remnants. Let it settle first.",
      );
    const max = size.map((n, i) => min[i] + (n - 1) * step) as Vec3;
    const inside = new Uint8Array(nx * ny * nz);
    for (let y = 0; y < ny; y++)
      for (let x = 0; x < nx; x++) {
        const u = min[0] + x * step,
          v = min[1] + y * step;
        const hits = aligned.rayCast([u, v, min[2]], [u, v, max[2]]);
        // Group coincident edge/vertex hits before updating the oriented winding.
        let winding = 0,
          previous = min[2];
        for (let h = 0; h < hits.length;) {
          const z = hits[h].position[2];
          if (winding > 0)
            for (
              let k = Math.max(0, Math.ceil((previous - min[2]) / step));
              k < nz && min[2] + k * step < z;
              k++
            )
              inside[x + nx * (y + ny * k)] = 1;
          let entering = false,
            leaving = false;
          while (h < hits.length && Math.abs(hits[h].position[2] - z) < 1e-6) {
            entering ||= hits[h].normal[2] < -1e-7;
            leaving ||= hits[h].normal[2] > 1e-7;
            h++;
          }
          if (entering !== leaving) winding += entering ? 1 : -1;
          previous = z;
        }
      }
    const outside = Uint8Array.from(inside, (v) => (v ? 0 : 1));
    const clearance = distanceTransform(outside, nx, ny, nz);
    const core = Uint8Array.from(inside, (v, i) =>
      v && clearance[i] * step * step >= (radius + step * 0.5) ** 2 ? 1 : 0,
    );
    const distance = distanceTransform(core, nx, ny, nz);
    // Precompute the horizontal cutter profile.
    const polygon = biteOutline(guide),
      mouth = new Float32Array(nx * ny);
    for (let y = 0; y < ny; y++)
      for (let x = 0; x < nx; x++)
        mouth[x + nx * y] = outlineDistance(
          min[0] + x * step,
          min[1] + y * step,
          polygon,
        );
    const keep = new Float32Array(inside.length);
    let removedVoxels = 0;
    for (let z = 0; z < nz; z++)
      for (let y = 0; y < ny; y++)
        for (let x = 0; x < nx; x++) {
          const i = x + nx * (y + ny * z);
          // Account for voxel-center quantization at the eroded core boundary.
          // Without this guard, a valid thick surface gets skimmed into a ragged
          // band of new pale interior material beside every bite.
          const support = radius + step * 1.5 - Math.sqrt(distance[i]) * step;
          const near = mouth[x + nx * y] - CLEANUP_BAND;
          keep[i] = Math.max(support, near);
          if (inside[i] && keep[i] < -step * 0.35) removedVoxels++;
        }
    // This sampler runs hundreds of thousands of times inside levelSet.
    // Keep the identical grid and interpolation without allocating arrays per voxel.
    const sample = (x: number, y: number, z: number): number => {
      const qx = THREE.MathUtils.clamp((x - min[0]) / step, 0, nx - 1.00001);
      const qy = THREE.MathUtils.clamp((y - min[1]) / step, 0, ny - 1.00001);
      const qz = THREE.MathUtils.clamp((z - min[2]) / step, 0, nz - 1.00001);
      const bx = Math.floor(qx),
        by = Math.floor(qy),
        bz = Math.floor(qz);
      const fx = qx - bx,
        fy = qy - by,
        fz = qz - bz;
      let value = 0;
      for (let dz = 0; dz < 2; dz++)
        for (let dy = 0; dy < 2; dy++)
          for (let dx = 0; dx < 2; dx++)
            value +=
              keep[bx + dx + nx * (by + dy + ny * (bz + dz))] *
              (dx ? fx : 1 - fx) *
              (dy ? fy : 1 - fy) *
              (dz ? fz : 1 - fz);
      return value;
    };
    if (removedVoxels * step ** 3 < 0.00008) {
      // A sheet can fall entirely between sampling planes. Inspect its actual
      // vertices too, so sub-grid flaps cannot bypass the thickness check.
      const mesh = aligned.getMesh();
      let unsupported = false;
      for (let i = 0; i < mesh.vertProperties.length; i += mesh.numProp) {
        if (
          sample(
            mesh.vertProperties[i],
            mesh.vertProperties[i + 1],
            mesh.vertProperties[i + 2],
          ) <
          -step * 0.75
        ) {
          unsupported = true;
          break;
        }
      }
      if (!unsupported) return null;
    }
    maskSolid = m.Manifold.levelSet(
      (p) =>
        Math.min(
          -sample(p[0], p[1], p[2]),
          p[0] - min[0] - step,
          max[0] - step - p[0],
          p[1] - min[1] - step,
          max[1] - step - p[1],
          p[2] - min[2] - step,
          max[2] - step - p[2],
        ),
      { min, max },
      step,
      0,
      step * 0.15,
    );
    if (maskSolid.isEmpty()) return null;
    if (maskSolid.status() !== "NoError")
      throw new Error("Thin remnant cleanup could not form a closed surface.");
    const mesh = maskSolid.getMesh(),
      geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(mesh.vertProperties.slice(), 3),
    );
    geometry.setIndex(new THREE.BufferAttribute(mesh.triVerts.slice(), 1));
    geometry.computeVertexNormals();
    geometry.applyMatrix4(matrix);
    const localPoint = new THREE.Vector3();
    return {
      geometry,
      supportDistance: (point) => {
        localPoint.copy(point).applyMatrix4(inverse);
        return sample(localPoint.x, localPoint.y, localPoint.z);
      },
    };
  } finally {
    aligned.delete();
    maskSolid?.delete();
  }
}
