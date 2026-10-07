import * as THREE from "three";
import type { BiteGuide } from "./biteVolume.ts";
import type { MunchResult } from "./munchGeometry.ts";
import type { SoftBodySnapshot } from "./softBodyGpu.ts";
import type { SpecimenId } from "./specimens.ts";
import type { VolumeTopology } from "./volumeTopology.ts";

type AttributeData = {
  array: THREE.TypedArray;
  itemSize: number;
  normalized: boolean;
};
export interface GeometryData {
  attributes: Record<string, AttributeData>;
  index: Uint32Array | null;
  volumeSkinning: boolean;
  volumeBindingsReady: boolean;
}
// Pack the tens of thousands of surface bindings instead of cloning an object
// graph for every vertex. Float64 preserves the original JS weight precision.
interface SnapshotData extends Omit<SoftBodySnapshot, "topology"> {
  topology: Omit<VolumeTopology, "bindings">;
  bindingOffsets: Uint32Array;
  bindingNodes: Uint32Array;
  bindingWeights: Float64Array;
}
type GuideData = {
  origin: number[];
  right: number[];
  up: number[];
  forward: number[];
  radius: number;
};
export interface CutRequest {
  id: number;
  geometry: GeometryData;
  state: SnapshotData;
  guide: GuideData;
  specimen: SpecimenId;
  consumeWhole: boolean;
}
export type ResultData =
  | Exclude<MunchResult, { kind: "cut" }>
  | {
      kind: "cut";
      removedVolume: number;
      pieces: {
        geometry: GeometryData;
        source: Float32Array;
        state: SnapshotData;
      }[];
    };
export type CutResponse =
  { id: number; result: ResultData } | { id: number; error: string };

export function packGeometry(
  geometry: THREE.BufferGeometry,
  copy: boolean,
): GeometryData {
  const attributes: Record<string, AttributeData> = {};
  for (const [name, attribute] of Object.entries(geometry.attributes)) {
    if (!(attribute instanceof THREE.BufferAttribute))
      throw new Error("Munch requires non-interleaved surface attributes.");
    // The input Boolean only reads these attributes. GPU binding attributes are
    // regenerated for the new volume, so don't copy them into the worker.
    if (
      copy &&
      ![
        "position",
        "normal",
        "color",
        "aFleshCoordinate",
        "aChannelWall",
        "aCutSurface",
      ].includes(name)
    )
      continue;
    attributes[name] = {
      array: copy ? attribute.array.slice() : attribute.array,
      itemSize: attribute.itemSize,
      normalized: attribute.normalized,
    };
  }
  return {
    attributes,
    index: geometry.index ? new Uint32Array(geometry.index.array) : null,
    volumeSkinning: !!geometry.userData.volumeSkinning,
    volumeBindingsReady: !!geometry.userData.volumeBindingsReady,
  };
}
export function unpackGeometry(data: GeometryData): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  for (const [name, attribute] of Object.entries(data.attributes))
    geometry.setAttribute(
      name,
      new THREE.BufferAttribute(
        attribute.array,
        attribute.itemSize,
        attribute.normalized,
      ),
    );
  if (data.index) geometry.setIndex(new THREE.BufferAttribute(data.index, 1));
  geometry.userData.volumeSkinning = data.volumeSkinning;
  geometry.userData.volumeBindingsReady = data.volumeBindingsReady;
  return geometry;
}
function packSnapshot(state: SoftBodySnapshot, copy: boolean): SnapshotData {
  const { bindings, ...topology } = state.topology;
  const bindingOffsets = new Uint32Array(bindings.length + 1);
  for (let i = 0; i < bindings.length; i++)
    bindingOffsets[i + 1] = bindingOffsets[i] + bindings[i].nodes.length;
  const bindingNodes = new Uint32Array(bindingOffsets[bindings.length]);
  const bindingWeights = new Float64Array(bindingNodes.length);
  bindings.forEach((binding, i) => {
    bindingNodes.set(binding.nodes, bindingOffsets[i]);
    bindingWeights.set(binding.weights, bindingOffsets[i]);
  });
  // Input topology is owned by the live solver. NEVER transfer its buffers.
  return {
    topology: copy
      ? {
          ...topology,
          restPositions: topology.restPositions.slice(),
          materialPositions: topology.materialPositions?.slice(),
          tetrahedra: topology.tetrahedra.slice(),
          tetraRestVolumes: topology.tetraRestVolumes.slice(),
          surfaceGrid: topology.surfaceGrid.slice(),
        }
      : topology,
    positions: copy ? state.positions.slice() : state.positions,
    velocities: copy ? state.velocities.slice() : state.velocities,
    bindingOffsets,
    bindingNodes,
    bindingWeights,
  };
}
function unpackSnapshot(data: SnapshotData): SoftBodySnapshot {
  const bindings: VolumeTopology["bindings"] = [];
  for (let i = 0; i + 1 < data.bindingOffsets.length; i++) {
    const start = data.bindingOffsets[i],
      end = data.bindingOffsets[i + 1];
    bindings.push({
      nodes: Array.from(data.bindingNodes.subarray(start, end)),
      weights: Array.from(data.bindingWeights.subarray(start, end)),
    });
  }
  return {
    positions: data.positions,
    velocities: data.velocities,
    topology: { ...data.topology, bindings },
  };
}
export function packRequest(
  id: number,
  geometry: THREE.BufferGeometry,
  state: SoftBodySnapshot,
  guide: BiteGuide,
  specimen: SpecimenId,
  consumeWhole: boolean,
): CutRequest {
  return {
    id,
    geometry: packGeometry(geometry, true),
    state: packSnapshot(state, true),
    specimen,
    consumeWhole,
    guide: {
      origin: guide.origin.toArray(),
      right: guide.right.toArray(),
      up: guide.up.toArray(),
      forward: guide.forward.toArray(),
      radius: guide.radius,
    },
  };
}
export function unpackRequest(data: CutRequest) {
  const vector = (p: number[]) => new THREE.Vector3().fromArray(p);
  return {
    geometry: unpackGeometry(data.geometry),
    state: unpackSnapshot(data.state),
    guide: {
      origin: vector(data.guide.origin),
      right: vector(data.guide.right),
      up: vector(data.guide.up),
      forward: vector(data.guide.forward),
      radius: data.guide.radius,
    },
  };
}
export function packResult(result: MunchResult): ResultData {
  if (result.kind !== "cut") return result;
  return {
    ...result,
    pieces: result.pieces.map((p) => ({
      geometry: packGeometry(p.geometry, false),
      source: p.source,
      state: packSnapshot(p.state, false),
    })),
  };
}
export function unpackResult(result: ResultData): MunchResult {
  if (result.kind !== "cut") return result;
  return {
    ...result,
    pieces: result.pieces.map((p) => ({
      geometry: unpackGeometry(p.geometry),
      source: p.source,
      state: unpackSnapshot(p.state),
    })),
  };
}
/** Only inspect typed fields, not every number in the large nested adjacency lists. */
export function transferBuffers(data: CutRequest | ResultData): ArrayBuffer[] {
  const buffers = new Set<ArrayBuffer>();
  const add = (array?: THREE.TypedArray) => {
    if (array?.buffer instanceof ArrayBuffer) buffers.add(array.buffer);
  };
  const geometry = (g: GeometryData) => {
    Object.values(g.attributes).forEach((a) => add(a.array));
    if (g.index) add(g.index);
  };
  const state = (s: SnapshotData) => {
    add(s.positions);
    add(s.velocities);
    add(s.bindingOffsets);
    add(s.bindingNodes);
    add(s.bindingWeights);
    add(s.topology.restPositions);
    add(s.topology.materialPositions);
    add(s.topology.tetrahedra);
    add(s.topology.tetraRestVolumes);
    add(s.topology.surfaceGrid);
  };
  if ("id" in data) {
    geometry(data.geometry);
    state(data.state);
  } else if (data.kind === "cut")
    data.pieces.forEach((p) => {
      geometry(p.geometry);
      state(p.state);
      add(p.source);
    });
  return [...buffers];
}
