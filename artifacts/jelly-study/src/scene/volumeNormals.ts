import * as THREE from "three";
import type { VolumeTopology } from "./volumeTopology.ts";

/** Least-squares deformation gradients at nodes, shared across tetrahedra.
 * Positions still use the physical cells; shading no longer reveals cell edges. */
export function normalGradientLinks(topology: VolumeTopology): number[][] {
  const links: number[][] = [];
  topology.edges.forEach((neighbors, i) => {
    const center = new THREE.Vector3().fromArray(topology.restPositions, i * 3);
    const edges = neighbors.map((j) =>
      new THREE.Vector3().fromArray(topology.restPositions, j * 3).sub(center),
    );
    const covariance = new THREE.Matrix3().set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const a = covariance.elements;
    edges.forEach((e) => {
      const v = e.toArray(),
        w = 1 / Math.max(e.lengthSq(), 1e-10);
      for (let c = 0; c < 3; c++)
        for (let r = 0; r < 3; r++) a[c * 3 + r] += v[r] * v[c] * w;
    });
    covariance.invert();
    edges.forEach((e, j) => {
      const w = 1 / Math.max(e.lengthSq(), 1e-10);
      e.applyMatrix3(covariance).multiplyScalar(w);
      links.push([e.x, e.y, e.z, neighbors[j]]);
    });
  });
  return links;
}
export function volumeNormalFrames(
  topology: VolumeTopology,
  positions: Float32Array,
): Float32Array {
  const links = normalGradientLinks(topology),
    frames = new Float32Array(topology.nodeCount * 9);
  let at = 0;
  topology.edges.forEach((neighbors, i) => {
    for (let j = 0; j < neighbors.length; j++) {
      const link = links[at++],
        n = link[3];
      for (let c = 0; c < 3; c++)
        for (let r = 0; r < 3; r++)
          frames[i * 9 + c * 3 + r] +=
            (positions[n * 3 + r] - positions[i * 3 + r]) * link[c];
    }
  });
  return frames;
}
export function surfaceNormalFrame(
  frames: Float32Array,
  binding: VolumeTopology["bindings"][number],
): THREE.Matrix3 {
  const matrix = new THREE.Matrix3().set(0, 0, 0, 0, 0, 0, 0, 0, 0);
  const weights = binding.weights.map((w) => Math.max(0, w)),
    sum = weights.reduce((a, b) => a + b, 0);
  binding.nodes.forEach((n, j) => {
    for (let k = 0; k < 9; k++)
      matrix.elements[k] += (frames[n * 9 + k] * weights[j]) / sum;
  });
  return matrix;
}
