export {};
const iframe = document.querySelector<HTMLIFrameElement>("iframe")!;
const out = document.querySelector<HTMLPreElement>("#results")!;
const wait = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));
const assert = (condition: boolean, message: string) => {
  if (!condition) throw new Error(message);
};
const log = (message: string) => {
  out.textContent += "\n" + message;
};
async function until(fn: () => boolean) {
  for (let i = 0; i < 150; i++) {
    if (fn()) return;
    await wait(100);
  }
  throw new Error("Scene not ready");
}
async function run() {
  await until(
    () =>
      !!iframe.contentDocument?.querySelector(
        '[data-testid="button-hand-mode"]:not(:disabled)',
      ),
  );
  const doc = iframe.contentDocument!,
    win = iframe.contentWindow!;
  await doc.fonts.ready;
  await until(
    () =>
      doc.querySelector<HTMLElement>(".study-shell")?.dataset.entering ===
      "false",
  );
  const el = (selector: string) => doc.querySelector<HTMLElement>(selector)!;
  const btn = (id: string) => el(`[data-testid="${id}"]`) as HTMLButtonElement;
  const visible = (node: HTMLElement) => !!node.getClientRects().length;
  const bounds = (selector: string, w: number, h: number) => {
    const r = el(selector).getBoundingClientRect();
    assert(
      r.left >= -1 && r.top >= -1 && r.right <= w + 1 && r.bottom <= h + 1,
      `${selector} clipped at ${w}×${h}`,
    );
  };
  for (const [w, h] of [
    [320, 568],
    [375, 667],
    [390, 844],
    [402, 874],
    [430, 932],
    [600, 900],
    [760, 1024],
    [844, 390],
  ]) {
    iframe.style.width = w + "px";
    iframe.style.height = h + "px";
    await wait(250);
    assert(!visible(el(".selection")), "Mobile catalog should be hidden");
    for (const selector of [
      ".specimen-heading",
      ".specimen-next",
      ".specimen-caption",
      ".toolbar",
    ])
      bounds(selector, w, h);
    assert(
      !btn("button-next-specimen").textContent?.includes("Gourd"),
      "Next previews a specimen",
    );
    const before = el(".toolbar").getBoundingClientRect();
    const originalScale = el('[data-testid="canvas-stage"]').dataset
      .specimenScale;

    btn("button-zoom-toggle").click();
    await wait();
    assert(
      btn("button-zoom-toggle").getAttribute("aria-expanded") === "true",
      "Zoom did not expand",
    );
    bounds(".zoom-controls", w, h);
    assert(
      el(".zoom-controls").getBoundingClientRect().bottom < before.top,
      "Zoom must remain above the toolbar",
    );
    assert(
      el('[data-testid="canvas-stage"]').dataset.specimenScale ===
        originalScale,
      "Opening Zoom must not resize jelly",
    );
    assert(
      Math.abs(el(".toolbar").getBoundingClientRect().top - before.top) < 1,
      "Zoom moved toolbar",
    );
    const stage = el('[data-testid="canvas-stage"]');
    const distance = Number(stage.dataset.cameraTargetDistance);
    btn("button-zoom-in").click();
    await wait(300);
    assert(
      Number(stage.dataset.cameraTargetDistance) < distance,
      "Zoom in failed",
    );
    assert(
      el(".zoom-controls").getBoundingClientRect().bottom < before.top,
      "Zoom must remain above the toolbar",
    );
    assert(
      el('[data-testid="canvas-stage"]').dataset.specimenScale ===
        originalScale,
      "Opening Zoom must not resize jelly",
    );
    btn("button-zoom-out").click();
    await wait(300);
    assert(
      Math.abs(Number(stage.dataset.cameraTargetDistance) - distance) < 0.01,
      "Zoom out failed",
    );
    doc.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
    await wait();
    assert(!visible(el(".zoom-controls")), "Escape did not close Zoom");
    btn("button-physics-settings").click();
    await wait();
    bounds(".physics-panel", w, h);
    const panel = el(".physics-panel").getBoundingClientRect();
    assert(
      panel.left <= before.left + 1 &&
        panel.right >= before.right - 1 &&
        panel.top <= before.top + 1 &&
        panel.bottom >= before.bottom - 1,
      "Physics must cover the full toolbar",
    );
    assert(
      win.getComputedStyle(el(".toolbar")).visibility === "hidden",
      "Covered toolbar must not be visible or interactive",
    );
    assert(
      el('[data-testid="canvas-stage"]').dataset.specimenScale ===
        originalScale,
      "Opening Physics must not resize jelly",
    );
    assert(visible(el(".physics-panel")), "Physics did not open");
    el('[aria-label="Close physics settings"]').click();
    await wait();
    assert(!visible(el(".physics-panel")), "Physics did not close");
    assert(doc.documentElement.scrollWidth <= w, "Horizontal overflow");
    log(`${w}×${h}: layout, zoom and Physics PASS`);
  }
  iframe.style.width = "402px";
  iframe.style.height = "874px";
  await wait(250);
  const expected = [
    "Reset",
    "Physics",
    "Zoom",
    "Rotate",
    "Hand",
    "Munch",
    "Slow",
    "Wiggle",
  ];
  const labels = Array.from(
    doc.querySelectorAll(
      ".toolbar > .tool-button > span, .toolbar > .tool-zoom > .tool-button > span",
    ),
  ).map((x) => x.textContent);
  assert(
    JSON.stringify(labels) === JSON.stringify(expected),
    "Toolbar order differs from reference",
  );
  btn("button-physics-settings").click();
  await wait();
  const firmness = el("#firmness-control") as HTMLInputElement;
  Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    "value",
  )!.set!.call(firmness, "62");
  firmness.dispatchEvent(new Event("input", { bubbles: true }));
  await wait();
  assert(
    el('label[for="firmness-control"] output').textContent === "62",
    "Test slider did not update",
  );
  el('[aria-label="Close physics settings"]').click();
  for (const title of [
    "Bitter Gourd",
    "Stuffed Lotus Root",
    "Dried Persimmon",
    "Longevity Peach",
  ]) {
    btn("button-next-specimen").click();
    await until(() =>
      el(".specimen-heading").getAttribute("aria-label")!.startsWith(title),
    );
    await until(
      () =>
        !btn("button-hand-mode").disabled &&
        el(".study-shell").dataset.specimenPhase === "idle",
    );
    assert(
      (el("#firmness-control") as HTMLInputElement).value === "62",
      "Next reset physics",
    );
    bounds(".specimen-heading", 402, 874);
    bounds(".specimen-caption", 402, 874);
    log(`Next → ${title}: settings preserved`);
  }
  log("ALL PASS");
  iframe.remove();
}
run().catch((error) => log("FAIL: " + error.message));
