import * as THREE from "three";
import {
  createPeachGeometry,
  mapPeachSlicePoint,
} from "../src/scene/peachGeometry.ts";
import {
  createDriedPersimmonGeometry,
  mapDriedPersimmonPoint,
} from "../src/scene/driedPersimmonGeometry.ts";
import { createVolumeTopology } from "../src/scene/volumeTopology.ts";
import { initializeMunch, munchGeometry } from "../src/scene/munchGeometry.ts";
await initializeMunch();
for (const [id, create, map] of [
  ["peach", createPeachGeometry, mapPeachSlicePoint],
  ["dried-persimmon", createDriedPersimmonGeometry, mapDriedPersimmonPoint],
] as const) {
  const data = create();
  const topology = createVolumeTopology(
    data.volumeSourcePositions,
    data.rings,
    data.sides,
    map,
  );
  const snapshot = {
    topology,
    positions: topology.restPositions.slice(),
    velocities: new Float32Array(topology.nodeCount * 3),
  };
  for (let i = 0; i < 2; i++) {
    const start = performance.now();
    const result = await munchGeometry(
      data.geometry,
      snapshot,
      {
        origin: new THREE.Vector3(0, 0, -0.6),
        right: new THREE.Vector3(1, 0, 0),
        up: new THREE.Vector3(0, 0, 1),
        forward: new THREE.Vector3(0, -1, 0),
        radius: 0.65,
      },
      id,
    );
    console.log(
      JSON.stringify({
        id,
        ms: Math.round(performance.now() - start),
        kind: result.kind,
        vertices:
          result.kind === "cut"
            ? result.pieces.map((p) => p.source.length / 3)
            : [],
      }),
    );
    if (result.kind === "cut")
      result.pieces.forEach((p) => p.geometry.dispose());
  }
  data.geometry.dispose();
}
