// Lossless delivery copy: preserve every position, normal, UV, index, texture,
// source node and material. Byte-verify every decoded geometry buffer.
import { readFile, writeFile, mkdir, realpath } from "node:fs/promises";
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
const input = process.argv[2] ?? "attached_assets/document-camera-original.glb";
const output = "attached_assets/document-camera-web.glb";
const source = await readFile(input);
const jsonLength = source.readUInt32LE(12);
const doc = JSON.parse(source.subarray(20, 20 + jsonLength).toString());
const binary = source.subarray(28 + jsonLength);
const originalByteLength = doc.buffers[0].byteLength;
const chunks = [];
let byteLength = 0,
  verified = 0;
function append(bytes) {
  const padding = (4 - (byteLength % 4)) % 4;
  if (padding) {
    chunks.push(Buffer.alloc(padding));
    byteLength += padding;
  }
  const location = { byteOffset: byteLength, byteLength: bytes.length };
  chunks.push(Buffer.from(bytes));
  byteLength += bytes.length;
  return location;
}
await Promise.all([MeshoptEncoder.ready, MeshoptDecoder.ready]);
for (let index = 0; index < doc.bufferViews.length; index++) {
  const view = doc.bufferViews[index];
  const raw = binary.subarray(
    view.byteOffset ?? 0,
    (view.byteOffset ?? 0) + view.byteLength,
  );
  const accessor = doc.accessors.find((a) => a.bufferView === index);
  if (!accessor) {
    Object.assign(view, append(raw), { buffer: 0 });
    continue;
  }
  const stride =
    view.byteStride ??
    { SCALAR: 1, VEC2: 2, VEC3: 3 }[accessor.type] *
      { 5126: 4, 5125: 4, 5123: 2 }[accessor.componentType];
  if (raw.length !== accessor.count * stride || accessor.byteOffset)
    throw new Error("Unexpected source layout");
  // INDICES preserves even the original index order (not just triangle winding).
  const mode = accessor.type === "SCALAR" ? "INDICES" : "ATTRIBUTES";
  const encoded = MeshoptEncoder.encodeGltfBuffer(
    raw,
    accessor.count,
    stride,
    mode,
  );
  const decoded = new Uint8Array(raw.length);
  MeshoptDecoder.decodeGltfBuffer(
    decoded,
    accessor.count,
    stride,
    encoded,
    mode,
  );
  if (!Buffer.from(decoded).equals(raw))
    throw new Error(`Lossless verification failed: buffer ${index}`);
  verified++;
  view.buffer = 1;
  view.extensions = {
    EXT_meshopt_compression: {
      buffer: 0,
      ...append(encoded),
      byteStride: stride,
      count: accessor.count,
      mode,
    },
  };
}
const extension = "EXT_meshopt_compression";
doc.extensionsUsed = [...new Set([...(doc.extensionsUsed ?? []), extension])];
doc.extensionsRequired = [
  ...new Set([...(doc.extensionsRequired ?? []), extension]),
];
doc.buffers = [
  { byteLength },
  {
    byteLength: originalByteLength,
    extensions: { [extension]: { fallback: true } },
  },
];
const json = Buffer.from(JSON.stringify(doc));
const jsonPadded = Buffer.alloc(Math.ceil(json.length / 4) * 4, 32);
json.copy(jsonPadded);
const binPadded = Buffer.concat([
  ...chunks,
  Buffer.alloc((4 - (byteLength % 4)) % 4),
]);
const header = Buffer.alloc(20);
header.write("glTF");
header.writeUInt32LE(2, 4);
header.writeUInt32LE(28 + jsonPadded.length + binPadded.length, 8);
header.writeUInt32LE(jsonPadded.length, 12);
header.writeUInt32LE(0x4e4f534a, 16);
const binHeader = Buffer.alloc(8);
binHeader.writeUInt32LE(binPadded.length);
binHeader.writeUInt32LE(0x004e4942, 4);
const result = Buffer.concat([header, jsonPadded, binHeader, binPadded]);
await mkdir("attached_assets", { recursive: true });
await writeFile(output, result);
const report = {
  input,
  output,
  originalBytes: source.length,
  bytes: result.length,
  originalSha256: createHash("sha256").update(source).digest("hex"),
  lossless: true,
  verifiedGeometryBuffers: verified,
  meshes: doc.meshes.map((m) => ({
    name: m.name,
    triangles: m.primitives.reduce(
      (s, p) => s + doc.accessors[p.indices].count / 3,
      0,
    ),
  })),
  segmentation:
    "12 source meshes, no semantic rig or joints. Explicit interaction anchors in documentCamera.ts; no automatic articulation.",
};
await writeFile(
  "docs/document-camera-asset.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    bytes: result.length,
    verifiedGeometryBuffers: verified,
    lossless: true,
  }),
);
