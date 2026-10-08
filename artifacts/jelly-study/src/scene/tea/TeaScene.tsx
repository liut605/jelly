import { useEffect, useRef, useState, type PointerEvent } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { useStudioRenderer } from "../studio";
import { disposeDocumentCamera } from "../documentCamera";
import { applyTeaShadowShader, createTeaLighting } from "./teaLighting";
// Lazy-loaded by the tea landing page; the playground never downloads this model.
import teaSetUrl from "../../../../../attached_assets/tea-set-web.glb?url";

type TeaObject = "teapot" | "teacup";
interface Part {
  id: TeaObject;
  pivot: THREE.Group;
  rest: THREE.Vector3;
  bounds: THREE.Box3;
  value: number;
  velocity: number;
  cursor: THREE.Vector2;
}

export default function TeaScene() {
  const renderer = useStudioRenderer();
  const mountRef = useRef<HTMLDivElement>(null);
  const potRef = useRef<HTMLButtonElement>(null);
  const cupRef = useRef<HTMLButtonElement>(null);
  const targets = useRef({ teapot: false, teacup: false });
  const cursors = useRef({
    teapot: new THREE.Vector2(),
    teacup: new THREE.Vector2(),
  });
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (!renderer) {
      setStatus("3D preview requires WebGL.");
      return;
    }
    let disposed = false,
      frame = 0,
      last = 0,
      dirty = true;
    let source: THREE.Group | null = null;
    const parts: Part[] = [];
    const scene = new THREE.Scene(),
      layout = new THREE.Group();
    layout.rotation.y = Math.PI;
    scene.add(layout);
    const camera = new THREE.PerspectiveCamera(28, 1, 0.01, 20);
    const originalShadowType = renderer.shadowMap.type;
    const originalAutoUpdate = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    const disposeLights = createTeaLighting(scene);
    const groundMaterial = new THREE.ShadowMaterial({
      color: "#494335",
      opacity: 0.23,
      depthWrite: false,
    });
    applyTeaShadowShader(groundMaterial);
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 12),
      groundMaterial,
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.002;
    ground.receiveShadow = true;
    scene.add(ground);
    const canvas = renderer.domElement;
    canvas.dataset.testid = "tea-draft-canvas";
    canvas.setAttribute("aria-hidden", "true");
    mount.prepend(canvas);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const reduceChanged = () => {
      dirty = true;
    };
    reduced.addEventListener("change", reduceChanged);
    let width = 1,
      height = 1;
    const placeHotspots = () => {
      layout.updateMatrixWorld(true);
      for (const part of parts) {
        const button = part.id === "teapot" ? potRef.current : cupRef.current;
        if (!button) continue;
        const screen = new THREE.Box2();
        for (const x of [part.bounds.min.x, part.bounds.max.x])
          for (const y of [part.bounds.min.y, part.bounds.max.y])
            for (const z of [part.bounds.min.z, part.bounds.max.z]) {
              const p = layout
                .localToWorld(new THREE.Vector3(x, y, z))
                .project(camera);
              screen.expandByPoint(
                new THREE.Vector2(
                  ((p.x + 1) * width) / 2,
                  ((1 - p.y) * height) / 2,
                ),
              );
            }
        button.style.left = `${screen.min.x}px`;
        button.style.top = `${screen.min.y}px`;
        button.style.width = `${screen.max.x - screen.min.x}px`;
        button.style.height = `${screen.max.y - screen.min.y}px`;
      }
    };
    const resize = () => {
      width = Math.max(1, mount.clientWidth);
      height = Math.max(1, mount.clientHeight);
      renderer.setPixelRatio(
        Math.min(devicePixelRatio || 1, width < 500 ? 1.5 : 2),
      );
      renderer.setSize(width, height);
      camera.aspect = width / height;
      const fit = Math.max(0.82 / 2, 1.08 / (2 * camera.aspect));
      const distance =
        fit / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) + 0.28;
      camera.position.set(0, 0.36 + distance * 0.19, distance);
      camera.lookAt(0, 0.36, 0);
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      placeHotspots();
      dirty = true;
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();
    setReady(false);
    setStatus("");
    new GLTFLoader()
      .setMeshoptDecoder(MeshoptDecoder)
      .loadAsync(teaSetUrl)
      .then((gltf) => {
        if (disposed) {
          disposeDocumentCamera(gltf.scene);
          return;
        }
        source = gltf.scene;
        const materials = new Set<THREE.Material>();
        for (const [name, id] of [
          ["Teapot", "teapot"],
          ["Teacup", "teacup"],
        ] as const) {
          const mesh = source.getObjectByName(name);
          if (!(mesh instanceof THREE.Mesh))
            throw new Error(`Missing separated ${name}`);
          mesh.geometry.computeBoundingBox();
          const bounds = mesh.geometry.boundingBox!.clone();
          const center = bounds.getCenter(new THREE.Vector3());
          const pivot = new THREE.Group();
          pivot.name = `${name} hover pivot`;
          pivot.position.set(center.x, 0, center.z);
          mesh.position.set(-center.x, -bounds.min.y, -center.z);
          pivot.add(mesh);
          layout.add(pivot);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          for (const material of Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material]) {
            if (!materials.has(material)) {
              applyTeaShadowShader(material);
              materials.add(material);
            }
            if (material instanceof THREE.MeshStandardMaterial) {
              for (const texture of [
                material.map,
                material.normalMap,
                material.roughnessMap,
                material.metalnessMap,
              ])
                if (texture)
                  texture.anisotropy = Math.min(
                    8,
                    renderer.capabilities.getMaxAnisotropy(),
                  );
            }
          }
          bounds.translate(new THREE.Vector3(0, -bounds.min.y, 0));
          parts.push({
            id,
            pivot,
            rest: pivot.position.clone(),
            bounds,
            value: 0,
            velocity: 0,
            cursor: new THREE.Vector2(),
          });
        }
        resize();
        setReady(true);
        setStatus("");
        dirty = true;
      })
      .catch((error) => {
        if (!disposed) {
          console.error(error);
          setStatus("The tea model could not load.");
        }
      });
    const draw = (time: number) => {
      if (disposed) return;
      const dt = last ? Math.min((time - last) / 1000, 1 / 30) : 1 / 60;
      last = time;
      if (!document.hidden) {
        let moving = false;
        for (const part of parts) {
          const previousValue = part.value;
          const previousX = part.cursor.x,
            previousY = part.cursor.y;
          const target = reduced.matches ? 0 : targets.current[part.id] ? 1 : 0;
          if (reduced.matches) {
            part.value = 0;
            part.velocity = 0;
          }
          part.velocity +=
            ((target - part.value) * 70 - part.velocity * 17) * dt;
          part.value += part.velocity * dt;
          if (
            Math.abs(target - part.value) < 0.0001 &&
            Math.abs(part.velocity) < 0.0001
          ) {
            part.value = target;
            part.velocity = 0;
          }
          const aim = cursors.current[part.id];
          part.cursor.lerp(aim, 1 - Math.exp(-10 * dt));
          if (part.cursor.distanceToSquared(aim) < 1e-8) part.cursor.copy(aim);
          moving ||=
            previousValue !== part.value ||
            (part.value > 0 &&
              (previousX !== part.cursor.x || previousY !== part.cursor.y));
          part.pivot.position.copy(part.rest);
          part.pivot.position.y +=
            part.value * (part.id === "teapot" ? 0.022 : 0.016);
          // The model faces the camera after a half turn, so local X/Z have
          // opposite signs to screen-right/front. Follow the pointer gently.
          part.pivot.position.x -= part.cursor.x * part.value * 0.035;
          part.pivot.position.z -= part.cursor.y * part.value * 0.028;
          part.pivot.rotation.set(
            part.cursor.y * part.value * 0.018,
            part.value *
              ((part.id === "teapot" ? -0.06 : 0.08) + part.cursor.x * 0.04),
            part.cursor.x * part.value * 0.016,
          );
          const button = part.id === "teapot" ? potRef.current : cupRef.current;
          if (button) {
            button.dataset.hoverAmount = part.value.toFixed(3);
            button.dataset.motionOffset = part.pivot.position
              .clone()
              .sub(part.rest)
              .toArray()
              .map((v) => v.toFixed(4))
              .join(",");
          }
        }
        if (dirty || moving) {
          // Re-render the real shadow map for every cursor-driven pose change,
          // including pointer motion after the initial hover has settled.
          renderer.shadowMap.needsUpdate = true;
          renderer.setRenderTarget(null);
          renderer.setClearColor(0x000000, 0);
          renderer.render(scene, camera);
          dirty = false;
        }
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      clearTimeout(pulseTimer.current);
      resizeObserver.disconnect();
      reduced.removeEventListener("change", reduceChanged);
      disposeLights();
      ground.geometry.dispose();
      groundMaterial.dispose();
      // All loaded meshes now live in layout; shared maps are disposed once.
      disposeDocumentCamera(layout);
      if (source) disposeDocumentCamera(source);
      canvas.remove();
      renderer.shadowMap.type = originalShadowType;
      renderer.shadowMap.autoUpdate = originalAutoUpdate;
      renderer.shadowMap.needsUpdate = true;
    };
  }, [renderer, attempt]);
  const focus = (id: TeaObject, active: boolean) => {
    targets.current[id] = active;
  };
  const trackCursor = (
    id: TeaObject,
    event: PointerEvent<HTMLButtonElement>,
  ) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    cursors.current[id].set(
      THREE.MathUtils.clamp(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -1,
        1,
      ),
      THREE.MathUtils.clamp(
        ((event.clientY - rect.top) / rect.height) * 2 - 1,
        -1,
        1,
      ),
    );
  };
  const pulse = (id: TeaObject) => {
    clearTimeout(pulseTimer.current);
    targets.current.teapot = id === "teapot";
    targets.current.teacup = id === "teacup";
    pulseTimer.current = setTimeout(() => {
      targets.current[id] = false;
    }, 500);
  };
  return (
    <div className="tea-stage" ref={mountRef} data-testid="tea-stage">
      {(["teapot", "teacup"] as const).map((id) => (
        <button
          key={id}
          ref={id === "teapot" ? potRef : cupRef}
          className="tea-object-target"
          data-testid={`tea-${id}`}
          aria-label={`Gently move the ${id === "teapot" ? "teapot" : "tea cup"}`}
          disabled={!ready}
          onPointerEnter={(e) => {
            trackCursor(id, e);
            if (e.pointerType !== "touch") focus(id, true);
          }}
          onPointerMove={(e) => trackCursor(id, e)}
          onPointerLeave={() => focus(id, false)}
          onFocus={() => focus(id, true)}
          onBlur={() => focus(id, false)}
          onClick={() => pulse(id)}
        />
      ))}
      {status && (
        <div className="tea-load-status" role="status">
          {status}
          {status.includes("could not") && (
            <button onClick={() => setAttempt((a) => a + 1)}>Retry</button>
          )}
        </div>
      )}
    </div>
  );
}
