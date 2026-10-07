import * as THREE from "three";
import ManifoldModule, {
  type ManifoldToplevel,
  type Manifold,
} from "manifold-3d";
import {
  biteOutline,
  MIN_REMNANT_VOLUME,
  cutVolume,
  MunchRejected,
  type BiteGuide,
} from "./biteVolume.ts";
import { createRemnantCleanup } from "./biteRemnants.ts";
import { volumeNormalFrames, surfaceNormalFrame } from "./volumeNormals.ts";
import { bindVolumeSurface } from "./volumeSkinning.ts";
import type { VolumeTopology } from "./volumeTopology.ts";
import type { SoftBodySnapshot } from "./softBodyGpu.ts";
import type { SpecimenId } from "./specimens.ts";
import { lotusRootInteriorColor } from "./lotusRootGeometry.ts";
import { driedPersimmonInteriorColor } from "./driedPersimmonGeometry.ts";

let runtime: Promise<ManifoldToplevel> | undefined;
export function initializeMunch(
  locateFile?: () => string,
): Promise<ManifoldToplevel> {
  return (runtime ??= ManifoldModule(
    locateFile ? { locateFile } : undefined,
  ).then((m) => {
    m.setup();
    return m;
  }));
}
export interface MunchPiece {
  geometry: THREE.BufferGeometry;
  source: Float32Array;
  state: SoftBodySnapshot;
}
export type MunchResult =
  | { kind: "miss" }
  | { kind: "consumed"; removedVolume: number }
  | { kind: "cut"; pieces: MunchPiece[]; removedVolume: number };

function interiorColor(
  specimen: SpecimenId,
  x: number,
  y: number,
  z: number,
): THREE.Color {
  if (specimen === "lotus-root") return lotusRootInteriorColor(x, y, z);
  if (specimen === "dried-persimmon")
    return driedPersimmonInteriorColor(x, y, z);
  const smooth = THREE.MathUtils.smoothstep,
    r = Math.hypot(x, y);
  if (specimen === "peach")
    return new THREE.Color("#f9eee0").lerp(
      new THREE.Color("#cf526b"),
      (1 - smooth(r, 0.18, 0.72)) * 0.72 + smooth(y, 0.1, 0.85) * 0.18,
    );
  const color = new THREE.Color("#deddb7")
    .lerp(new THREE.Color("#bdd09a"), smooth(r, 0.47, 0.68))
    .lerp(new THREE.Color("#779b49"), smooth(r, 0.65, 0.84));
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3 + 0.18,
      ax = Math.sin(a),
      ay = Math.cos(a),
      qx = x - ax * 0.38,
      qy = y - ay * 0.38;
    color.lerp(
      new THREE.Color("#b93c38"),
      1 -
        smooth(
          Math.hypot((qx * ay - qy * ax) / 0.145, (qx * ax + qy * ay) / 0.235),
          0.72,
          0.94,
        ),
    );
  }
  return color;
}
function toSolid(
  m: ManifoldToplevel,
  geometry: THREE.BufferGeometry,
  cut = false,
  snapshot?: SoftBodySnapshot,
  cutKind = 1,
): Manifold {
  const normalGeometry =
    snapshot && !geometry.userData.volumeSkinning ? geometry.clone() : null;
  normalGeometry?.computeVertexNormals();
  const p = geometry.getAttribute("position"),
    normal = (normalGeometry ?? geometry).getAttribute("normal"),
    color = geometry.getAttribute("color"),
    flesh = geometry.getAttribute("aFleshCoordinate"),
    wall = geometry.getAttribute("aChannelWall"),
    previousCut = geometry.getAttribute("aCutSurface");
  const properties = new Float32Array(p.count * 14);
  const frames =
    snapshot && geometry.userData.volumeSkinning
      ? volumeNormalFrames(snapshot.topology, snapshot.positions)
      : null;
  const smoothNormal = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    smoothNormal.set(
      normal?.getX(i) ?? 0,
      normal?.getY(i) ?? 1,
      normal?.getZ(i) ?? 0,
    );
    const binding = snapshot?.topology.bindings[i];
    if (frames && binding)
      smoothNormal
        .applyMatrix3(surfaceNormalFrame(frames, binding).invert().transpose())
        .normalize();

    const offset = i * 14,
      sign = cut ? -1 : 1;
    properties[offset] = p.getX(i);
    properties[offset + 1] = p.getY(i);
    properties[offset + 2] = p.getZ(i);
    properties[offset + 3] = smoothNormal.x * sign;
    properties[offset + 4] = smoothNormal.y * sign;
    properties[offset + 5] = smoothNormal.z * sign;
    properties[offset + 6] = color?.getX(i) ?? 0;
    properties[offset + 7] = color?.getY(i) ?? 0;
    properties[offset + 8] = color?.getZ(i) ?? 0;
    properties[offset + 9] = flesh?.getX(i) ?? 0;
    properties[offset + 10] = flesh?.getY(i) ?? 0;
    properties[offset + 11] = flesh?.getZ(i) ?? 0;
    properties[offset + 12] = wall?.getX(i) ?? 0;
    properties[offset + 13] = cut ? cutKind : (previousCut?.getX(i) ?? 0);
  }
  const index = geometry.getIndex();
  const mesh = new m.Mesh({
    numProp: 14,
    vertProperties: properties,
    triVerts: index
      ? new Uint32Array(index.array)
      : Uint32Array.from({ length: p.count }, (_, i) => i),
    tolerance: 1e-6,
  });
  mesh.merge();
  normalGeometry?.dispose();
  return new m.Manifold(mesh);
}
function cutterGeometry(guide: BiteGuide): THREE.BufferGeometry {
  const outline = biteOutline(guide).reverse();
  const shape = new THREE.Shape(outline);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 8,
    steps: 16,
    bevelEnabled: false,
  });
  // Smooth along the scallops, but keep the cut/outer-skin junction distinct.
  const wallNormals = new Map<string, THREE.Vector2>();
  const key = (x: number, y: number) => `${x.toFixed(4)},${y.toFixed(4)}`;
  outline.forEach((p, i) => {
    const before = p
      .clone()
      .sub(outline[(i + outline.length - 1) % outline.length])
      .normalize();
    const after = outline[(i + 1) % outline.length].clone().sub(p).normalize();
    const tangent = before.add(after).normalize();
    wallNormals.set(key(p.x, p.y), new THREE.Vector2(tangent.y, -tangent.x));
  });
  const p = geometry.getAttribute("position"),
    n = geometry.getAttribute("normal");
  for (let i = 0; i < p.count; i++) {
    if (Math.abs(n.getZ(i)) > 0.5) continue;
    const smooth = wallNormals.get(key(p.getX(i), p.getY(i)));
    if (smooth) n.setXYZ(i, smooth.x, smooth.y, 0);
  }
  geometry.translate(0, 0, -4);
  const transform = new THREE.Matrix4()
    .makeBasis(guide.right, guide.up, guide.forward)
    .setPosition(guide.origin);
  geometry.applyMatrix4(transform);
  return geometry;
}

/** Closed Boolean surface plus a newly clipped physical volume. Commit only
 * after both have succeeded; errors leave the live scene and solver untouched. */
export async function munchGeometry(
  geometry: THREE.BufferGeometry,
  snapshot: SoftBodySnapshot,
  guide: BiteGuide,
  specimen: SpecimenId,
  consumeWhole = false,
): Promise<MunchResult> {
  const m = await initializeMunch();
  const dispose: { delete(): void }[] = [];
  const cutter = cutterGeometry(guide);
  const generated: THREE.BufferGeometry[] = [];
  let complete = false;
  try {
    const original = toSolid(m, geometry, false, snapshot);
    dispose.push(original);
    if (consumeWhole)
      return { kind: "consumed", removedVolume: original.volume() };
    const bite = toSolid(m, cutter, true);
    dispose.push(bite);
    let remaining = original.subtract(bite);
    dispose.push(remaining);
    if (remaining.status() !== "NoError")
      throw new MunchRejected(
        "This bite could not form a closed surface. Move the guide and try again.",
      );
    const initialVolume = original.volume(),
      remainingVolume = remaining.volume();
    let removedVolume = initialVolume - remainingVolume;
    // Only discard Boolean roundoff / tangency, never a percentage of a piece.
    if (removedVolume <= Math.max(1e-12, initialVolume * 1e-9))
      return { kind: "miss" };
    if (remaining.isEmpty()) return { kind: "consumed", removedVolume };
    if (remainingVolume < MIN_REMNANT_VOLUME)
      return { kind: "consumed", removedVolume: initialVolume };
    const cleanup = createRemnantCleanup(m, remaining, guide);
    if (cleanup) {
      let trim: Manifold;
      try {
        trim = toSolid(m, cleanup.geometry, true, undefined, 2);
      } finally {
        cleanup.geometry.dispose();
      }
      dispose.push(trim);
      remaining = remaining.subtract(trim);
      dispose.push(remaining);
      if (remaining.status() !== "NoError")
        throw new MunchRejected(
          "This bite could not remove a thin remnant safely. Try a wider bite.",
        );
    }
    const allComponents = remaining.decompose();
    dispose.push(...allComponents);
    // Discard closed but surface-like islands, not just small bounding boxes.
    const components = allComponents.filter(
      (c) =>
        c.volume() >= MIN_REMNANT_VOLUME &&
        (2 * c.volume()) / c.surfaceArea() >= 0.035,
    );
    removedVolume =
      initialVolume - components.reduce((v, c) => v + c.volume(), 0);
    if (!components.length) return { kind: "consumed", removedVolume };
    const states = cutVolume(snapshot, guide, cleanup?.supportDistance);
    if (states.length === 1 && states[0] === snapshot)
      throw new MunchRejected(
        "That bite only touches a thin surface detail. Move it farther into the jelly.",
      );
    if (components.length !== states.length)
      throw new MunchRejected(
        "That bite leaves a fragment too thin to simulate safely. Try a wider bite.",
      );
    const unassigned = [...states];
    const pieces = components.map((component) => {
      // Boolean caps otherwise contain long triangles spanning the full depth.
      // Conforming refinement preserves the exact boundary and interpolates skin
      // attributes, while providing enough vertices for smooth elastic motion.
      const refined = component.refineToLength(0.04);
      dispose.push(refined);
      const mesh = refined.getMesh();
      if (mesh.vertProperties.length / mesh.numProp > 260000)
        throw new MunchRejected(
          "This cut has too much surface detail. Try a larger bite or Reset.",
        );
      const count = mesh.vertProperties.length / mesh.numProp;
      const next = new THREE.BufferGeometry();
      generated.push(next);
      const array = (offset: number, size: number) => {
        const values = new Float32Array(count * size);
        for (let i = 0; i < count; i++)
          for (let j = 0; j < size; j++)
            values[i * size + j] =
              mesh.vertProperties[i * mesh.numProp + offset + j];
        return values;
      };
      next.setAttribute("position", new THREE.BufferAttribute(array(0, 3), 3));
      next.setAttribute("normal", new THREE.BufferAttribute(array(3, 3), 3));
      next.setAttribute("color", new THREE.BufferAttribute(array(6, 3), 3));
      next.setAttribute(
        "aFleshCoordinate",
        new THREE.BufferAttribute(array(9, 3), 3),
      );
      next.setAttribute(
        "aChannelWall",
        new THREE.BufferAttribute(array(12, 1), 1),
      );
      next.setAttribute(
        "aCutSurface",
        new THREE.BufferAttribute(array(13, 1), 1),
      );
      next.setIndex(new THREE.BufferAttribute(mesh.triVerts.slice(), 1));
      const normalsNow = next.getAttribute("normal"),
        scratchNormal = new THREE.Vector3();
      for (let i = 0; i < count; i++) {
        const n = scratchNormal.fromBufferAttribute(normalsNow, i).normalize();
        normalsNow.setXYZ(i, n.x, n.y, n.z);
      }
      next.computeBoundingBox();
      const center = next.boundingBox!.getCenter(new THREE.Vector3());
      const nearest = unassigned.reduce(
        (best, s, i) => {
          const c = new THREE.Vector3();
          for (let j = 0; j < s.positions.length; j += 3)
            c.add(new THREE.Vector3().fromArray(s.positions, j));
          c.divideScalar(s.topology.nodeCount);
          const distance = c.distanceToSquared(center);
          return distance < best.distance ? { i, distance } : best;
        },
        { i: 0, distance: Infinity },
      );
      const state = unassigned.splice(nearest.i, 1)[0];
      // Bind once to the NEW clipped volume in the current pose. Inverting the
      // old mesh then searching for different rest-space cells used to pop facets
      // out of the surface. Keep these exact bindings through solver creation.
      const currentTopology: VolumeTopology = {
        ...state.topology,
        restPositions: state.positions.slice(),
        bindings: [],
      };
      const currentSource = new Float32Array(
        next.getAttribute("position").array,
      );
      bindVolumeSurface(next, currentSource, currentTopology);
      const restSource = new Float32Array(currentSource.length),
        interior = new Float32Array(currentSource.length);
      const normals = next.getAttribute("normal"),
        flesh = next.getAttribute("aFleshCoordinate"),
        cut = next.getAttribute("aCutSurface");
      const frames = volumeNormalFrames(state.topology, state.positions);
      currentTopology.bindings.forEach(({ nodes, weights }, i) => {
        const p = new THREE.Vector3(),
          coordinate = new THREE.Vector3();
        nodes.forEach((n, j) => {
          p.addScaledVector(
            new THREE.Vector3().fromArray(state.topology.restPositions, n * 3),
            weights[j],
          );
          coordinate.addScaledVector(
            new THREE.Vector3().fromArray(
              state.topology.materialPositions ?? state.topology.restPositions,
              n * 3,
            ),
            weights[j],
          );
        });
        restSource.set(p.toArray(), i * 3);
        if (cut.getX(i) > 0.5)
          flesh.setXYZ(i, coordinate.x, coordinate.y, coordinate.z);
        const col = interiorColor(
          specimen,
          flesh.getX(i),
          flesh.getY(i),
          flesh.getZ(i),
        );
        interior.set([col.r, col.g, col.b], i * 3);
        const n = new THREE.Vector3()
          .fromBufferAttribute(normals, i)
          .applyMatrix3(
            surfaceNormalFrame(frames, { nodes, weights }).transpose(),
          )
          .normalize();
        normals.setXYZ(i, n.x, n.y, n.z);
      });
      next.setAttribute(
        "position",
        new THREE.BufferAttribute(restSource.slice(), 3),
      );
      next.setAttribute(
        "aInteriorColor",
        new THREE.BufferAttribute(interior, 3),
      );
      state.topology.bindings = currentTopology.bindings;
      next.userData.volumeSkinning = true;
      next.userData.volumeBindingsReady = true;
      return { geometry: next, source: restSource, state };
    });
    complete = true;
    return { kind: "cut", pieces, removedVolume };
  } catch (error) {
    if (error instanceof MunchRejected) throw error;
    throw new MunchRejected(
      "This bite could not be made safely on the current shape. Let it settle, then try again.",
    );
  } finally {
    if (!complete) generated.forEach((geometry) => geometry.dispose());
    cutter.dispose();
    dispose.forEach((s) => s.delete());
  }
}

export { addCutAppearance } from "./munchAppearance.ts";
