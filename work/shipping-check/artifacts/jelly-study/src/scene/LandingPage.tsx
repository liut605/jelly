import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  useStudioRenderer,
  addStudioLighting,
  createStudioGround,
} from "./studio";
import {
  DOCUMENT_CAMERA,
  loadDocumentCamera,
  disposeDocumentCamera,
} from "./documentCamera";
import {
  ENTRY_VARIATIONS,
  entryPose,
  landingPose,
  applyEntryPose,
  type EntryVariation,
} from "./entryCamera";

interface Props {
  variation: EntryVariation;
  onVariation: (variation: EntryVariation) => void;
  onEntering: () => void;
  onComplete: () => void;
  entering: boolean;
}
export default function LandingPage(props: Props) {
  const renderer = useStudioRenderer();
  const mountRef = useRef<HTMLDivElement>(null);
  const entryRef = useRef<HTMLButtonElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const callbacks = useRef(props);
  callbacks.current = props;
  const beginRef = useRef<() => void>(() => {});
  const finishRef = useRef<() => void>(() => {});
  const [status, setStatus] = useState<
    "loading" | "ready" | "unavailable" | "error"
  >("loading");
  const [progress, setProgress] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [inspection, setInspection] = useState("");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (!renderer) {
      setStatus("unavailable");
      return;
    }
    let disposed = false,
      root: THREE.Group | null = null;
    setStatus("loading");
    setProgress(0);
    const scene = new THREE.Scene();
    const futureSlices = new THREE.Group();
    futureSlices.name = "Reserved jelly slices behind landing title";
    scene.add(futureSlices);
    const disposeLighting = addStudioLighting(scene);
    const ground = createStudioGround();
    ground.position.y = -0.001;
    scene.add(ground);
    const camera = new THREE.PerspectiveCamera(30, 1, 0.002, 100);
    const canvas = renderer.domElement;
    canvas.dataset.testid = "canvas-document-camera";
    canvas.setAttribute("role", "img");
    canvas.setAttribute(
      "aria-label",
      "Yellow and grey document camera with a cast shadow. Select the black circular lens on the angled neck to enter the jelly study.",
    );
    mount.appendChild(canvas);
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    let dirty = true;
    const raycaster = new THREE.Raycaster(),
      ndc = new THREE.Vector2();
    const lensHitArea = new THREE.Sphere(DOCUMENT_CAMERA.lens, 0.045);
    const intersection = new THREE.Vector3();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1,
      height = 1,
      frame = 0,
      previousTime = 0,
      elapsed = 0;
    let animating = false,
      completed = false,
      variation: EntryVariation = "direct";
    let start = landingPose(1, 1);
    const resize = () => {
      width = Math.max(1, mount.clientWidth);
      height = Math.max(1, mount.clientHeight);
      renderer.setPixelRatio(
        Math.min(devicePixelRatio || 1, width < 760 ? 1.5 : 2),
      );
      renderer.setSize(width, height);
      dirty = true;
      // Resizing changes the frame, never the interaction's progress or target.
      start = landingPose(width, height);
      if (!animating) applyEntryPose(camera, start, width, height);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();
    const finish = () => {
      if (completed) return;
      completed = true;
      callbacks.current.onComplete();
    };
    const begin = () => {
      if (!root || animating || completed) return;
      animating = true;
      elapsed = 0;
      variation = callbacks.current.variation;
      callbacks.current.onEntering();
    };
    beginRef.current = begin;
    finishRef.current = finish;
    const projectLens = () => {
      const point = DOCUMENT_CAMERA.lens.clone().project(camera);
      if (entryRef.current) {
        const screenX = (point.x * 0.5 + 0.5) * width;
        entryRef.current.style.left = `${screenX}px`;
        entryRef.current.style.top = `${(-point.y * 0.5 + 0.5) * height}px`;
        // Keep the caption readable at narrow widths without moving its lens hit area.
        entryRef.current.style.setProperty(
          "--entry-label-shift",
          `${THREE.MathUtils.clamp(screenX, 100, width - 100) - screenX}px`,
        );
      }
    };
    const previewQuery = new URLSearchParams(location.search);
    const previewProgress =
      import.meta.env.DEV && previewQuery.has("entryProgress")
        ? THREE.MathUtils.clamp(
            Number(previewQuery.get("entryProgress")) || 0,
            0,
            1,
          )
        : null;
    const previewVariant = previewQuery.get("entryPreview");
    const previewPath: EntryVariation =
      previewVariant === "overhead" || previewVariant === "orbit"
        ? previewVariant
        : "direct";
    const draw = (time: number) => {
      if (disposed || completed) return;
      const delta = previousTime
        ? Math.min(0.25, (time - previousTime) / 1000)
        : 0;
      previousTime = time;
      if (animating) {
        if (!document.hidden) elapsed += delta;
        const duration = reduceMotion.matches
          ? 0.22
          : variation === "overhead"
            ? 3.5
            : variation === "orbit"
              ? 3
              : 2.7;
        const t = Math.min(1, elapsed / duration);
        if (!reduceMotion.matches)
          applyEntryPose(
            camera,
            entryPose(
              start,
              DOCUMENT_CAMERA.lens,
              DOCUMENT_CAMERA.lensNormal,
              variation,
              t,
            ),
            width,
            height,
          );
        if (veilRef.current)
          veilRef.current.style.opacity = `${THREE.MathUtils.smoothstep(t, reduceMotion.matches ? 0 : 0.7, reduceMotion.matches ? 1 : 0.94)}`;
        mount.dataset.transitionProgress = t.toFixed(3);
        if (t >= 1) {
          finish();
          return;
        }
      } else {
        applyEntryPose(
          camera,
          previewProgress === null
            ? start
            : entryPose(
                start,
                DOCUMENT_CAMERA.lens,
                DOCUMENT_CAMERA.lensNormal,
                previewPath,
                previewProgress,
              ),
          width,
          height,
        );
        projectLens();
      }
      if (dirty || animating) {
        renderer.render(scene, camera);
        dirty = false;
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    loadDocumentCamera((fraction) => {
      if (!disposed) setProgress(fraction);
    })
      .then((asset) => {
        if (disposed) {
          disposeDocumentCamera(asset);
          return;
        }
        root = asset;
        scene.add(root);
        dirty = true;
        renderer.shadowMap.needsUpdate = true;
        renderer.compile(scene, camera);
        setStatus("ready");
      })
      .catch(() => {
        if (!disposed) setStatus("error");
      });
    const setRay = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      ndc.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        1 - ((event.clientY - rect.top) / rect.height) * 2,
      );
      raycaster.setFromCamera(ndc, camera);
    };
    const move = (event: PointerEvent) => {
      if (animating || !root) return;
      setRay(event);
      canvas.style.cursor = raycaster.ray.intersectSphere(
        lensHitArea,
        intersection,
      )
        ? "pointer"
        : "default";
    };
    const inspect =
      import.meta.env.DEV &&
      new URLSearchParams(location.search).has("inspectModel");
    const click = (event: PointerEvent) => {
      if (animating || !root || event.button !== 0) return;
      setRay(event);
      if (inspect) {
        const hit = raycaster.intersectObject(root, true)[0];
        if (hit)
          setInspection(
            `${hit.object.name}: [${hit.point
              .toArray()
              .map((v) => v.toFixed(5))
              .join(", ")}] normal [${hit.face?.normal
              .toArray()
              .map((v) => v.toFixed(3))
              .join(", ")}]`,
          );
      } else if (raycaster.ray.intersectSphere(lensHitArea, intersection))
        begin();
    };
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", click);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", click);
      canvas.style.cursor = "";
      beginRef.current = () => {};
      finishRef.current = () => {};
      if (root) disposeDocumentCamera(root);
      ground.geometry.dispose();
      ground.material.dispose();
      disposeLighting();
      renderer.shadowMap.autoUpdate = true;
      renderer.renderLists.dispose();
      if (mount.contains(canvas)) canvas.remove();
    };
  }, [renderer, attempt]);

  return (
    <>
      <div
        className="landing-stage"
        ref={mountRef}
        data-testid="landing-stage"
      />
      <div className="landing-masthead">
        <span className="landing-dot" /> A small study in softness
      </div>
      <h1 className="landing-title" aria-label="Chinese Jelly Study">
        <span>Chinese</span>
        <span>Jelly</span>
        <span className="landing-study">Study</span>
      </h1>
      <div
        className="landing-future-slices"
        data-slot="future-jelly-slices"
        aria-hidden="true"
      />
      {status === "ready" && !props.entering && (
        <button
          ref={entryRef}
          className="camera-entry"
          aria-label="Enter the jelly playground through the black camera lens"
          data-testid="enter-camera"
          onClick={() => beginRef.current()}
        >
          <span className="camera-entry-ring" aria-hidden="true" />
          <span className="camera-entry-label">
            Click the lens to enter <span aria-hidden="true">↗</span>
          </span>
        </button>
      )}
      {!props.entering && (
        <fieldset className="entry-choices" disabled={status === "loading"}>
          <legend>Camera move</legend>
          <div>
            {ENTRY_VARIATIONS.map((option, i) => (
              <button
                key={option.id}
                type="button"
                title={option.description}
                aria-pressed={props.variation === option.id}
                onClick={() => props.onVariation(option.id)}
                data-testid={`transition-${option.id}`}
              >
                <span>0{i + 1}</span> {option.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      {status === "loading" && (
        <div className="landing-status" role="status">
          Preparing the camera
          {progress > 0 ? ` · ${Math.round(progress * 100)}%` : "…"}
        </div>
      )}
      {(status === "error" || status === "unavailable") && (
        <div className="landing-status" role="status">
          <p>
            {status === "error"
              ? "The camera model could not load."
              : "3D camera preview unavailable on this device."}
          </p>
          {status === "error" && (
            <button onClick={() => setAttempt((value) => value + 1)}>
              Try again
            </button>
          )}
          <button onClick={props.onComplete}>Enter the study</button>
        </div>
      )}
      {props.entering && (
        <button className="entry-skip" onClick={() => finishRef.current()}>
          Skip transition
        </button>
      )}
      {inspection && <output className="model-inspection">{inspection}</output>}
      <div className="entry-veil" ref={veilRef} aria-hidden="true" />
    </>
  );
}
