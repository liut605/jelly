export {};
const frame = document.querySelector<HTMLIFrameElement>("iframe")!;
const output = document.querySelector<HTMLPreElement>("#results")!;
const mobile = new URLSearchParams(location.search).has("mobile");
frame.style.width = mobile ? "402px" : "1440px";
frame.style.height = mobile ? "874px" : "900px";
const wait = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));
const log = (s: string) => (output.textContent += "\n" + s);
const assert = (condition: unknown, message: string) => {
  if (!condition) throw Error(message);
};
async function until(test: () => boolean) {
  for (let i = 0; i < 180; i++) {
    if (test()) return;
    await wait();
  }
  throw Error("Timed out");
}
async function run() {
  await until(
    () =>
      frame.contentDocument?.querySelector<HTMLElement>(".study-shell")?.dataset
        .entering === "false",
  );
  const doc = frame.contentDocument!,
    win = frame.contentWindow!;
  const el = (selector: string) => doc.querySelector<HTMLElement>(selector)!;
  const btn = (id: string) => el(`[data-testid="${id}"]`) as HTMLButtonElement;
  const visible = (node: HTMLElement) =>
    !!node.getClientRects().length &&
    win.getComputedStyle(node).visibility !== "hidden";
  const click = async (id: string) => {
    btn(id).click();
    await wait();
  };
  await until(() => !btn("button-hand-mode").disabled);
  assert(
    visible(btn("button-zoom-toggle")) === mobile,
    "Combined zoom is mobile only",
  );
  assert(
    visible(btn("button-zoom-in")) === !mobile,
    "Desktop zoom must be directly available",
  );
  if (mobile) await click("button-zoom-toggle");
  assert(
    btn("button-zoom-in").querySelector('[data-zoom-icon="in"]'),
    "Zoom in must use plus",
  );
  assert(
    btn("button-zoom-out").querySelector('[data-zoom-icon="out"]'),
    "Zoom out must use minus",
  );
  const distance = Number(el(".canvas-stage").dataset.cameraTargetDistance);
  await click("button-zoom-in");
  assert(
    Number(el(".canvas-stage").dataset.cameraTargetDistance) < distance,
    "Zoom in failed",
  );
  await click("button-zoom-out");
  assert(
    Math.abs(
      Number(el(".canvas-stage").dataset.cameraTargetDistance) - distance,
    ) < 0.001,
    "Zoom out failed",
  );
  assert(
    btn("button-physics-settings").getAttribute("aria-expanded") ===
      String(!mobile),
    "Desktop Physics should start open, mobile closed",
  );
  if (mobile) await click("button-physics-settings");
  const panel = el(".physics-panel"),
    toolbar = el(".toolbar");
  const p = panel.getBoundingClientRect(),
    t = toolbar.getBoundingClientRect();
  assert(visible(panel), "Physics must open on every device");
  assert(
    mobile
      ? p.top <= t.top && p.bottom >= t.bottom && !visible(toolbar)
      : p.top >= t.bottom + 8 && visible(toolbar),
    "Physics positioning is incorrect",
  );
  const ranges = Array.from(panel.querySelectorAll(".physics-range")).map((e) =>
    e.getBoundingClientRect(),
  );
  assert(
    ranges.every(
      (r, i) =>
        Math.abs(r.left - ranges[0].left) < 1 &&
        (i === 0 || r.top >= ranges[i - 1].bottom),
    ),
    "Physics sliders should be stacked in one column",
  );
  if (!mobile) {
    const minus = btn("button-zoom-out").getBoundingClientRect(),
      plus = btn("button-zoom-in").getBoundingClientRect(),
      label = el(".zoom-row-label").getBoundingClientRect();
    assert(
      minus.right <= label.left + 1 &&
        label.right <= plus.left + 1 &&
        Math.abs(minus.top - plus.top) < 1,
      "Desktop zoom must be minus / Zoom / plus",
    );
  }
  const style = win.getComputedStyle(panel);
  assert(
    style.borderLeftWidth === "0px" &&
      style.borderRightWidth === "0px" &&
      style.borderBottomWidth === "0px",
    "Physics has extra borders",
  );
  assert(
    style.borderTopColor === "rgb(48, 51, 44)" &&
      parseFloat(style.borderTopWidth) > 0 &&
      parseFloat(style.borderTopWidth) <= 1,
    "Physics top rule differs",
  );
  assert(
    /0\.7\)/.test(style.backgroundColor),
    "Physics background must use 70% opacity",
  );
  assert(
    /0\.7\)/.test(win.getComputedStyle(toolbar).backgroundColor),
    "Toolbar background must use 70% opacity",
  );
  el('[aria-label="Close physics settings"]').click();
  await wait();
  assert(
    !visible(panel) && visible(toolbar),
    "Closing Physics must restore controls",
  );
  assert(
    btn("button-physics-settings").getAttribute("aria-pressed") === "false",
    "Closing panel must unpress Physics",
  );
  await click("button-physics-settings");
  assert(
    visible(panel) &&
      btn("button-physics-settings").getAttribute("aria-pressed") === "true",
    "Physics must reopen with pressed state",
  );
  el('[aria-label="Close physics settings"]').click();
  await wait();
  log(
    "Zoom row/icons/actions, stacked Physics, open/close state and surface design PASS",
  );

  const oldTitle = el(".specimen-heading").textContent;
  const observed: string[] = [];
  const observer = new MutationObserver(() =>
    observed.push(el(".study-shell").dataset.specimenPhase!),
  );
  observer.observe(el(".study-shell"), {
    attributes: true,
    attributeFilter: ["data-specimen-phase"],
  });
  if (mobile) btn("button-next-specimen").click();
  else btn("select-fruit-bitter-gourd").click();
  await wait(30);
  assert(
    el(".study-shell").dataset.specimenPhase === "leaving",
    "Old specimen must exit first",
  );
  assert(
    el(".specimen-heading").textContent === oldTitle,
    "Copy swapped before exiting",
  );
  assert(
    win.getComputedStyle(el(".specimen-heading")).animationName ===
      "specimen-copy-exit",
    "Header does not move out",
  );
  assert(
    win.getComputedStyle(el(".specimen-caption")).animationName ===
      "specimen-copy-exit",
    "Body does not move out",
  );
  await until(() => el(".study-shell").dataset.specimenPhase === "entering");
  assert(
    el(".specimen-heading").textContent?.includes("Bitter"),
    "New copy missing",
  );
  assert(
    Number(
      win.getComputedStyle(el(".canvas-stage")).animationDelay.replace("s", ""),
    ) > 0,
    "New jelly should reveal toward end of copy entrance",
  );
  await until(() => el(".study-shell").dataset.specimenPhase === "idle");
  observer.disconnect();
  assert(
    observed.includes("loading") && observed.includes("entering"),
    "Loading/entrance stages missing",
  );
  log(
    "Old header/body exit before replacement; new copy and jelly enter together PASS",
  );

  // Real event handlers and worker; only pointer capture is stubbed for synthetic IDs.
  const canvas = el(".canvas-stage").querySelector("canvas")!;
  canvas.setPointerCapture = () => {};
  canvas.hasPointerCapture = () => false;
  const pointer = (type: string, x: number, y: number) =>
    canvas.dispatchEvent(
      new PointerEvent(type, {
        pointerId: 1,
        pointerType: mobile ? "touch" : "mouse",
        clientX: x,
        clientY: y,
        button: 0,
        buttons: type === "pointerup" ? 0 : 1,
        bubbles: true,
      }),
    );
  await click("button-munch");
  pointer("pointermove", 30, 50);
  await wait();
  const status = el('[data-testid="munch-status"]');
  assert(
    win.getComputedStyle(el(".canvas-stage")).cursor === "none",
    "Munch crosshair still visible",
  );
  assert(
    visible(status) && status.textContent === "Munch",
    "Pointer feedback missing",
  );
  const first = status.getBoundingClientRect();
  pointer("pointermove", 130, 120);
  await wait();
  const second = status.getBoundingClientRect();
  assert(
    second.left > first.left && second.top > first.top,
    "Feedback does not follow pointer",
  );
  pointer("pointerdown", 30, 50);
  pointer("pointerup", 30, 50);
  await until(() => status.textContent === "No jelly within reach.");
  assert(el(".canvas-stage").dataset.biteCount === "0", "Miss changed jelly");
  assert(
    win.getComputedStyle(status).color === "rgb(48, 51, 44)",
    "Feedback does not use design-system ink",
  );
  log(
    "Pointer feedback replaces crosshair; exact miss text; miss preserves jelly PASS",
  );
  const jelly = JSON.parse(el(".canvas-stage").dataset.surfaceScreenBounds!);
  const biteX = (jelly.left + jelly.right) / 2;
  const biteY = (jelly.top + jelly.bottom) / 2 + 20;
  const messages = new MutationObserver(() =>
    log("Bite feedback: " + status.textContent),
  );
  messages.observe(status, { childList: true });
  pointer("pointerdown", biteX, biteY);
  pointer("pointerup", biteX, biteY);
  await until(() => status.textContent === "Yum");
  assert(
    Number(el(".canvas-stage").dataset.biteCount) > 0,
    "Successful feedback without a real bite",
  );
  messages.disconnect();
  log("Real geometry bite reports Yum at the guide PASS");
  log("ALL PASS: " + (mobile ? "mobile" : "desktop"));
  frame.remove();
}
run().catch((error) => log("FAIL: " + error.message));
