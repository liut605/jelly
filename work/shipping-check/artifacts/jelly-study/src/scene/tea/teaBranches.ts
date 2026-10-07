/** Source-video coordinates, after removing its 8px top/bottom letterbox. */
export const BLOSSOM_WIDTH = 1920;
export const BLOSSOM_HEIGHT = 1064;

// Corridors follow the actual branches, rather than a rectangular hover area.
// The generous stroke also includes their flowers and slight video movement.
export const BRANCH_PATHS = [
  "M 1950 260 Q 1770 345 1600 427 Q 1400 530 1280 580 Q 1200 625 1125 625",
  "M 1395 532 Q 1270 577 1120 542 Q 965 510 850 425 L 775 377",
  "M 1130 579 Q 1035 602 970 552",
  "M 1280 554 Q 1210 484 1200 408 L 1152 330",
  "M 1180 528 Q 1122 466 1085 414",
  "M 1615 420 Q 1550 358 1496 251 L 1445 176",
  "M 1530 462 Q 1400 406 1300 310",
  "M 1895 280 Q 1790 236 1700 211",
  "M 1860 333 Q 1800 430 1770 493 L 1638 616",
  "M 1770 493 L 1770 568",
  "M 1582 447 Q 1560 548 1510 650",
  "M 1440 521 Q 1370 620 1255 683",
];

const smoothstep = (low: number, high: number, value: number) => {
  const t = Math.max(0, Math.min(1, (value - low) / (high - low)));
  return t * t * (3 - 2 * t);
};

/** A transition-only, current-frame matte. Retains the decorative strip,
 * branches, and red blossoms/petals as one foreground group. It is deliberately
 * not presented as independently tracked branches or a transparent source video.
 * The original, unmodified footage remains visible during normal playback. */
export function paintBlossomCutout(
  source: CanvasImageSource,
  canvas: HTMLCanvasElement,
  cleanBackground: HTMLImageElement | null,
): boolean {
  const width = 1280;
  const height = Math.round((width * BLOSSOM_HEIGHT) / BLOSSOM_WIDTH);
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return false;
  try {
    context.drawImage(source, 0, 0, width, height);
    const pixels = context.getImageData(0, 0, width, height);
    let background: Uint8ClampedArray | null = null;
    if (cleanBackground?.complete && cleanBackground.naturalWidth > 0) {
      context.drawImage(cleanBackground, 0, 0, width, height);
      background = context.getImageData(0, 0, width, height).data;
    }
    const mask = document.createElement("canvas");
    mask.width = width;
    mask.height = height;
    const pen = mask.getContext("2d")!;
    pen.scale(width / BLOSSOM_WIDTH, height / BLOSSOM_HEIGHT);
    pen.lineCap = "round";
    pen.lineJoin = "round";
    pen.lineWidth = 90;
    pen.strokeStyle = "white";
    for (const path of BRANCH_PATHS) pen.stroke(new Path2D(path));
    const corridors = pen.getImageData(0, 0, width, height).data;
    const data = pixels.data;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        const r = data[i] / 255,
          g = data[i + 1] / 255,
          b = data[i + 2] / 255;
        const red =
          smoothstep(0.065, 0.17, r - g) * smoothstep(0.08, 0.2, r - b);
        const luma = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const bgR = background ? background[i] / 255 : 0.85;
        const bgG = background ? background[i + 1] / 255 : 0.83;
        const bgB = background ? background[i + 2] / 255 : 0.76;
        const difference = Math.max(
          Math.abs(r - bgR),
          Math.abs(g - bgG),
          Math.abs(b - bgB),
        );
        const branch =
          (corridors[i + 3] / 255) *
          smoothstep(0.07, 0.2, difference) *
          (1 - smoothstep(0.5, 0.73, luma));
        const sourceX = (x * BLOSSOM_WIDTH) / width;
        const strip =
          smoothstep(1401, 1407, sourceX) *
          (1 - smoothstep(1668, 1680, sourceX));
        const alpha = Math.max(red, branch, strip);
        data[i + 3] = Math.round(255 * alpha);
        // Remove the original cream wall from semi-transparent edge pixels.
        // This avoids pale fringes when the isolated artwork crosses the wall.
        if (background && alpha > 0.01 && alpha < 1) {
          data[i] = Math.round(
            255 * Math.max(0, Math.min(1, (r - (1 - alpha) * bgR) / alpha)),
          );
          data[i + 1] = Math.round(
            255 * Math.max(0, Math.min(1, (g - (1 - alpha) * bgG) / alpha)),
          );
          data[i + 2] = Math.round(
            255 * Math.max(0, Math.min(1, (b - (1 - alpha) * bgB) / alpha)),
          );
        }
      }
    }
    context.putImageData(pixels, 0, 0);
    return true;
  } catch {
    // Unavailable media must not block entry; the background simply fades.
    return false;
  }
}
