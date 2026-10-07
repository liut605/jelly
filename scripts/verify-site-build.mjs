import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(
  await readFile(path.join(root, "vercel.json"), "utf8"),
);
const output = path.join(root, config.outputDirectory);
const html = await readFile(path.join(output, "index.html"), "utf8");
assert(
  html.includes("https://jelly.tsingliu.info/"),
  "Missing production canonical URL",
);
assert(
  !/localhost|127\.0\.0\.1|\/src\/main/.test(html),
  "Development URL leaked into production HTML",
);
const files = [];
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) await walk(p);
    else files.push(p);
  }
}
await walk(output);
assert(
  files.some((p) => /munch\.worker-.*\.js$/.test(p)),
  "Missing bundled Munch worker",
);
assert(
  files.some((p) => p.endsWith(".wasm")),
  "Missing Boolean WASM runtime",
);
for (const asset of [
  /TeaLanding-.*\.js$/,
  /tea-set-web-.*\.glb$/,
  /tea-blossoms-hover-.*\.mp4$/,
  /tea-blossoms-hover-poster-.*\.jpg$/,
  /tea-blossoms-clean-background-.*\.jpg$/,
])
  assert(
    files.some((p) => asset.test(p)),
    `Missing landing asset ${asset}`,
  );
for (const asset of [
  "fonts/fonts.css",
  "favicon.svg",
  "references/bite-mark.svg",
])
  assert((await stat(path.join(output, asset))).size > 0, `Missing ${asset}`);
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const url = match[1];
  if (/^https?:/.test(url)) continue;
  assert(
    (await stat(path.join(output, url.replace(/^\//, "")))).isFile(),
    `Missing HTML asset ${url}`,
  );
}
assert(
  !files.some((p) => {
    const relative = path.relative(output, p);
    return (
      /(^|[\\/])(tests|work)([\\/]|$)/.test(relative) ||
      relative.endsWith(".map")
    );
  }),
  "Development files included in web output",
);
const total = (
  await Promise.all(files.map(async (p) => (await stat(p)).size))
).reduce((a, b) => a + b, 0);
console.log(
  `Production bundle verified: ${files.length} files, ${(total / 1024 / 1024).toFixed(1)} MiB. Worker, WASM, fonts and bite guide present.`,
);
