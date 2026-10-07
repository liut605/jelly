import * as THREE from "three";
import { DEFAULT_SOFT_BODY_SETTINGS } from "../src/scene/softBodySettings";
import { specimens, type SpecimenId } from "../src/scene/specimens";
import {
  createGpuSoftBody,
  PEACH_FLOOR,
  GRAVITY_ACCELERATION,
  type SoftBodySettings,
} from "../src/scene/softBodyGpu";
import {
  frameSpecimen,
  createPlayBounds,
  setPlayViewport,
  MIN_ZOOM_DISTANCE,
} from "../src/scene/framing";
const requestedSpecimen = new URLSearchParams(location.search).get("specimen");
const specimen =
  specimens[
    (requestedSpecimen && requestedSpecimen in specimens
      ? requestedSpecimen
      : "peach") as SpecimenId
  ];
const shakeOnly = new URLSearchParams(location.search).get("phase") === "shake";
const wallsOnly = new URLSearchParams(location.search).get("phase") === "walls";
const output = document.querySelector<HTMLPreElement>("#results")!;
const lines: string[] = [];
const log = (s: string): void => {
  lines.push(s);
  output.textContent = lines.join("\n");
};
// Yield to the UI without background-tab timer throttling changing test duration.
const frame = (): Promise<void> =>
  new Promise((resolve) => {
    const channel = new MessageChannel();
    channel.port1.onmessage = () => {
      channel.port1.close();
      channel.port2.close();
      resolve();
    };
    channel.port2.postMessage(null);
  });
const assert = (condition: boolean, message: string): void => {
  if (!condition) throw new Error(message);
};
async function run(): Promise<void> {
  const renderer = new THREE.WebGLRenderer();
  const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
    specimen.create();
  const body = createGpuSoftBody(
    renderer,
    geometry,
    sourcePositions,
    rings,
    sides,
    volumeSourcePositions,
    specimen.map,
  );
  const settings: SoftBodySettings = {
    firmness: 60,
    damping: 45,
    handStrength: 60,
    paused: false,
    slowMotion: false,
    gravity: false,
  };
  let peakVolumeError = 0,
    minimumElementRatio = 1,
    peakEdgeRatio = 1;
  const inspect = (): ReturnType<typeof body.diagnostics> => {
    const d = body.diagnostics();
    assert(Object.values(d).every(Number.isFinite), "Non-finite GPU state");
    peakVolumeError = Math.max(peakVolumeError, Math.abs(d.volumeRatio - 1));
    minimumElementRatio = Math.min(minimumElementRatio, d.minVolumeRatio);
    peakEdgeRatio = Math.max(peakEdgeRatio, d.maxEdgeRatio);
    assert(d.minimumY >= PEACH_FLOOR - 1e-4, `Floor penetration ${d.minimumY}`);
    assert(
      Math.abs(d.volumeRatio - 1) < 0.05,
      `Volume error ${JSON.stringify(d)}`,
    );
    assert(d.minVolumeRatio > 0, `Inverted tetrahedron ${JSON.stringify(d)}`);
    const bounds = body.getSurfaceBounds();
    body.syncSurfaceForRaycast();
    const surface = geometry.getAttribute("position");
    for (let i = 0; i < surface.count; i++)
      assert(
        bounds.containsPoint(
          new THREE.Vector3().fromBufferAttribute(surface, i),
        ),
        "Visible skin escaped its camera-framing bounds",
      );
    assert(d.maxEdgeRatio < 4, `Excessive edge strain ${JSON.stringify(d)}`);
    return d;
  };
  const advance = async (
    seconds: number,
  ): Promise<ReturnType<typeof inspect>> => {
    const steps = Math.round(seconds * 120);
    for (let i = 0; i < steps; i += 24) {
      for (let j = 0; j < Math.min(24, steps - i); j++)
        body.step(1 / 120, settings);
      inspect();
      await frame();
    }
    return inspect();
  };
  const positions = (): Float32Array => {
    body.syncSurfaceForRaycast();
    return new Float32Array(geometry.getAttribute("position").array);
  };
  const grabAt = (vertex: number): THREE.Vector3 => {
    const p = positions();
    const point = new THREE.Vector3().fromArray(p, vertex * 3);
    body.beginGrab(point, [vertex], new THREE.Vector3(1, 0, 0));
    return point;
  };
  try {
    output.textContent = "";
    log(
      `GPU ${specimen.label} volume: ${body.topology.nodeCount} nodes / ${body.topology.tetraRestVolumes.length} tetrahedra / ${sourcePositions.length / 3} visible vertices.`,
    );
    if (shakeOnly) {
      Object.assign(settings, DEFAULT_SOFT_BODY_SETTINGS, { gravity: true });
      await advance(1);
      const initial = positions();
      const center = (p: Float32Array): THREE.Vector3 => {
        const c = new THREE.Vector3();
        for (let i = 0; i < p.length; i += 3)
          c.add(new THREE.Vector3().fromArray(p, i));
        return c.multiplyScalar(3 / p.length);
      };
      const initialCenter = center(initial);
      const initialY = inspect().centerY;
      let peakWiggle = 0,
        peakTravel = 0,
        peakLift = 0,
        peakStrain = 0;
      let reversals = 0,
        sign = 0;
      body.triggerShake();
      for (let i = 0; i < 120; i++) {
        body.step(1 / 120, settings);
        if (i % 3 !== 0) continue;
        const d = inspect();
        const p = positions(),
          c = center(p),
          travel = c.clone().sub(initialCenter);
        let squared = 0,
          squeeze = 0;
        for (let j = 0; j < p.length; j += 3) {
          const dx = p[j] - initial[j] - travel.x;
          const dy = p[j + 1] - initial[j + 1] - travel.y;
          const dz = p[j + 2] - initial[j + 2] - travel.z;
          squared += dx * dx + dy * dy + dz * dz;
          squeeze +=
            dx * (initial[j] - initialCenter.x) -
            dz * (initial[j + 2] - initialCenter.z);
        }
        squeeze *= 3 / p.length;
        if (Math.abs(squeeze) > 0.0005) {
          const nextSign = Math.sign(squeeze);
          if (sign && nextSign !== sign) reversals++;
          sign = nextSign;
        }
        peakWiggle = Math.max(peakWiggle, Math.sqrt((squared * 3) / p.length));
        peakTravel = Math.max(peakTravel, travel.length());
        peakLift = Math.max(peakLift, d.centerY - initialY);
        peakStrain = Math.max(peakStrain, d.maxEdgeRatio - 1);
        await frame();
      }
      log(
        `Shake: internal motion ${peakWiggle.toFixed(4)}, travel ${peakTravel.toFixed(4)}, lift ${peakLift.toFixed(4)}, edge strain ${peakStrain.toFixed(3)}, reversals ${reversals}`,
      );
      assert(
        peakWiggle > 0.012 && peakStrain > 0.02,
        "Shake did not deform the jelly visibly",
      );
      assert(
        peakTravel < 0.03 && peakLift < 0.02,
        "Shake launched or translated the whole slice",
      );
      assert(reversals >= 2, "Shake did not wiggle back and forth");
      const settled = await advance(3);
      assert(
        settled.maxSpeed < 0.04 && settled.centerSpeed < 0.01,
        "Shake did not settle",
      );
      log("PASS opposed deformation, little bulk movement, natural settling");
      body.triggerShake();
      await advance(0.1);
      settings.paused = true;
      const paused = positions();
      await advance(0.5);
      assert(
        positions().every((v, i) => v === paused[i]),
        "Pause did not freeze the shake burst",
      );
      settings.paused = false;
      await advance(0.7);
      log("PASS Pause during Shake and resume");
      for (let i = 0; i < 24; i++) {
        body.triggerShake();
        await advance(0.05);
      }
      const repeated = await advance(3);
      assert(
        repeated.maxSpeed < 0.04 && repeated.centerSpeed < 0.01,
        "Repeated Shake did not settle",
      );
      log("PASS 24 rapid Shake requests without stacking or instability");
      settings.gravity = false;
      body.reset();
      const freeStart = center(positions());
      body.triggerShake();
      await advance(1);
      const freeTravel = center(positions()).distanceTo(freeStart);
      assert(freeTravel < 0.004, `Zero-gravity Shake drifted: ${freeTravel}`);
      log(`PASS zero-gravity balance: travel ${freeTravel.toFixed(5)}`);
      body.triggerShake();
      await advance(0.1);
      body.reset();
      assert(
        positions().every((v, i) => Math.abs(v - sourcePositions[i]) < 1e-6),
        "Reset during Shake changed source shape",
      );
      await advance(0.5);
      assert(inspect().maxSpeed < 0.001, "Reset left a Shake burst active");
      log("PASS Reset cancels Shake");
      body.reset();
      body.triggerShake();
      await advance(0.15);
      const normalTiming = positions();
      body.reset();
      settings.slowMotion = true;
      body.triggerShake();
      // 76 display steps at 24% speed contain the same 18 fixed physics steps.
      await advance(76 / 120);
      const timingError = positions().reduce(
        (error, v, i) => Math.max(error, Math.abs(v - normalTiming[i])),
        0,
      );
      assert(
        timingError < 1e-6,
        `Slow motion changed the Shake force instead of its timing: ${timingError}`,
      );
      log("PASS Slow motion preserves the same physics at 24% speed");
      log(
        `PASS SHAKE · max volume error ${(peakVolumeError * 100).toFixed(2)}% · minimum signed element ratio ${minimumElementRatio.toFixed(4)} · peak edge ratio ${peakEdgeRatio.toFixed(3)}`,
      );
      document.body.dataset.result = "passed";
      return;
    }
    if (!wallsOnly) {
      log("Testing idle volume and shape…");
      await advance(2);
      const idle = positions();
      let drift = 0;
      for (let i = 0; i < idle.length; i++)
        drift = Math.max(drift, Math.abs(idle[i] - sourcePositions[i]));
      assert(drift < 0.002, `Idle drift ${drift}`);
      log(`PASS idle: drift ${drift.toExponential(3)}`);
      const vertex = 40 * (sides + 1) + 36;
      const displacements: number[] = [];
      for (const strength of [0, 60, 100]) {
        body.reset();
        settings.handStrength = strength;
        const start = grabAt(vertex);
        body.moveGrab(start.clone().add(new THREE.Vector3(0.55, 0.2, 0)));
        await advance(0.4);
        const after = new THREE.Vector3().fromArray(positions(), vertex * 3);
        displacements.push(after.distanceTo(start));
        body.endGrab();
      }
      assert(displacements[0] < 0.002, "Hand strength zero still pulled");
      assert(
        displacements[2] > displacements[1] * 1.05 && displacements[1] > 0.01,
        `Hand strength not effective: ${displacements}`,
      );
      log(
        `PASS Hand strength 0/60/100: displacement ${displacements.map((v) => v.toFixed(4)).join(" / ")}`,
      );
      body.reset();
      settings.handStrength = 60;
      settings.gravity = true;
      const gravityDrops: number[] = [];
      for (const gravity of [0, 100, 200]) {
        body.reset();
        settings.gravityStrength = gravity;
        const before = inspect().centerY;
        await advance(0.08);
        gravityDrops.push(before - inspect().centerY);
      }
      assert(
        Math.abs(gravityDrops[0]) < 0.0001 &&
          gravityDrops[1] > 0.01 &&
          Math.abs(gravityDrops[2] / gravityDrops[1] - 2) < 0.03,
        `Gravity slider failed: ${gravityDrops}`,
      );
      log(
        `PASS Gravity 0× / 1× / 2×: fall ${gravityDrops.map((x) => x.toFixed(4)).join(" / ")}`,
      );
      const steps = Math.round(0.08 * 120);
      const expectedFall =
        (GRAVITY_ACCELERATION * (1 / 120) ** 2 * steps * (steps + 1)) / 2;
      assert(
        Math.abs(gravityDrops[1] / expectedFall - 1) < 0.02,
        `Default gravity does not track 9.81 acceleration: ${gravityDrops[1]} vs ${expectedFall}`,
      );
      settings.gravityStrength = 100;
      const frameRateFalls: number[] = [];
      for (const fps of [120, 60, 30, 20]) {
        body.reset();
        const initial = inspect().centerY;
        for (let frame = 0; frame < Math.round(0.1 * fps); frame++)
          body.step(1 / fps, settings);
        frameRateFalls.push(initial - inspect().centerY);
      }
      assert(
        Math.max(...frameRateFalls) - Math.min(...frameRateFalls) < 0.001,
        `Gravity depends on display frame rate: ${frameRateFalls}`,
      );
      log(
        `PASS gravity at 120 / 60 / 30 / 20 fps: ${frameRateFalls.map((v) => v.toFixed(4)).join(" / ")}`,
      );
      body.reset();
      log("Testing drop and rebound…");
      let downward = false,
        rebound = false;
      let peakRebound = 0;
      // A firm, thin slice can rebound between 10 Hz samples. Measure each
      // solver step so this checks the collision response rather than aliasing it.
      for (let i = 0; i < 360; i++) {
        body.step(1 / 120, settings);
        const d = body.diagnostics();
        if (d.centerVelocityY < -0.2) downward = true;
        if (downward) peakRebound = Math.max(peakRebound, d.centerVelocityY);
        if (downward && d.centerVelocityY > 0.08) rebound = true;
        if (i % 24 === 0) {
          inspect();
          await frame();
        }
      }
      assert(
        downward && rebound,
        `Drop did not produce a measured rebound (peak ${peakRebound}): ${JSON.stringify(inspect())}`,
      );
      log(
        `PASS gravity, floor contact, and rebound: peak upward speed ${peakRebound.toFixed(3)}`,
      );
      Object.assign(settings, DEFAULT_SOFT_BODY_SETTINGS);
      body.reset();
      await advance(0.6);
      log("Testing defaults: firmness 45, damping 0, hand 100, gravity 1.70×…");
      for (let cycle = 0; cycle < 12; cycle++) {
        const index =
          (35 + ((cycle * 7) % 45)) * (sides + 1) + ((cycle * 17) % sides);
        const start = grabAt(index);
        body.moveGrab(
          start
            .clone()
            .add(new THREE.Vector3(cycle % 2 === 0 ? 0.5 : -0.4, 0.25, 0.1)),
        );
        await advance(0.5);
        const displacement = new THREE.Vector3()
          .fromArray(positions(), index * 3)
          .distanceTo(start);
        assert(
          displacement > 0.01,
          `Grab ${cycle + 1} stalled: ${displacement}`,
        );
        body.endGrab();
        await advance(1.5);
        log(
          `PASS grab/release ${cycle + 1}/12: displacement ${displacement.toFixed(3)}`,
        );
      }
      body.triggerShake();
      await advance(0.5);
      const frozen = positions();
      settings.paused = true;
      await advance(1);
      assert(
        positions().every((v, i) => v === frozen[i]),
        "Pause changed positions",
      );
      settings.paused = false;
      log("PASS Shake and Pause");
      const settled = await advance(12);
      assert(
        settled.maxSpeed < 0.04 && settled.centerSpeed < 0.01,
        `Did not settle: ${JSON.stringify(settled)}`,
      );
      log(
        `PASS settling: max speed ${settled.maxSpeed.toFixed(5)}, bulk speed ${settled.centerSpeed.toFixed(5)}`,
      );
      body.reset();
      const restored = positions();
      assert(
        restored.every((v, i) => Math.abs(v - sourcePositions[i]) < 1e-6),
        "Reset changed the source shape",
      );
      log("PASS Reset");
      const drops: number[] = [];
      for (const slowMotion of [true, false]) {
        body.reset();
        settings.slowMotion = slowMotion;
        const y0 = inspect().centerY;
        await advance(0.2);
        drops.push(y0 - inspect().centerY);
      }
      assert(drops[1] > drops[0] * 2, `Slow motion timing failed ${drops}`);
      log("PASS Slow motion");
      const firmnessStrain: number[] = [];
      settings.gravity = false;
      settings.slowMotion = false;
      settings.handStrength = 60;
      for (const firmness of [0, 100]) {
        body.reset();
        settings.firmness = firmness;
        const start = grabAt(vertex);
        body.moveGrab(start.clone().add(new THREE.Vector3(0.55, 0.2, 0)));
        const d = await advance(0.4);
        firmnessStrain.push(d.maxEdgeRatio - 1);
        body.endGrab();
        await advance(0.5);
      }
      assert(
        firmnessStrain[0] > firmnessStrain[1] * 1.02,
        `Firmness did not reduce strain: ${firmnessStrain}`,
      );
      log(
        `PASS Firmness: strain ${firmnessStrain.map((v) => v.toFixed(4)).join(" / ")}`,
      );
      const dampingEnergy: number[] = [];
      settings.firmness = 60;
      for (const damping of [0, 100]) {
        body.reset();
        settings.damping = 45;
        const start = grabAt(vertex);
        body.moveGrab(start.clone().add(new THREE.Vector3(0.5, 0.2, 0)));
        await advance(0.3);
        body.endGrab();
        settings.damping = damping;
        let energy = 0;
        for (let i = 0; i < 12; i++) {
          const d = await advance(0.05);
          energy += d.strainSpeed * d.strainSpeed;
        }
        dampingEnergy.push(energy);
      }
      assert(
        dampingEnergy[1] < dampingEnergy[0] * 0.98,
        `Damping did not dissipate vibration: ${dampingEnergy}`,
      );
      log(
        `PASS Damping: vibration energy ${dampingEnergy.map((v) => v.toExponential(3)).join(" / ")}`,
      );
    }
    log("Testing physical walls at the closest menu zoom…");
    Object.assign(settings, DEFAULT_SOFT_BODY_SETTINGS);
    settings.gravity = true;
    body.reset();
    const camera = new THREE.PerspectiveCamera(33, 1710 / 926, 0.1, 100),
      scale = 0.8;
    setPlayViewport(camera, 1710, 926);
    frameSpecimen(camera, scale, MIN_ZOOM_DISTANCE, MIN_ZOOM_DISTANCE);
    const walls = createPlayBounds(camera, scale);
    body.setPlayBounds(walls);
    const savedCamera = camera.position.clone();
    for (let cycle = 0; cycle < 8; cycle++) {
      const surface = positions();
      let index = 0,
        best = -Infinity;
      const direction = walls.right
        .clone()
        .multiplyScalar(cycle % 2 === 0 ? 1 : -1);
      for (let i = 0; i < surface.length / 3; i++) {
        const p = new THREE.Vector3().fromArray(surface, i * 3);
        const score = p.dot(direction) + p.y * 0.1;
        if (score > best) {
          index = i;
          best = score;
        }
      }
      const start = grabAt(index);
      body.moveGrab(
        start
          .clone()
          .addScaledVector(direction, 1.5)
          .addScaledVector(walls.up, 0.2),
      );
      await advance(0.7);
      const moved = new THREE.Vector3()
        .fromArray(positions(), index * 3)
        .distanceTo(start);
      assert(moved > 0.008, `Boundary grab ${cycle + 1} stalled: ${moved}`);
      const checkVisible = () => {
        const surface = positions();
        let extreme = 0;
        for (let i = 0; i < surface.length / 3; i++) {
          const p = new THREE.Vector3()
            .fromArray(surface, i * 3)
            .multiplyScalar(scale)
            .project(camera);
          extreme = Math.max(extreme, Math.abs(p.x), Math.abs(p.y));
        }
        assert(extreme < 1, `Jelly crossed viewport wall: ${extreme}`);
        return extreme;
      };
      const edge = checkVisible();
      body.endGrab();
      await advance(0.8);
      checkVisible();
      assert(
        camera.position.equals(savedCamera),
        "Physics changed camera distance",
      );
      log(
        `PASS wall grab ${cycle + 1}/8: motion ${moved.toFixed(3)}, screen extent ${edge.toFixed(3)}`,
      );
    }
    body.reset();
    assert(
      positions().every((v, i) => Math.abs(v - sourcePositions[i]) < 1e-6),
      "Reset with walls failed",
    );
    body.setPlayBounds(null);
    log("PASS conservative surface bounds throughout all interactions");
    log(
      `PASS ALL · max volume error ${(peakVolumeError * 100).toFixed(2)}% · minimum signed element ratio ${minimumElementRatio.toFixed(4)} · peak edge ratio ${peakEdgeRatio.toFixed(3)}`,
    );
    document.body.dataset.result = "passed";
  } finally {
    body.dispose();
    geometry.dispose();
    renderer.dispose();
  }
}
run().catch((e: unknown) => {
  log(`FAIL: ${e instanceof Error ? e.message : String(e)}`);
  document.body.dataset.result = "failed";
});
