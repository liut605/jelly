// Separate the source's two connected objects without changing a single
// triangle, authored normal, UV, material, or texture. Welding is ONLY used
// to identify connectivity across UV seams; delivery vertices stay intact.
import { readFile, writeFile, realpath } from "node:fs/promises";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";
const require = createRequire(
  await realpath(
    new URL(
      "../artifacts/jelly-study/node_modules/@types/three/package.json",
      import.meta.url,
    ),
  ),
);
const { MeshoptEncoder, MeshoptDecoder } = require("meshoptimizer");
const input = process.argv[2] ?? "attached_assets/tea-set-original.glb";
const output = "attached_assets/tea-set-web.glb";
const source = await readFile(input),
  jsonLength = source.readUInt32LE(12);
const doc = JSON.parse(source.subarray(20, 20 + jsonLength));
const binary = source.subarray(28 + jsonLength);
const originalViews = doc.bufferViews;
function attribute(id) {
  const a = doc.accessors[id],
    v = originalViews[a.bufferView];
  if (v.byteStride) throw new Error("Unexpected interleaved source");
  const C =
    a.componentType === 5126
      ? Float32Array
      : a.componentType === 5125
        ? Uint32Array
        : Uint16Array;
  return new C(
    binary.buffer,
    binary.byteOffset + (v.byteOffset ?? 0) + (a.byteOffset ?? 0),
    a.count * { SCALAR: 1, VEC2: 2, VEC3: 3 }[a.type],
  );
}
const primitive = doc.meshes[0].primitives[0];
const positions = attribute(primitive.attributes.POSITION),
  normals = attribute(primitive.attributes.NORMAL),
  uv = attribute(primitive.attributes.TEXCOORD_0),
  indices = attribute(primitive.indices);
const count = positions.length / 3,
  parents = Uint32Array.from({ length: count }, (_, i) => i),
  sizes = new Uint32Array(count).fill(1);
function root(i) {
  while (parents[i] !== i) {
    parents[i] = parents[parents[i]];
    i = parents[i];
  }
  return i;
}
function union(a, b) {
  a = root(a);
  b = root(b);
  if (a === b) return;
  if (sizes[a] < sizes[b]) [a, b] = [b, a];
  parents[b] = a;
  sizes[a] += sizes[b];
}
for (let i = 0; i < indices.length; i += 3) {
  union(indices[i], indices[i + 1]);
  union(indices[i], indices[i + 2]);
}
const welded = new Map();
for (let i = 0; i < count; i++) {
  const key = [0, 1, 2]
    .map((j) => Math.round(positions[i * 3 + j] * 1e6))
    .join(",");
  const previous = welded.get(key);
  if (previous === undefined) welded.set(key, i);
  else union(previous, i);
}
welded.clear();
const components = new Map();
for (let i = 0; i < indices.length; i += 3) {
  const r = root(indices[i]);
  components.set(r, (components.get(r) ?? 0) + 1);
}
if (components.size !== 2)
  throw new Error(
    `Expected two spatially separate objects; found ${components.size}`,
  );
const parts = [...components].sort((a, b) => b[1] - a[1]);
const chunks = [],
  views = [],
  accessors = [],
  meshes = [],
  nodes = [],
  reportParts = [];
let byteLength = 0,
  fallbackLength = 0,
  verified = 0;
function append(bytes) {
  const pad = (4 - (byteLength % 4)) % 4;
  if (pad) {
    chunks.push(Buffer.alloc(pad));
    byteLength += pad;
  }
  const location = { byteOffset: byteLength, byteLength: bytes.length };
  chunks.push(Buffer.from(bytes));
  byteLength += bytes.length;
  return location;
}
await Promise.all([MeshoptEncoder.ready, MeshoptDecoder.ready]);
function encode(array, type, componentType, min, max) {
  const stride = { SCALAR: 1, VEC2: 2, VEC3: 3 }[type] * 4,
    n = array.byteLength / stride;
  const raw = new Uint8Array(array.buffer, array.byteOffset, array.byteLength),
    mode = type === "SCALAR" ? "INDICES" : "ATTRIBUTES";
  const compressed = MeshoptEncoder.encodeGltfBuffer(raw, n, stride, mode);
  const decoded = new Uint8Array(raw.length);
  MeshoptDecoder.decodeGltfBuffer(decoded, n, stride, compressed, mode);
  if (!Buffer.from(decoded).equals(Buffer.from(raw)))
    throw new Error("Geometry lossless check failed");
  verified++;
  const view = views.length;
  views.push({
    buffer: 1,
    byteOffset: fallbackLength,
    byteLength: raw.length,
    ...(type !== "SCALAR" ? { byteStride: stride } : {}),
    extensions: {
      EXT_meshopt_compression: {
        buffer: 0,
        ...append(compressed),
        byteStride: stride,
        count: n,
        mode,
      },
    },
  });
  fallbackLength += raw.length;
  accessors.push({
    bufferView: view,
    componentType,
    count: n,
    type,
    ...(min ? { min, max } : {}),
  });
  return accessors.length - 1;
}
for (const [partIndex, [r, triangles]] of parts.entries()) {
  const name = partIndex === 0 ? "Teapot" : "Teacup";
  const remap = new Int32Array(count).fill(-1),
    sourceIds = [];
  const nextIndices = new Uint32Array(triangles * 3);
  let k = 0;
  for (let i = 0; i < indices.length; i += 3) {
    if (root(indices[i]) !== r) continue;
    for (let j = 0; j < 3; j++) {
      const sourceId = indices[i + j];
      if (remap[sourceId] < 0) {
        remap[sourceId] = sourceIds.length;
        sourceIds.push(sourceId);
      }
      nextIndices[k++] = remap[sourceId];
    }
  }
  const p = new Float32Array(sourceIds.length * 3),
    n = p.slice(),
    t = new Float32Array(sourceIds.length * 2);
  const min = [Infinity, Infinity, Infinity],
    max = [-Infinity, -Infinity, -Infinity];
  sourceIds.forEach((old, now) => {
    for (let j = 0; j < 3; j++) {
      p[now * 3 + j] = positions[old * 3 + j];
      n[now * 3 + j] = normals[old * 3 + j];
      min[j] = Math.min(min[j], p[now * 3 + j]);
      max[j] = Math.max(max[j], p[now * 3 + j]);
    }
    for (let j = 0; j < 2; j++) t[now * 2 + j] = uv[old * 2 + j];
  });
  meshes.push({
    name,
    primitives: [
      {
        attributes: {
          POSITION: encode(p, "VEC3", 5126, min, max),
          NORMAL: encode(n, "VEC3", 5126),
          TEXCOORD_0: encode(t, "VEC2", 5126),
        },
        indices: encode(nextIndices, "SCALAR", 5125),
        material: primitive.material,
      },
    ],
  });
  nodes.push({
    name,
    mesh: partIndex,
    extras: { interactionId: name.toLowerCase() },
  });
  reportParts.push({ name, triangles, vertices: sourceIds.length, min, max });
}
for (const image of doc.images) {
  const old = originalViews[image.bufferView];
  image.bufferView = views.length;
  const raw = binary.subarray(
    old.byteOffset ?? 0,
    (old.byteOffset ?? 0) + old.byteLength,
  );
  views.push({ buffer: 0, ...append(raw) });
}
Object.assign(doc, {
  nodes,
  meshes,
  scenes: [{ name: "Tea set", nodes: [0, 1] }],
  scene: 0,
  bufferViews: views,
  accessors,
  extensionsUsed: ["EXT_meshopt_compression"],
  extensionsRequired: ["EXT_meshopt_compression"],
  buffers: [
    { byteLength },
    {
      byteLength: fallbackLength,
      extensions: { EXT_meshopt_compression: { fallback: true } },
    },
  ],
});
const json = Buffer.from(JSON.stringify(doc)),
  jsonPadded = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32);
json.copy(jsonPadded);
const binPadded = Buffer.concat([
  ...chunks,
  Buffer.alloc((4 - (byteLength % 4)) % 4),
]);
const header = Buffer.alloc(20),
  binHeader = Buffer.alloc(8);
header.write("glTF");
header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + jsonPadded.length + binPadded.length, 8);
header.writeUInt32LE(jsonPadded.length, 12);
header.writeUInt32LE(0x4e4f534a, 16);
binHeader.writeUInt32LE(binPadded.length);
binHeader.writeUInt32LE(0x004e4942, 4);
const result = Buffer.concat([header, jsonPadded, binHeader, binPadded]);
await writeFile(output, result);
const report = {
  input,
  output,
  sourceSha256: createHash("sha256").update(source).digest("hex"),
  originalBytes: source.length,
  bytes: result.length,
  lossless: true,
  verifiedGeometryBuffers: verified,
  totalTriangles: indices.length / 3,
  parts: reportParts,
  segmentation:
    "Two spatially connected objects identified across coincident UV seams. No triangle removal, decimation, texture re-encoding or normal changes.",
};
await writeFile(
  "docs/tea-set-asset.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
