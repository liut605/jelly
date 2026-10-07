/** View gestures are independent of the currently selected jelly tool. */
export interface TouchPoint {
  x: number;
  y: number;
}
export interface ViewGesture {
  dx: number;
  dy: number;
  twist: number;
  zoomRatio: number;
}
export function twoFingerGesture(
  before: TouchPoint[],
  after: TouchPoint[],
): ViewGesture | null {
  if (before.length < 2 || after.length < 2) return null;
  const [a, b] = before,
    [c, d] = after;
  const oldDistance = Math.hypot(b.x - a.x, b.y - a.y),
    newDistance = Math.hypot(d.x - c.x, d.y - c.y);
  if (oldDistance < 8 || newDistance < 8) return null;
  const angle =
    Math.atan2(d.y - c.y, d.x - c.x) - Math.atan2(b.y - a.y, b.x - a.x);
  return {
    dx: (c.x + d.x - a.x - b.x) / 2,
    dy: (c.y + d.y - a.y - b.y) / 2,
    twist: Math.atan2(Math.sin(angle), Math.cos(angle)),
    zoomRatio: oldDistance / newDistance,
  };
}
export function wheelViewGesture(
  dx: number,
  dy: number,
  deltaMode: number,
  pinch: boolean,
): ViewGesture {
  const unit = deltaMode === 1 ? 16 : deltaMode === 2 ? 240 : 1;
  // Ctrl-wheel is the pinch signal on Chromium/Firefox trackpads. Two-finger
  // scrolling or a mouse wheel orbits; buttons remain an alternate zoom path.
  return pinch
    ? {
        dx: 0,
        dy: 0,
        twist: 0,
        zoomRatio: Math.exp(Math.max(-0.3, Math.min(0.3, dy * unit * 0.008))),
      }
    : {
        dx: Math.max(-100, Math.min(100, dx * unit)) * 0.7,
        dy: Math.max(-100, Math.min(100, dy * unit)) * 0.7,
        twist: 0,
        zoomRatio: 1,
      };
}
