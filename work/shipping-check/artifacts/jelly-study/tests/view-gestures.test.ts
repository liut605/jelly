import assert from "node:assert/strict";
import { test } from "node:test";
import {
  twoFingerGesture,
  wheelViewGesture,
} from "../src/scene/viewGestures.ts";
const p = (x: number, y: number) => ({ x, y });
test("two-finger spread zooms in and centroid translation orbits independently", () => {
  const g = twoFingerGesture([p(0, 0), p(100, 0)], [p(-25, 20), p(125, 20)])!;
  assert.equal(g.zoomRatio, 2 / 3);
  assert.equal(g.dx, 0);
  assert.equal(g.dy, 20);
  assert.equal(g.twist, 0);
  const translation = twoFingerGesture(
    [p(0, 0), p(100, 0)],
    [p(30, 40), p(130, 40)],
  )!;
  assert.equal(translation.zoomRatio, 1);
  assert.equal(translation.dx, 30);
  assert.equal(translation.dy, 40);
});
test("twisting wraps across +/-180 degrees without a full-turn jump", () => {
  const g = twoFingerGesture([p(0, 0), p(-100, 1)], [p(0, 0), p(-100, -1)])!;
  assert(Math.abs(g.twist) < 0.03);
  assert.equal(g.zoomRatio, 1);
  assert.equal(twoFingerGesture([p(0, 0)], [p(5, 0)]), null);
  assert.equal(twoFingerGesture([p(0, 0), p(0, 0)], [p(1, 0), p(2, 0)]), null);
});
test("trackpad pinch changes distance only; scrolling orbits with bounded deltas", () => {
  const pinch = wheelViewGesture(10, -20, 0, true);
  assert(pinch.zoomRatio < 1);
  assert.equal(pinch.dx, 0);
  assert.equal(pinch.dy, 0);
  const scroll = wheelViewGesture(20, 10, 0, false);
  assert.equal(scroll.zoomRatio, 1);
  assert.equal(scroll.dx, 14);
  assert.equal(scroll.dy, 7);
  assert.equal(wheelViewGesture(1, 2, 1, false).dy, 22.4);
  assert(wheelViewGesture(10000, 10000, 2, false).dy <= 70);
});
