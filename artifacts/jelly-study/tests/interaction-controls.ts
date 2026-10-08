const out = document.querySelector<HTMLPreElement>("#results")!,
  iframe = document.querySelector<HTMLIFrameElement>("iframe")!;
const mobile = new URLSearchParams(location.search).has("mobile");
iframe.style.width = mobile ? "390px" : "1280px";
iframe.style.height = mobile ? "844px" : "720px";
const log = (s: string) => {
  out.textContent += "\n" + s;
};
const assert = (c: boolean, s: string) => {
  if (!c) throw new Error(s);
};
const wait = (ms = 150) => new Promise<void>((r) => setTimeout(r, ms));
async function until(f: () => boolean) {
  for (let i = 0; i < 80; i++) {
    if (f()) return;
    await wait(100);
  }
  throw new Error("Timed out waiting for test scene");
}
async function run() {
  await until(
    () =>
      !!iframe.contentDocument?.querySelector(
        '[data-testid="button-hand-mode"]:not(:disabled)',
      ),
  );
  const doc = iframe.contentDocument!,
    win = iframe.contentWindow!,
    stage = doc.querySelector<HTMLElement>('[data-testid="canvas-stage"]')!,
    canvas = stage.querySelector("canvas")!;
  // Synthetic touch IDs cannot use the browser's native capture API. Emulate
  // only capture bookkeeping; all view/physics handlers are the real app handlers.
  const capture = new Set<number>();
  canvas.setPointerCapture = (id) => {
    capture.add(id);
  };
  canvas.hasPointerCapture = (id) => capture.has(id);
  canvas.releasePointerCapture = (id) => {
    capture.delete(id);
  };
  const button = (id: string) =>
    doc.querySelector<HTMLButtonElement>(`[data-testid="${id}"]`)!;
  const click = async (id: string) => {
    button(id).click();
    await wait();
  };
  const pointer = (type: string, id: number, x: number, y: number) =>
    canvas.dispatchEvent(
      new PointerEvent(type, {
        pointerId: id,
        pointerType: "touch",
        clientX: x,
        clientY: y,
        button: 0,
        buttons: type === "pointerup" ? 0 : 1,
        bubbles: true,
        cancelable: true,
      }),
    );
  const state = () => ({
    yaw: Number(stage.dataset.cameraYaw),
    pitch: Number(stage.dataset.cameraPitch),
    distance: Number(stage.dataset.cameraTargetDistance),
  });
  const unchanged = (a: ReturnType<typeof state>, b = state()) =>
    Math.abs(a.yaw - b.yaw) < 1e-5 &&
    Math.abs(a.pitch - b.pitch) < 1e-5 &&
    Math.abs(a.distance - b.distance) < 1e-4;
  await until(() => !!stage.dataset.cameraDistance);
  await wait(800);
  assert(
    !button("button-pause-simulation") && !button("button-export"),
    "Removed controls still exist",
  );
  assert(
    !doc.querySelector('[data-testid="text-simulation-status"]'),
    "Simulation badge still exists",
  );
  const initial = state();
  pointer("pointerdown", 1, 40, 230);
  pointer("pointermove", 1, 110, 270);
  pointer("pointerup", 1, 110, 270);
  await wait();
  assert(unchanged(initial), "Hand rotated the empty background");
  log("Hand: empty-space drag does not orbit");
  const x = mobile ? 190 : 790,
    y = mobile ? 445 : 420;
  pointer("pointerdown", 2, x, y);
  assert(stage.dataset.grabbing === "true", "Hand could not grab jelly");
  pointer("pointerdown", 3, x + 80, y);
  assert(
    stage.dataset.grabbing === "false",
    "Second finger did not release physical grab",
  );
  pointer("pointermove", 2, x - 25, y);
  pointer("pointermove", 3, x + 105, y);
  await wait(650);
  assert(
    state().distance < initial.distance - 0.1,
    "Two-finger pinch did not zoom",
  );
  pointer("pointermove", 2, x + 5, y + 20);
  pointer("pointermove", 3, x + 135, y + 20);
  await wait();
  assert(
    Math.abs(state().yaw - initial.yaw) > 0.05,
    "Two-finger drag did not rotate",
  );
  pointer("pointerup", 3, x + 135, y + 20);
  await wait(800);
  const released = state();
  pointer("pointermove", 2, x + 60, y + 60);
  pointer("pointerup", 2, x + 60, y + 60);
  await wait();
  assert(unchanged(released), "Remaining finger inherited a gesture");
  log(
    "Touch: simultaneous pinch/orbit, grab takeover and finger-release safety PASS",
  );
  await click("button-rotate-mode");
  const beforeOrbit = state();
  pointer("pointerdown", 4, x, y);
  assert(stage.dataset.grabbing !== "true", "Rotate grabbed jelly");
  pointer("pointermove", 4, x + 50, y + 10);
  pointer("pointerup", 4, x + 50, y + 10);
  await wait();
  assert(
    Math.abs(state().yaw - beforeOrbit.yaw) > 0.1,
    "Rotate tool did not orbit",
  );
  log("Rotate: single-finger drag changes view without grabbing");
  await click("button-hand-mode");
  const wheel = (dx: number, dy: number, ctrl = false) =>
    canvas.dispatchEvent(
      new WheelEvent("wheel", {
        deltaX: dx,
        deltaY: dy,
        ctrlKey: ctrl,
        bubbles: true,
        cancelable: true,
      }),
    );
  const preWheel = state();
  wheel(30, 15);
  await wait();
  assert(
    state().yaw > preWheel.yaw + 0.05,
    "Trackpad scroll did not reverse to match mobile",
  );
  wheel(0, 30, true);
  await wait(850);
  const zoomed = state();
  assert(zoomed.distance > preWheel.distance, "Trackpad pinch did not zoom");
  if (mobile) await click("button-zoom-toggle");
  await click("button-zoom-in");
  await wait(850);
  assert(
    Math.abs(state().distance - (zoomed.distance - 0.38)) < 0.02,
    "Zoom button jumped after gesture",
  );
  const native = (type: string, scale: number, rotation: number) => {
    const e = new Event(type, { cancelable: true });
    Object.assign(e, { scale, rotation });
    canvas.dispatchEvent(e);
  };
  const preNative = state();
  native("gesturestart", 1, 0);
  native("gesturechange", 1.1, 12);
  wheel(0, 30, true);
  native("gestureend", 1.1, 12);
  await wait(850);
  assert(
    Math.abs(state().distance - preNative.distance / 1.1) < 0.02,
    "Native Safari pinch duplicated or failed",
  );
  assert(
    Math.abs(state().yaw - preNative.yaw) > 0.1,
    "Native Safari twist failed",
  );
  log(
    "Trackpad: scroll orbit, pinch zoom, native Safari gesture path and relative +/- PASS",
  );
  await click("button-munch");
  pointer("pointerdown", 5, x, y);
  pointer("pointerdown", 6, x + 90, y);
  pointer("pointermove", 6, x + 100, y);
  pointer("pointerup", 6, x + 100, y);
  pointer("pointerup", 5, x, y);
  await wait(600);
  assert(
    stage.dataset.biteCount === "0",
    "Two-finger Munch gesture took an unintended bite",
  );
  log("Munch: two-finger navigation never executes a bite");
  await click("button-hand-mode");
  pointer("pointerdown", 7, 40, 230);
  pointer("pointercancel", 7, 40, 230);
  assert(capture.size === 0, "Cancelled pointer retained capture");
  await until(
    () =>
      win.getComputedStyle(button("button-hand-mode")).color ===
      "rgb(109, 27, 24)",
  );
  const styles = win.getComputedStyle(button("button-hand-mode"));
  assert(styles.color === "rgb(109, 27, 24)", "Active text wrong color");
  assert(
    styles.backgroundColor === "rgba(0, 0, 0, 0)",
    "Active background highlighted",
  );
  const idle = win.getComputedStyle(button("button-rotate-mode"));
  assert(idle.color === "rgba(48, 51, 44, 0.6)", "Inactive text wrong opacity");
  log("Design: muted #30332C, active #6D1B18, no background highlight PASS");
  log("PASS: " + (mobile ? "phone-size" : "desktop") + " control suite");
  document.body.dataset.result = "pass";
}
run().catch((e) => {
  log("FAIL: " + e);
  document.body.dataset.result = "fail";
});
