export {};
const frame = document.querySelector<HTMLIFrameElement>("iframe")!;
const output = document.querySelector<HTMLPreElement>("#results")!;
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const sizes = [
  [1920, 720],
  [2560, 1080],
  [1440, 640],
  [900, 1200],
  [1024, 768],
  [1280, 720],
  [1366, 768],
  [1440, 900],
  [1728, 1117],
  [1920, 1080],
  [2560, 1440],
  [3440, 1440],
  [3840, 2160],
  [1024, 1366],
];
const failures: string[] = [];
async function run() {
  for (
    let i = 0;
    i < 100 && !frame.contentDocument?.querySelector(".specimen-heading");
    i++
  )
    await pause(100);
  const doc = frame.contentDocument!;
  await doc.fonts.ready;
  for (
    let i = 0;
    i < 150 &&
    doc.querySelector<HTMLElement>(".study-shell")?.dataset.entering !==
      "false";
    i++
  )
    await pause(100);
  const physics = doc.querySelector<HTMLButtonElement>(
    '[data-testid="button-physics-settings"]',
  )!;
  if (physics.getAttribute("aria-expanded") !== "true") physics.click();
  const rect = (selector: string) =>
    doc.querySelector(selector)!.getBoundingClientRect();
  const overlap = (a: DOMRect, b: DOMRect) =>
    Math.min(a.right, b.right) > Math.max(a.left, b.left) + 1 &&
    Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top) + 1;
  for (const specimen of [
    "lotus-root",
    "dried-persimmon",
    "peach",
    "bitter-gourd",
  ]) {
    doc
      .querySelector<HTMLButtonElement>(
        `[data-testid="select-fruit-${specimen}"]`,
      )
      ?.click();
    await pause(50);
    for (
      let i = 0;
      i < 150 &&
      doc.querySelector<HTMLElement>(".study-shell")?.dataset.specimenPhase !==
        "idle";
      i++
    )
      await pause(100);
    for (const [w, h] of sizes) {
      frame.style.width = `${w}px`;
      frame.style.height = `${h}px`;
      await pause(300);
      const local: string[] = [];
      for (const selector of [
        ".specimen-heading",
        ".specimen-caption",
        ".selection",
        ".toolbar",
        ".physics-panel",
      ]) {
        const el = doc.querySelector<HTMLElement>(selector)!;
        if (!el.getClientRects().length) continue;
        const r = el.getBoundingClientRect();
        if (r.left < 0 || r.top < 0 || r.right > w + 1 || r.bottom > h + 1)
          local.push(`${selector} outside viewport (${Math.round(r.bottom)})`);
      }
      if (overlap(rect(".specimen-heading"), rect(".specimen-caption")))
        local.push("title/caption overlap");
      if (overlap(rect(".selection"), rect(".specimen-caption")))
        local.push("nav/caption overlap");
      if (overlap(rect(".toolbar"), rect(".physics-panel")))
        local.push("tools/physics overlap");
      if (doc.documentElement.scrollWidth > w)
        local.push("horizontal overflow");
      output.textContent += `\n${w}×${h} ${specimen}: ${local.length ? local.join(", ") : "PASS"}`;
      failures.push(...local.map((s) => `${w}×${h} ${specimen}: ${s}`));
    }
  }
  output.textContent += `\n${failures.length ? "FAIL " + failures.length : "ALL PASS"}`;
  frame.remove();
}
run().catch((e) => (output.textContent += `\nERROR ${e.message}`));
