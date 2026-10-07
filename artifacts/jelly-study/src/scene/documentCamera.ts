import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

// Explicit semantic anchors. Tripo's 12 meshes are retained as source pieces,
// not treated as mechanical joints. Future articulation needs an authored rig.
export const DOCUMENT_CAMERA = {
  url: `${import.meta.env.BASE_URL}models/document-camera.glb`,
  head: new THREE.Vector3(-0.244, 0.85, 0.186),
  lens: new THREE.Vector3(-0.18542, 0.91221, 0.17161),
  lensNormal: new THREE.Vector3(-0.457, 0.86, 0.227).normalize(),
  focus: new THREE.Vector3(0, 0.49, 0),
};

export function disposeDocumentCamera(root: THREE.Object3D): void {
  const materials = new Set<THREE.Material>(),
    textures = new Set<THREE.Texture>();
  root.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;
    object.geometry.dispose();
    for (const material of Array.isArray(object.material)
      ? object.material
      : [object.material]) {
      materials.add(material);
      for (const value of Object.values(material))
        if (value instanceof THREE.Texture) textures.add(value);
    }
  });
  materials.forEach((material) => material.dispose());
  textures.forEach((texture) => {
    texture.dispose();
    if (texture.image instanceof ImageBitmap) texture.image.close();
  });
}

export async function loadDocumentCamera(
  progress: (fraction: number) => void,
): Promise<THREE.Group> {
  const gltf = await new GLTFLoader()
    .setMeshoptDecoder(MeshoptDecoder)
    .loadAsync(DOCUMENT_CAMERA.url, (event) => {
      if (event.total > 0) progress(event.loaded / event.total);
    });
  const root = gltf.scene;
  root.name = "Document camera asset";
  root.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;
    object.castShadow = true;
    object.receiveShadow = true;
    object.userData.sourcePart = object.name;
    // Use the GLB's original yellow/grey pigment, PBR maps and authored normals.
    // No mesh decimation, recoloring or replacement surface treatment.
  });
  return root;
}
