import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as THREE from "three";

const StudioContext = createContext<THREE.WebGLRenderer | null>(null);
export const useStudioRenderer = () => useContext(StudioContext);

/** A single WebGL context is handed between landing and playground worlds. */
export function StudioHost({ children }: { children: ReactNode }) {
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>();
  useEffect(() => {
    let next: THREE.WebGLRenderer | null = null;
    try {
      if (
        new URLSearchParams(location.search).get("preview") !== "canvas" &&
        !(
          import.meta.env.DEV &&
          new URLSearchParams(location.search).get("renderer") === "none"
        )
      ) {
        next = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
        next.outputColorSpace = THREE.SRGBColorSpace;
        next.toneMapping = THREE.ACESFilmicToneMapping;
        next.toneMappingExposure = 1.14;
        next.shadowMap.enabled = true;
        next.shadowMap.type = THREE.PCFShadowMap;
      }
    } catch {
      /* Accessible entry and the software still preview remain usable. */
    }
    const lost = (event: Event) => {
      event.preventDefault();
      setRenderer(null);
    };
    next?.domElement.addEventListener("webglcontextlost", lost);
    setRenderer(next);
    return () => {
      next?.domElement.removeEventListener("webglcontextlost", lost);
      next?.dispose();
    };
  }, []);
  if (renderer === undefined)
    return (
      <div className="studio-loading" role="status">
        Preparing the study…
      </div>
    );
  return (
    <StudioContext.Provider value={renderer}>{children}</StudioContext.Provider>
  );
}

/** Shared palette, light direction, exposure and shadow treatment. */
export function addStudioLighting(scene: THREE.Scene): () => void {
  const ambient = new THREE.HemisphereLight("#fff4d9", "#72846d", 2.35);
  const key = new THREE.DirectionalLight("#fff5df", 3.2);
  key.position.set(-3.8, 5.3, 4.5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, {
    left: -2.5,
    right: 2.5,
    top: 3,
    bottom: -3,
  });
  key.shadow.bias = -0.00015;
  key.shadow.normalBias = 0.008;
  key.shadow.radius = 10;
  const softbox = new THREE.DirectionalLight("#f1a8a0", 2.2);
  softbox.position.set(4.1, 1.7, 1.9);
  const rim = new THREE.DirectionalLight("#fff0bf", 3.2);
  rim.position.set(0.4, 1.2, -4.2);
  const fill = new THREE.PointLight("#d6e4c1", 0.95, 12);
  fill.position.set(-2, -1.2, 2.8);
  scene.add(ambient, key, softbox, rim, fill);
  return () => {
    key.shadow.map?.dispose();
    scene.remove(ambient, key, softbox, rim, fill);
  };
}

export function createStudioGround(): THREE.Mesh<
  THREE.PlaneGeometry,
  THREE.ShadowMaterial
> {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.ShadowMaterial({
      color: 0x514336,
      opacity: 0.13,
      depthWrite: false,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  ground.renderOrder = -2;
  return ground;
}
