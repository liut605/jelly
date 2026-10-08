export {};
const frame = document.querySelector<HTMLIFrameElement>("iframe")!;
const output = document.querySelector<HTMLPreElement>("#results")!;
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function run() {
  for (
    let i = 0;
    i < 100 && !frame.contentDocument?.querySelector(".tea-enter");
    i++
  )
    await pause(100);
  const doc = frame.contentDocument!;
  await doc.fonts.ready;
  let count = 0;
  for (const [w, h] of [
    [1024, 768],
    [1280, 720],
    [1440, 640],
    [1728, 1117],
    [1920, 720],
    [1920, 1080],
    [2560, 1080],
    [2560, 1440],
    [3440, 1440],
    [3840, 2160],
    [1024, 1366],
  ]) {
    frame.style.width = `${w}px`;
    frame.style.height = `${h}px`;
    await pause(250);
    const errors: string[] = [];
    for (const s of [".tea-title", ".tea-enter", ".tea-stage"]) {
      const r = doc.querySelector(s)!.getBoundingClientRect();
      if (r.left < 0 || r.top < 0 || r.right > w + 1 || r.bottom > h + 1)
        errors.push(`${s} outside viewport, bottom ${Math.round(r.bottom)}`);
    }
    if (doc.querySelector(".tea-load-status"))
      errors.push("Unexpected loading message");
    const branches = doc.querySelector<SVGGElement>(
      '[data-testid="tea-branches"]',
    )!;
    branches.focus();
    if (frame.contentWindow!.getComputedStyle(branches).outlineStyle !== "none")
      errors.push("Native branch focus ring remains");
    branches.blur();
    output.textContent += `\n${w}×${h}: ${errors.length ? errors.join(", ") : "PASS"}`;
    count += errors.length;
  }
  output.textContent += `\n${count ? "FAIL " + count : "ALL PASS"}`;
  frame.remove();
}
run().catch((e) => (output.textContent += `\nERROR ${e.message}`));
