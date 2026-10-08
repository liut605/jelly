import { useEffect, useRef } from "react";
import {
  useStudioRenderer,
  addStudioLighting,
  createStudioGround,
} from "./studio";
import {
  frameSpecimen,
  createPlayBounds,
  setPlayViewport,
  DEFAULT_VIEW,
  MIN_ZOOM_DISTANCE,
  MAX_ZOOM_DISTANCE,
} from "./framing";
import * as THREE from "three";
import { PEACH_HALF_HEIGHT } from "./peachGeometry";
import {
  createGpuSoftBody,
  PEACH_FLOOR,
  type SoftBodyGpu,
  type SoftBodySettings,
} from "./softBodyGpu";
import { specimens, type SpecimenId } from "./specimens";
import { startStillPreview, type StillPreviewHandle } from "./stillPreview";
import { addCutAppearance } from "./munchAppearance";
import type { MunchPiece } from "./munchGeometry";
import { MunchWorkerClient } from "./munchWorkerClient";
import { screenBite } from "./screenBite";
import { bindJellyOptics, createRefractionBackdrop } from "./jellyOptics";
import {
  twoFingerGesture,
  wheelViewGesture,
  type ViewGesture,
} from "./viewGestures";
import { emitMunch } from "./munchEvents";

type SimulationStatus = "ready" | "still";

interface SceneControls extends SoftBodySettings {
  rotateEnabled: boolean;
  handEnabled: boolean;
  munchEnabled: boolean;
  shakeToken: number;
}

interface PeachSceneProps {
  specimen: SpecimenId;
  resetToken: number;
  zoomStep: number;
  rotateEnabled: boolean;
  handEnabled: boolean;
  munchEnabled: boolean;
  slowMotion: boolean;
  firmness: number;
  damping: number;
  handStrength: number;
  gravityStrength: number;
  shakeToken: number;
  onSimulationStatus: (status: SimulationStatus) => void;
}

function makeShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(64, 64, 2, 64, 64, 62);
    gradient.addColorStop(0, "rgba(40, 45, 34, 0.29)");
    gradient.addColorStop(0.36, "rgba(47, 51, 40, 0.16)");
    gradient.addColorStop(1, "rgba(47, 51, 40, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}

export default function PeachScene({
  specimen,
  resetToken,
  zoomStep,
  handEnabled,
  munchEnabled,
  rotateEnabled,
  slowMotion,
  firmness,
  damping,
  handStrength,
  gravityStrength,
  shakeToken,
  onSimulationStatus,
}: PeachSceneProps) {
  const sharedRenderer = useStudioRenderer();
  const mountRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const zoomTargetRef = useRef<number>(DEFAULT_VIEW.distance);
  const previousZoomStepRef = useRef(zoomStep);
  const rotateRef = useRef({ x: 0, y: 0 });
  const simulationRef = useRef<SoftBodyGpu | null>(null);
  const previewRef = useRef<StillPreviewHandle | null>(null);
  const cancelGestureRef = useRef<(() => void) | null>(null);
  const controlsRef = useRef<SceneControls>({
    handEnabled,
    munchEnabled,
    rotateEnabled,
    paused: false,
    slowMotion,
    firmness,
    damping,
    handStrength,
    gravityStrength,
    shakeToken,
  });
  controlsRef.current = {
    handEnabled,
    munchEnabled,
    rotateEnabled,
    paused: false,
    slowMotion,
    firmness,
    damping,
    handStrength,
    gravityStrength,
    shakeToken,
  };
  const statusCallbackRef = useRef(onSimulationStatus);
  statusCallbackRef.current = onSimulationStatus;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const { geometry, sourcePositions, volumeSourcePositions, rings, sides } =
      specimens[specimen].create();
    const sourceColors = new Float32Array(
      geometry.getAttribute("color").array as ArrayLike<number>,
    );
    let geometryDisposed = false;
    const disposeGeometry = (): void => {
      if (!geometryDisposed) {
        geometryDisposed = true;
        geometry.dispose();
      }
    };
    let renderer: THREE.WebGLRenderer | null = sharedRenderer;
    let softBody: SoftBodyGpu | null = null;
    let stillPreview: StillPreviewHandle | null = null;

    const useStillPreview = (): (() => void) => {
      if (softBody) {
        softBody.dispose();
        softBody = null;
      }
      simulationRef.current = null;
      cameraRef.current = null;
      if (renderer) {
        const canvas = renderer.domElement;
        canvas.remove();
        renderer = null;
      }
      stillPreview = startStillPreview(
        mount,
        sourcePositions,
        sourceColors,
        specimens[specimen].title,
        { rings, sides, indices: geometry.getIndex()?.array },
      );
      previewRef.current = stillPreview;
      disposeGeometry();
      statusCallbackRef.current("still");
      return () => {
        stillPreview?.dispose();
        if (previewRef.current === stillPreview) previewRef.current = null;
        disposeGeometry();
      };
    };

    if (new URLSearchParams(window.location.search).get("preview") === "canvas")
      return useStillPreview();

    if (!renderer) return useStillPreview();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.14;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute(
      "aria-label",
      `${specimens[specimen].title}. Hand drags the jelly. Rotate or two fingers orbit; pinch to zoom.`,
    );
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.dataset.testid = "canvas-peach-specimen";
    mount.appendChild(renderer.domElement);

    try {
      if (
        new URLSearchParams(window.location.search).get("preview") === "still"
      )
        throw new Error("Still preview requested.");
      softBody = createGpuSoftBody(
        renderer,
        geometry,
        sourcePositions,
        rings,
        sides,
        volumeSourcePositions,
        specimens[specimen].map,
      );
      const gl = renderer.getContext();
      while (gl.getError() !== gl.NO_ERROR) {
        // Drain errors from context setup before the first simulation pass.
      }
      softBody.step(1 / 120, {
        firmness,
        damping,
        paused: false,
        slowMotion: false,
      });
      const simulationError = gl.getError();
      if (simulationError !== gl.NO_ERROR) {
        throw new Error(
          "The GPU soft-body shader could not run on this device.",
        );
      }
      softBody.reset();
    } catch {
      softBody?.dispose();
      softBody = null;
      const positions = geometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;
      positions.array.set(sourcePositions);
      positions.needsUpdate = true;
      renderer.domElement.setAttribute(
        "aria-label",
        `Still 3D preview of ${specimens[specimen].title}. GPU simulation unavailable.`,
      );
    }

    const scene = new THREE.Scene();
    const refractionBackdrop = createRefractionBackdrop(mount);
    const camera = new THREE.PerspectiveCamera(
      33,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.1,
      100,
    );
    camera.position.set(0, 0.1, 4.95);
    cameraRef.current = camera;
    const fruit = new THREE.Group();
    fruit.position.y = -0.12;
    scene.add(fruit);

    const material = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      transparent: false,
      opacity: 1,
      roughness: 0.58,
      metalness: 0,
      clearcoat: 0.18,
      clearcoatRoughness: 0.61,
      transmission: 0.62,
      thickness: 0.75,
      attenuationDistance: 1.9,
      attenuationColor: new THREE.Color("#f7dfd9"),
      ior: 1.4,
      specularIntensity: 0.72,
      sheen: 0.22,
      sheenRoughness: 0.65,
      sheenColor: new THREE.Color("#ffd5bf"),
    });
    softBody?.bindSurfaceMaterial(material);
    specimens[specimen].appearance(material);
    bindJellyOptics(material, refractionBackdrop);
    const peach = new THREE.Mesh(geometry, material);
    peach.castShadow = true;
    peach.frustumCulled = false;
    peach.receiveShadow = true;
    // Cast from the same GPU-deformed skin as the visible frosted surface.
    const depthMaterial = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
    });
    softBody?.bindSurfaceMaterial(depthMaterial);
    peach.customDepthMaterial = depthMaterial;
    fruit.add(peach);
    type Piece = {
      mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhysicalMaterial>;
      body: SoftBodyGpu;
      depth: THREE.MeshDepthMaterial;
    };
    let pieces: Piece[] = softBody
      ? [{ mesh: peach, body: softBody, depth: depthMaterial }]
      : [];
    let munchBusy = false,
      disposed = false,
      biteCount = 0;
    let grabbedPiece: Piece | null = null;
    const disposePiece = (piece: Piece): void => {
      fruit.remove(piece.mesh);
      piece.body.endGrab();
      piece.body.dispose();
      piece.mesh.geometry.dispose();
      piece.mesh.material.dispose();
      piece.depth.dispose();
    };
    const makeCutPiece = (cut: MunchPiece): Piece => {
      const body = createGpuSoftBody(
        renderer!,
        cut.geometry,
        cut.source,
        0,
        0,
        cut.state.topology.restPositions,
        (x, y, z) => [x, y, z],
        cut.state.topology,
      );
      body.restoreState(cut.state.positions, cut.state.velocities);
      const skin = material.clone();
      body.bindSurfaceMaterial(skin);
      specimens[specimen].appearance(skin);
      addCutAppearance(skin, specimen);
      bindJellyOptics(skin, refractionBackdrop);
      const depth = depthMaterial.clone();
      body.bindSurfaceMaterial(depth);
      const mesh = new THREE.Mesh(cut.geometry, skin);
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.frustumCulled = false;
      mesh.customDepthMaterial = depth;
      return { mesh, body, depth };
    };
    const dropFreshPiece = (): Piece => {
      const data = specimens[specimen].create();
      const body = createGpuSoftBody(
        renderer!,
        data.geometry,
        data.sourcePositions,
        data.rings,
        data.sides,
        data.volumeSourcePositions,
        specimens[specimen].map,
      );
      const state = body.snapshot();
      for (let i = 1; i < state.positions.length; i += 3)
        state.positions[i] += 0.6;
      body.restoreState(state.positions, state.velocities);
      const skin = material.clone();
      body.bindSurfaceMaterial(skin);
      specimens[specimen].appearance(skin);
      bindJellyOptics(skin, refractionBackdrop);
      const depth = depthMaterial.clone();
      body.bindSurfaceMaterial(depth);
      const mesh = new THREE.Mesh(data.geometry, skin);
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.frustumCulled = false;
      mesh.customDepthMaterial = depth;
      return { mesh, body, depth };
    };

    const ground = createStudioGround();
    scene.add(ground);

    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(2.85, 2.85),
      new THREE.MeshBasicMaterial({
        map: makeShadowTexture(),
        transparent: true,
        depthWrite: false,
      }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(0.08, -PEACH_HALF_HEIGHT - 0.02, 0.06);
    shadow.renderOrder = -1;
    scene.add(shadow);

    const disposeLighting = addStudioLighting(scene);

    const resize = (): void => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      camera.fov = window.innerWidth < 600 ? 37 : 33;
      setPlayViewport(camera, width, height);
      renderer?.setPixelRatio(
        Math.min(
          window.devicePixelRatio || 1,
          width < 760 || window.matchMedia("(pointer: coarse)").matches
            ? 1.5
            : 2,
        ),
      );
      renderer?.setSize(width, height);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    simulationRef.current = softBody;
    statusCallbackRef.current(softBody ? "ready" : "still");
    let handledShakeToken = controlsRef.current.shakeToken;
    let previousFrameTime = 0;
    let frame = 0;
    let cameraDistance: number = DEFAULT_VIEW.distance;
    const restBounds = new THREE.Box3().setFromBufferAttribute(
      new THREE.BufferAttribute(sourcePositions, 3),
    );
    const boundsCenter = new THREE.Vector3();
    let restRadius = 0;
    for (let i = 0; i < sourcePositions.length; i += 3)
      restRadius = Math.max(
        restRadius,
        Math.hypot(
          sourcePositions[i],
          sourcePositions[i + 1] + 0.3,
          sourcePositions[i + 2],
        ),
      );
    const render = (time: number): void => {
      if (!renderer) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const mobile =
        window.innerWidth <= 760 ||
        (height <= 500 && window.innerWidth <= 1000);
      const landscape = mobile && window.innerWidth > height;
      const controls = controlsRef.current;
      if (controls.shakeToken !== handledShakeToken) {
        pieces.forEach((piece) => piece.body.triggerShake());
        handledShakeToken = controls.shakeToken;
      }
      const delta =
        previousFrameTime === 0
          ? 0
          : Math.min((time - previousFrameTime) / 1000, 0.05);
      previousFrameTime = time;
      if ((!controls.handEnabled || controls.paused) && dragMode === "grab")
        cancelGesture();

      // The camera is independent of deformation. Physical contact walls keep
      // the slice within the full viewport without changing its distance.
      fruit.position.set(0, 0, 0);
      const baseFrustumHeight =
        2 *
        DEFAULT_VIEW.distance *
        Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const desiredWidth = Math.min(
        width * (mobile && !landscape ? 0.82 : 0.46),
        height * (landscape ? 0.56 : mobile ? 0.57 : 0.82),
      );
      const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
      const limitingAngle = Math.min(
        halfFov,
        Math.atan(
          Math.tan(halfFov) * camera.aspect * (mobile && !landscape ? 1 : 0.5),
        ),
      );
      const targetScale = Math.min(
        (desiredWidth * baseFrustumHeight) / (height * 2.4),
        (MIN_ZOOM_DISTANCE * Math.sin(limitingAngle)) / (restRadius * 1.05),
      );
      fruit.scale.setScalar(targetScale);
      const pitch = THREE.MathUtils.clamp(
        DEFAULT_VIEW.pitch + rotateRef.current.x,
        0.16,
        1.35,
      );
      const yaw = DEFAULT_VIEW.yaw - rotateRef.current.y;
      cameraDistance = frameSpecimen(
        camera,
        targetScale,
        zoomTargetRef.current,
        cameraDistance,
        yaw,
        pitch,
      );
      const bounds = new THREE.Box3();
      for (const piece of pieces) {
        piece.body.setPlayBounds(createPlayBounds(camera, targetScale));
        if (!document.hidden && !munchBusy) piece.body.step(delta, controls);
        bounds.union(piece.body.getSurfaceBounds());
      }
      if (!pieces.length) bounds.copy(restBounds);
      bounds.getCenter(boundsCenter);
      if (!controls.munchEnabled) {
        guideOverlay.style.display = "none";
        munchStatus.style.visibility = "hidden";
      } else munchWorker.warmup();
      mount.dataset.pieceCount = String(pieces.length);
      mount.dataset.biteCount = String(biteCount);
      if (import.meta.env.DEV) {
        mount.dataset.cameraDistance = cameraDistance.toFixed(6);
        mount.dataset.cameraTargetDistance = zoomTargetRef.current.toFixed(6);
        mount.dataset.cameraYaw = yaw.toFixed(6);
        mount.dataset.cameraPitch = pitch.toFixed(6);
        mount.dataset.specimenScale = targetScale.toFixed(6);
        // Screen-space bounds let browser regressions check actual simulated
        // geometry against menus, including after zooming and deformation.
        const screenBounds = new THREE.Box2();
        for (const x of [bounds.min.x, bounds.max.x])
          for (const y of [bounds.min.y, bounds.max.y])
            for (const z of [bounds.min.z, bounds.max.z]) {
              const point = new THREE.Vector3(x, y, z)
                .multiplyScalar(targetScale)
                .project(camera);
              screenBounds.expandByPoint(
                new THREE.Vector2(
                  ((point.x + 1) * width) / 2,
                  ((1 - point.y) * height) / 2,
                ),
              );
            }
        mount.dataset.surfaceScreenBounds = JSON.stringify({
          top: screenBounds.min.y,
          bottom: screenBounds.max.y,
          left: screenBounds.min.x,
          right: screenBounds.max.x,
        });
      }
      ground.position.y = PEACH_FLOOR * targetScale - 0.003;
      shadow.scale.setScalar(targetScale);
      shadow.position.set(
        boundsCenter.x * targetScale,
        PEACH_FLOOR * targetScale - 0.005,
        boundsCenter.z * targetScale,
      );
      shadow.material.opacity = mobile ? 0.8 : 1;
      refractionBackdrop.update();
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);

    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2();
    const grabPlane = new THREE.Plane();
    const hitPoint = new THREE.Vector3();
    const cameraDirection = new THREE.Vector3();
    const pointerPositions = new Map<number, { x: number; y: number }>();
    let dragMode: "none" | "orbit" | "grab" | "munch" | "view" = "none";
    let dragPointerId = -1;
    let lastX = 0;
    let lastY = 0;
    let nativeGesture = false;
    let nativeScale = 1;
    let nativeRotation = 0;
    const canvas = renderer.domElement;
    const cancelGesture = (): void => {
      pieces.forEach((piece) => piece.body.endGrab());
      grabbedPiece = null;
      const ids = [...pointerPositions.keys()];
      pointerPositions.clear();
      dragMode = "none";
      dragPointerId = -1;
      nativeGesture = false;
      mount.dataset.grabbing = "false";
      for (const id of ids)
        if (canvas.hasPointerCapture?.(id)) canvas.releasePointerCapture(id);
    };
    cancelGestureRef.current = cancelGesture;
    const visibilityChange = (): void => {
      previousFrameTime = 0;
      if (document.hidden) cancelGesture();
    };
    const setPointerPosition = (event: PointerEvent): void => {
      pointerPositions.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
    };
    const guideOverlay = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    guideOverlay.classList.add("munch-guide");
    guideOverlay.dataset.testid = "munch-guide";
    guideOverlay.setAttribute("aria-hidden", "true");
    const guideImage = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "image",
    );
    guideImage.setAttribute(
      "href",
      `${import.meta.env.BASE_URL}references/bite-mark.svg`,
    );
    guideImage.setAttribute("preserveAspectRatio", "xMidYMid meet");
    guideOverlay.appendChild(guideImage);
    mount.appendChild(guideOverlay);
    const munchStatus = document.createElement("div");
    munchStatus.className = "munch-status";
    munchStatus.setAttribute("role", "status");
    munchStatus.dataset.testid = "munch-status";
    mount.appendChild(munchStatus);
    let feedbackTimer: ReturnType<typeof setTimeout> | undefined;
    let feedbackX = 0,
      feedbackY = 0;
    let feedbackWidth = 70,
      feedbackHeight = 24;
    const positionFeedback = (): void => {
      munchStatus.style.left = `${Math.max(8, Math.min(feedbackX + 14, mount.clientWidth - feedbackWidth - 8))}px`;
      munchStatus.style.top = `${Math.max(8, Math.min(feedbackY + 12, mount.clientHeight - feedbackHeight - 8))}px`;
    };
    const message = (text: string): void => {
      clearTimeout(feedbackTimer);
      munchStatus.textContent = text;
      feedbackWidth = munchStatus.offsetWidth;
      feedbackHeight = munchStatus.offsetHeight;
      positionFeedback();
      if (text !== "Munch" && text !== "Munching…")
        feedbackTimer = setTimeout(
          () => message("Munch"),
          text === "Yum" ? 1800 : 3600,
        );
    };
    message("Munch");
    munchStatus.style.visibility = "hidden";
    const munchWorker = new MunchWorkerClient();
    const previewBite = (x: number, y: number): number | null => {
      if (!controlsRef.current.munchEnabled || !pieces.length) return null;
      munchWorker.warmup();
      const rect = canvas.getBoundingClientRect(),
        px = x - rect.left,
        py = y - rect.top;
      const radius = Math.min(135, Math.max(60, rect.width * 0.085));
      // The original 213 × 187 SVG receives one uniform scale, never a
      // perspective transform or independent width/height adjustment.
      const scale = radius / 106.5;
      guideImage.setAttribute("x", String(px - radius));
      guideImage.setAttribute("y", String(py - 186.5 * scale));
      guideImage.setAttribute("width", String(213 * scale));
      guideImage.setAttribute("height", String(187 * scale));
      guideOverlay.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
      guideOverlay.style.display = "block";
      feedbackX = px;
      feedbackY = py;
      positionFeedback();
      munchStatus.style.visibility = "visible";
      return radius;
    };
    const takeBite = async (x: number, y: number): Promise<void> => {
      if (munchBusy) return;
      const radius = previewBite(x, y);
      if (!radius) return;
      munchBusy = true;
      message("Munching…");
      pieces.forEach((piece) => piece.body.endGrab());
      const created: Piece[] = [];
      const prepared: MunchPiece[] = [];
      try {
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => resolve()),
        );
        if (disposed) return;
        const rect = canvas.getBoundingClientRect();
        pointerNdc.set(
          ((x - rect.left) / rect.width) * 2 - 1,
          1 - ((y - rect.top) / rect.height) * 2,
        );
        camera.updateMatrixWorld();
        fruit.updateMatrixWorld(true);
        const changes = [];
        for (const piece of pieces) {
          // Freeze/sync first, then resolve against this exact rendered pose.
          piece.body.syncSurfaceForRaycast();
          const target = screenBite(
            piece.mesh.geometry,
            piece.mesh,
            fruit,
            camera,
            pointerNdc,
            radius,
            rect.width,
            rect.height,
          );
          if (target.kind === "miss") {
            changes.push({ piece, result: { kind: "miss" as const } });
            continue;
          }
          if (target.kind === "unsupported")
            throw new Error(
              "This view is too tricky to munch on! Let's try a higher angle.",
            );
          // Complete screen containment consumes this fragment independently,
          // even if another piece is higher or farther away from the camera.
          const guide = target.guide ?? {
            origin: new THREE.Vector3(),
            right: new THREE.Vector3(1, 0, 0),
            up: new THREE.Vector3(0, 0, -1),
            forward: new THREE.Vector3(0, 1, 0),
            radius: 1,
          };
          const result = await munchWorker.cut(
            piece.mesh.geometry,
            piece.body.snapshot(),
            guide,
            specimen,
            target.fullyCovered,
          );
          if (result.kind === "cut") prepared.push(...result.pieces);
          if (disposed) return;
          changes.push({ piece, result });
        }
        if (disposed) return;
        if (changes.every((change) => change.result.kind === "miss")) {
          message("No jelly within reach.");
          return;
        }
        let removedVolume = 0;
        const next: Piece[] = [];
        for (const { piece, result } of changes) {
          if (result.kind === "miss") next.push(piece);
          else {
            removedVolume += result.removedVolume;
            if (result.kind === "cut")
              for (const cut of result.pieces) {
                const replacement = makeCutPiece(cut);
                created.push(replacement);
                next.push(replacement);
              }
          }
        }
        if (next.length > 4)
          throw new Error(
            "This bite would leave too many fragments. Try a wider bite.",
          );
        const consumed = next.length === 0;
        if (consumed) {
          const fresh = dropFreshPiece();
          created.push(fresh);
          next.push(fresh);
        }
        for (const { piece, result } of changes)
          if (result.kind !== "miss") disposePiece(piece);
        pieces = next;
        created.forEach((piece) => fruit.add(piece.mesh));
        softBody = pieces[0]?.body ?? null;
        simulationRef.current = softBody;
        biteCount++;
        emitMunch({
          specimen,
          removedVolume,
          remainingPieces: consumed ? 0 : pieces.length,
          consumed,
        });
        message("Yum");
      } catch (error) {
        created.forEach(disposePiece);
        if (disposed) return;
        message(
          error instanceof Error
            ? error.message
            : "That bite could not be made safely. Try another position.",
        );
      } finally {
        for (const cut of prepared)
          if (!pieces.some((piece) => piece.mesh.geometry === cut.geometry))
            cut.geometry.dispose();
        munchBusy = false;
        previousFrameTime = 0;
      }
    };
    const applyViewGesture = ({
      dx,
      dy,
      twist,
      zoomRatio,
    }: ViewGesture): void => {
      rotateRef.current.y += dx * 0.008 - twist;
      rotateRef.current.x = THREE.MathUtils.clamp(
        rotateRef.current.x + dy * 0.005,
        -0.65,
        0.65,
      );
      zoomTargetRef.current = THREE.MathUtils.clamp(
        zoomTargetRef.current * zoomRatio,
        MIN_ZOOM_DISTANCE,
        MAX_ZOOM_DISTANCE,
      );
    };
    const onPointerDown = (event: PointerEvent): void => {
      if (event.button !== 0) return;
      if (munchBusy) return;
      setPointerPosition(event);
      if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
      if (pointerPositions.size === 1) {
        dragPointerId = event.pointerId;
        lastX = event.clientX;
        lastY = event.clientY;
        if (controlsRef.current.munchEnabled) {
          dragMode = "munch";
          previewBite(event.clientX, event.clientY);
          return;
        }
        dragMode = controlsRef.current.rotateEnabled ? "orbit" : "none";
        if (
          softBody &&
          controlsRef.current.handEnabled &&
          !controlsRef.current.paused
        ) {
          pieces.forEach((piece) => piece.body.syncSurfaceForRaycast());
          const rect = canvas.getBoundingClientRect();
          pointerNdc.set(
            ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1,
            -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1),
          );
          fruit.updateMatrixWorld(true);
          pieces.forEach((piece) => piece.mesh.updateMatrixWorld(true));
          camera.updateMatrixWorld(true);
          raycaster.setFromCamera(pointerNdc, camera);
          const hit = raycaster.intersectObjects(
            pieces.map((piece) => piece.mesh),
            false,
          )[0];
          if (hit) {
            grabbedPiece = pieces.find((piece) => piece.mesh === hit.object)!;
            camera.getWorldDirection(cameraDirection);
            grabPlane.setFromNormalAndCoplanarPoint(cameraDirection, hit.point);
            const localPoint = grabbedPiece.mesh.worldToLocal(
              hit.point.clone(),
            );
            const face = hit.face;
            if (face) {
              const positions =
                grabbedPiece.mesh.geometry.getAttribute("position");
              const barycentric = new THREE.Vector3();
              THREE.Triangle.getBarycoord(
                localPoint,
                new THREE.Vector3().fromBufferAttribute(positions, face.a),
                new THREE.Vector3().fromBufferAttribute(positions, face.b),
                new THREE.Vector3().fromBufferAttribute(positions, face.c),
                barycentric,
              );
              grabbedPiece.body.beginGrab(
                localPoint,
                [face.a, face.b, face.c],
                barycentric,
              );
            }
            dragMode = "grab";
            mount.dataset.grabbing = "true";
          }
        }
      } else {
        // A second finger always controls the view, never the physical grab or bite.
        grabbedPiece?.body.endGrab();
        grabbedPiece = null;
        mount.dataset.grabbing = "false";
        guideOverlay.style.display = "none";
        dragMode = "view";
        dragPointerId = -1;
      }
    };
    const onPointerMove = (event: PointerEvent): void => {
      if (nativeGesture) return;
      const previous = pointerPositions.get(event.pointerId);
      if (!previous) {
        if (controlsRef.current.munchEnabled && pointerPositions.size === 0)
          previewBite(event.clientX, event.clientY);
        return;
      }
      const before = [...pointerPositions.values()];
      setPointerPosition(event);
      if (dragMode === "view" && pointerPositions.size >= 2) {
        const gesture = twoFingerGesture(before, [
          ...pointerPositions.values(),
        ]);
        if (gesture) applyViewGesture(gesture);
        return;
      }
      if (dragMode === "none" || dragPointerId !== event.pointerId) return;
      if (dragMode === "munch") {
        previewBite(event.clientX, event.clientY);
        return;
      }
      if (dragMode === "grab") {
        if (disposed) return;
        const rect = canvas.getBoundingClientRect();
        pointerNdc.set(
          ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1,
          -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1),
        );
        raycaster.setFromCamera(pointerNdc, camera);
        if (raycaster.ray.intersectPlane(grabPlane, hitPoint)) {
          grabbedPiece?.body.moveGrab(
            grabbedPiece.mesh.worldToLocal(hitPoint.clone()),
          );
        }
        return;
      }
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      applyViewGesture({ dx, dy, twist: 0, zoomRatio: 1 });
    };
    const endDrag = (event: PointerEvent): void => {
      if (!pointerPositions.has(event.pointerId)) return;
      pointerPositions.delete(event.pointerId);
      if (dragPointerId === event.pointerId) {
        if (dragMode === "munch") void takeBite(event.clientX, event.clientY);
        grabbedPiece?.body.endGrab();
        grabbedPiece = null;
        mount.dataset.grabbing = "false";
        dragMode = "none";
        dragPointerId = -1;
      }
      // Finish the two-finger gesture without handing a grab/bite to the last finger.
      if (dragMode === "view" && pointerPositions.size < 2) {
        dragMode = "none";
        dragPointerId = -1;
      }
      if (canvas.hasPointerCapture?.(event.pointerId))
        canvas.releasePointerCapture(event.pointerId);
    };
    const onWheel = (event: WheelEvent): void => {
      event.preventDefault();
      if (nativeGesture || pointerPositions.size) return;
      applyViewGesture(
        wheelViewGesture(
          event.deltaX,
          event.deltaY,
          event.deltaMode,
          event.ctrlKey,
        ),
      );
    };
    // Safari trackpads report native scale/rotation events instead of Ctrl-wheel.
    type SafariGesture = Event & { scale: number; rotation: number };
    const onGestureStart = (event: Event): void => {
      event.preventDefault();
      if (pointerPositions.size) return; // Touch pointer path already handles the pinch.
      nativeGesture = true;
      const gesture = event as SafariGesture;
      nativeScale = gesture.scale || 1;
      nativeRotation = gesture.rotation || 0;
    };
    const onGestureChange = (event: Event): void => {
      event.preventDefault();
      if (!nativeGesture) return;
      const { scale, rotation } = event as SafariGesture;
      if (!(scale > 0) || !Number.isFinite(scale) || !Number.isFinite(rotation))
        return;
      applyViewGesture({
        dx: 0,
        dy: 0,
        twist: ((rotation - nativeRotation) * Math.PI) / 180,
        zoomRatio: nativeScale / scale,
      });
      nativeScale = scale;
      nativeRotation = rotation;
    };
    const onGestureEnd = (event: Event): void => {
      event.preventDefault();
      nativeGesture = false;
    };
    canvas.addEventListener("gesturestart", onGestureStart, { passive: false });
    canvas.addEventListener("gesturechange", onGestureChange, {
      passive: false,
    });
    canvas.addEventListener("gestureend", onGestureEnd, { passive: false });
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    const hideBiteGuide = (): void => {
      guideOverlay.style.display = "none";
      munchStatus.style.visibility = "hidden";
    };
    canvas.addEventListener("pointerleave", hideBiteGuide);
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", cancelGesture);
    canvas.addEventListener("lostpointercapture", endDrag);
    window.addEventListener("blur", cancelGesture);
    document.addEventListener("visibilitychange", visibilityChange);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      disposed = true;
      munchWorker.dispose();
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", hideBiteGuide);
      canvas.removeEventListener("pointerup", endDrag);
      canvas.removeEventListener("pointercancel", cancelGesture);
      canvas.removeEventListener("lostpointercapture", endDrag);
      window.removeEventListener("blur", cancelGesture);
      document.removeEventListener("visibilitychange", visibilityChange);
      cancelGestureRef.current = null;
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("gesturestart", onGestureStart);
      canvas.removeEventListener("gesturechange", onGestureChange);
      canvas.removeEventListener("gestureend", onGestureEnd);
      pieces.forEach(disposePiece);
      if (simulationRef.current === softBody) simulationRef.current = null;
      geometry.dispose();
      material.dispose();
      depthMaterial.dispose();
      guideOverlay.remove();
      clearTimeout(feedbackTimer);
      munchStatus.remove();
      ground.geometry.dispose();
      ground.material.dispose();
      shadow.geometry.dispose();
      const shadowMaterial = shadow.material as THREE.MeshBasicMaterial;
      shadowMaterial.map?.dispose();
      shadowMaterial.dispose();
      disposeLighting();
      refractionBackdrop.dispose();
      if (mount.contains(canvas)) mount.removeChild(canvas);
      cameraRef.current = null;
    };
  }, [sharedRenderer]);

  useEffect(() => {
    if (resetToken === 0) return;
    cancelGestureRef.current?.();
    rotateRef.current = { x: 0, y: 0 };
    zoomTargetRef.current = DEFAULT_VIEW.distance;
    cameraRef.current?.position.set(0, 0.1, 4.95);
    simulationRef.current?.reset();
    previewRef.current?.setZoom(DEFAULT_VIEW.distance);
  }, [resetToken]);

  useEffect(() => {
    zoomTargetRef.current = THREE.MathUtils.clamp(
      zoomTargetRef.current + (zoomStep - previousZoomStepRef.current) * 0.38,
      MIN_ZOOM_DISTANCE,
      MAX_ZOOM_DISTANCE,
    );
    previousZoomStepRef.current = zoomStep;
    previewRef.current?.setZoom(zoomTargetRef.current);
  }, [zoomStep]);

  useEffect(() => {
    cancelGestureRef.current?.();
  }, [handEnabled, munchEnabled, rotateEnabled]);

  return (
    <div
      className="canvas-stage"
      ref={mountRef}
      data-testid="canvas-stage"
      aria-label="Jelly play area across the viewport"
      data-hand={handEnabled ? "on" : "off"}
      data-tool={handEnabled ? "hand" : munchEnabled ? "munch" : "rotate"}
    />
  );
}
