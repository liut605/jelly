import * as THREE from "three";
import {
  createSliceGeometry,
  type SliceGeometryData,
} from "./sliceGeometry.ts";

export type PeachGeometryData = SliceGeometryData;
export const PEACH_HALF_HEIGHT = 1.2;
export const PEACH_RINGS = 112;
export const PEACH_SIDES = 144;
const smooth = (x: number, a: number, b: number): number =>
  THREE.MathUtils.smoothstep(x, a, b);

/** Longitudinal socket: narrow toward the fruit tip, fuller at its base. */
export function pitRadius(x: number, y: number): number {
  const vertical = (y - 0.045) / 0.55;
  const width = 0.38 * (1 - 0.3 * THREE.MathUtils.clamp(vertical, -1, 1));
  return Math.hypot(x / width, vertical);
}

/** A solid slice with a concave, empty pit socket. There is no pit mesh.
 * Mapping the interior as well as the skin prevents a hidden solid core from
 * spanning the cavity. The exposed cut face points upward; the slice rests flat in the X/Z plane.
 */
export function mapPeachSlicePoint(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const radius = Math.min(1, Math.hypot(x, y));
  const angle = Math.atan2(x, y);
  const tip = Math.exp(
    -((Math.atan2(Math.sin(angle), Math.cos(angle)) / 0.34) ** 2),
  );
  const width =
    1.03 * (1 + 0.045 * Math.cos(angle) - 0.04 * Math.cos(2 * angle));
  const px = Math.sin(angle) * radius * width;
  const py = Math.cos(angle) * radius * (1.07 + 0.1 * tip);
  const pole = Math.sqrt(Math.max(0, 1 - radius * radius));
  // Circular fillet: the face rolls into the side with a shared tangent.
  const roll = Math.max(0, (radius - 0.82) / 0.18);
  const edge = Math.sqrt(Math.max(0, 1 - roll * roll));
  const socketRadius = pitRadius(px, py);
  const socket = 1 - smooth(socketRadius, 0.08, 1.08);
  const front = 0.11 * edge - 0.16 * socket;
  // A slice rests on a broad base, rather than balancing on the single lowest
  // point of a hemispherical underside. The outer shoulder remains rounded.
  const baseRoll = Math.max(0, (radius - 0.6) / 0.4);
  const back = -0.54 * Math.sqrt(Math.max(0, 1 - baseRoll * baseRoll));
  const depth =
    pole > 1e-6 ? THREE.MathUtils.clamp((z / pole + 1) / 2, 0, 1) : 0.5;
  return [px, THREE.MathUtils.lerp(back, front, depth), -py];
}

export function createPeachGeometry(): PeachGeometryData {
  const cream = new THREE.Color("#eee3cd"),
    palePink = new THREE.Color("#f2dcd3"),
    tipPink = new THREE.Color("#ce285c"),
    centerPink = new THREE.Color("#bd2853"),
    socketPink = new THREE.Color("#b23d60");
  return createSliceGeometry(mapPeachSlicePoint, (point, material) => {
    const px = point[0],
      py = -point[2],
      radial = pitRadius(px, py),
      face = smooth(material[2], -0.06, 0.12),
      center = (1 - smooth(radial, 0.75, 1.85)) * face,
      top = smooth(py, -0.15, 1.14);
    const color = cream.clone().lerp(palePink, 0.22 + top * 0.3);
    color
      .lerp(tipPink, top * top * 0.95)
      .lerp(centerPink, center * 0.88)
      .lerp(socketPink, (1 - smooth(radial, 0.1, 0.72)) * face * 0.25);
    return color;
  });
}

/** Color-only fibers and flecks below a smooth optical surface, fixed to the
 * material coordinates so grabbing stretches the pattern with the flesh. */
export function addPeachFleshAppearance(
  material: THREE.MeshPhysicalMaterial,
): void {
  const compile = material.onBeforeCompile.bind(material);
  const previousKey = material.customProgramCacheKey.bind(material);
  const key = previousKey();
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.uniforms.uFiberRose = { value: new THREE.Color("#bc345d") };
    shader.uniforms.uFiberCream = { value: new THREE.Color("#f9eee0") };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nattribute vec3 aFleshCoordinate;varying vec3 vFlesh;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      "#include <begin_vertex>\nvFlesh=aFleshCoordinate;",
    );
    // The soft-body hook replaces begin_vertex first; assign from main instead.
    if (!shader.vertexShader.includes("vFlesh=aFleshCoordinate;"))
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        "void main() {\nvFlesh=aFleshCoordinate;",
      );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
varying vec3 vFlesh;uniform vec3 uFiberRose,uFiberCream;
float fleshHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
vec2 flesh=vFlesh.xy;float radius=length(flesh);float angle=atan(flesh.x,flesh.y-0.035);
float face=smoothstep(-0.04,0.15,vFlesh.z);
float fibers=pow(0.5+0.5*sin(angle*126.0+sin(angle*31.0)*2.4+radius*14.0),14.0);
fibers*=smoothstep(0.2,0.38,radius)*(1.0-smoothstep(0.77,0.97,radius));
fibers*=0.4+0.6*(0.5+0.5*sin(radius*93.0+angle*7.0));
float paleFibers=pow(0.5+0.5*sin(flesh.x*105.0+sin(flesh.y*9.0)*1.8+flesh.y*18.0),12.0);
paleFibers*=0.5+0.5*sin(flesh.y*29.0+flesh.x*11.0);
vec2 cells=flesh*85.0,cell=floor(cells);float seed=fleshHash(cell);
vec2 offset=vec2(fleshHash(cell+vec2(4.1,8.7)),fleshHash(cell+vec2(3.2,9.1)))*0.6+0.2;
float flecks=(1.0-smoothstep(0.04,0.17,length(fract(cells)-offset)))*step(0.945,seed);
float centerTint=1.0-smoothstep(0.4,0.95,radius);
diffuseColor.rgb=mix(diffuseColor.rgb,uFiberRose,face*(fibers*(0.13+0.32*centerTint)+flecks*0.42));
diffuseColor.rgb*=1.0-0.07*(1.0-smoothstep(0.10,0.48,radius))*face;
diffuseColor.rgb=mix(diffuseColor.rgb,uFiberCream,paleFibers*(0.015+0.09*smoothstep(0.3,0.65,radius))*(0.3+0.7*face));
`,
    );
  };
  material.customProgramCacheKey = () => `${key}-peach-slice-fibers-v1`;
}
