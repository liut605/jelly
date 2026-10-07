import * as THREE from "three";
import {
  createSliceGeometry,
  type SliceGeometryData,
} from "./sliceGeometry.ts";

const smooth = THREE.MathUtils.smoothstep;
const clamp = THREE.MathUtils.clamp;
const flesh = new THREE.Color("#ec842c");
const outerFlesh = new THREE.Color("#e56c21");
const clearAmber = new THREE.Color("#ab4b15");
const heart = new THREE.Color("#833510");
const darkSpeck = new THREE.Color("#562513");

/** Eight tapered internal tissue rays, continuous with the darker center. */
export function driedPersimmonStar(x: number, y: number): number {
  const r = Math.hypot(x, y),
    a = Math.atan2(x, y) - 0.1;
  const folded = Math.atan2(Math.sin(a * 8), Math.cos(a * 8)) / 8;
  const along = clamp((r - 0.07) / 0.72, 0, 1);
  const width = 0.017 + 0.049 * Math.sin(Math.PI * along);
  return (
    (1 - smooth(Math.abs(r * Math.sin(folded)), width * 0.4, width)) *
    smooth(r, 0.055, 0.12) *
    (1 - smooth(r, 0.65, 0.81))
  );
}

/** Only the upward-facing cut is flesh; the rounded side and underside keep their skin. */
export function driedPersimmonCutFace(x: number, y: number, z: number): number {
  return smooth(z, 0.04, 0.16) * (1 - smooth(Math.hypot(x, y), 0.963, 0.992));
}

/** Horizontal cut through a thick dried fruit, with a flat top and supported underside. */
export function mapDriedPersimmonPoint(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const r = Math.min(1, Math.hypot(x, y)),
    a = Math.atan2(x, y);
  const outline = 1.01 + 0.012 * Math.sin(a * 3) + 0.015 * Math.cos(a * 5);
  const pole = Math.sqrt(Math.max(0, 1 - r * r));
  const depth = pole > 1e-6 ? clamp((z / pole + 1) / 2, 0, 1) : 0.5;
  // The planar flesh meets the exterior through a small smooth fillet, not a sharp lip.
  const topRoll = Math.max(0, (r - 0.88) / 0.12);
  const front = -0.16 + 0.26 * Math.sqrt(Math.max(0, 1 - topRoll ** 4));
  const baseRoll = Math.max(0, (r - 0.58) / 0.42);
  const back = -0.16 - 0.34 * Math.sqrt(Math.max(0, 1 - baseRoll ** 2));
  return [x * outline, THREE.MathUtils.lerp(back, front, depth), -y * outline];
}

/** Fine dried-skin folds stay outside the exposed, smooth cut face. */
export function mapDriedPersimmonSurface(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const p = mapDriedPersimmonPoint(x, y, z);
  const r = Math.hypot(x, y),
    a = Math.atan2(x, y);
  const rind = (1 - driedPersimmonCutFace(x, y, z)) * smooth(r, 0.8, 0.98);
  const fold = Math.sin(a * 53 + r * 21 + Math.sin(a * 7) * 1.6) * rind * 0.003;
  p[0] *= 1 + fold;
  p[2] *= 1 + fold;
  return p;
}

const hash = (x: number, y: number, z: number): number => {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
};

function fleshColor(x: number, y: number): THREE.Color {
  const r = Math.hypot(x, y),
    a = Math.atan2(x, y);
  const color = flesh.clone().lerp(outerFlesh, smooth(r, 0.2, 0.94) * 0.5);
  color.lerp(clearAmber, driedPersimmonStar(x, y) * 0.7);
  const coreRadius = r / (1 + 0.1 * Math.cos(a * 8));
  return color.lerp(heart, (1 - smooth(coreRadius, 0.035, 0.225)) * 0.9);
}

/** Material-space interior for the current cut face and later arbitrary cutting. */
export function driedPersimmonInteriorColor(
  x: number,
  y: number,
  z: number,
): THREE.Color {
  const color = fleshColor(x, y);
  const cell = [x, y, z].map((v) => Math.floor(v * 105));
  const grain = hash(cell[0], cell[1], cell[2]);
  const local = [x, y, z].map((v, i) => v * 105 - cell[i] - 0.5);
  const speckle =
    grain > 0.92 ? 1 - smooth(Math.hypot(...local), 0.13, 0.3) : 0;
  return color.lerp(darkSpeck, speckle * 0.88);
}

export function createDriedPersimmonGeometry(): SliceGeometryData {
  const orange = new THREE.Color("#c35925"),
    warm = new THREE.Color("#df7730"),
    frost = new THREE.Color("#f6eee2");
  return createSliceGeometry(
    mapDriedPersimmonSurface,
    (_point, [x, y, z]) => {
      const variation = 0.5 + 0.5 * Math.sin(x * 9 + Math.sin(y * 7) + z * 3);
      const powder = hash(
        Math.floor(x * 175),
        Math.floor(y * 175),
        Math.floor(z * 175),
      );
      const color = orange.clone().lerp(warm, variation * 0.45);
      // Vertex colors preserve the flesh/star and an exterior dusting in software previews.
      color.lerp(frost, 0.035 + 0.1 * powder);
      return color.lerp(fleshColor(x, y), driedPersimmonCutFace(x, y, z));
    },
    { rings: 144, sides: 288 },
  );
}

export function addDriedPersimmonAppearance(
  material: THREE.MeshPhysicalMaterial,
): void {
  material.attenuationColor.set("#ffc27d");
  material.attenuationDistance = 1.45;
  material.sheenColor.set("#fff0dd");
  material.clearcoat = 0.18;
  const compile = material.onBeforeCompile.bind(material),
    key = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nattribute vec3 aFleshCoordinate;varying vec3 vDried;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "void main() {\nvDried=aFleshCoordinate;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
varying vec3 vDried;
float dryHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float dryNoise(vec3 p){
 vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(mix(dryHash(i),dryHash(i+vec3(1,0,0)),f.x),mix(dryHash(i+vec3(0,1,0)),dryHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(dryHash(i+vec3(0,0,1)),dryHash(i+vec3(1,0,1)),f.x),mix(dryHash(i+vec3(0,1,1)),dryHash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
float dryCutFace(vec3 p){return smoothstep(.04,.16,p.z)*(1.0-smoothstep(.963,.992,length(p.xy)));}
float dryStar(vec2 p){
 float r=length(p),a=atan(p.x,p.y)-.1;
 float folded=atan(sin(a*8.0),cos(a*8.0))/8.0;
 float along=clamp((r-.07)/.72,0.0,1.0),width=.017+.049*sin(3.14159265*along);
 return (1.0-smoothstep(width*.4,width,abs(r*sin(folded))))*smoothstep(.055,.12,r)*(1.0-smoothstep(.65,.81,r));
}
float dryPowder(vec3 p){
 float bloom=smoothstep(.25,.78,dryNoise(p*4.0)*.55+dryNoise(p*13.0)*.45);
 float grit=dryHash(floor(p*210.0))*.7+dryHash(floor(p*105.0))*.3;
 return (.3+.52*bloom)*smoothstep(.30,.68,grit)*(1.0-dryCutFace(p));
}
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
float dr=length(vDried.xy),da=atan(vDried.x,vDried.y),cutFace=dryCutFace(vDried),powder=dryPowder(vDried);
float star=dryStar(vDried.xy)*cutFace;
float fold=pow(.5+.5*sin(da*53.0+dr*21.0+sin(da*7.0)*1.6),12.0)*smoothstep(.22,.4,dr);
diffuseColor.rgb*=1.0-fold*.12*(1.0-cutFace);
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.94,.90,.83),powder*.72);
// Fine irregular dark speckles sit within the exposed flesh, including the darker heart.
vec2 grainPosition=vDried.xy*105.0,cell=floor(grainPosition);
float grain=dryHash(vec3(cell,0.0));
vec2 grainCenter=vec2(dryHash(vec3(cell,19.7)),dryHash(vec3(cell,53.1)))*.6+.2;
float spotDistance=length(fract(grainPosition)-grainCenter);
float spotSize=mix(.14,.29,dryHash(vec3(cell,8.2)));
float aa=max(fwidth(spotDistance)*.5,.015);
float spots=step(.92,grain)*(1.0-smoothstep(spotSize-aa,spotSize+aa,spotDistance));
float fibers=pow(.5+.5*sin(da*184.0+dr*17.0+sin(da*13.0)*.7),22.0);
float rings=pow(.5+.5*cos(dr*198.0+sin(da*5.0)*.35),28.0);
float tissueGrain=dryHash(floor(vDried*380.0))-.5;
diffuseColor.rgb*=1.0+tissueGrain*.035*cutFace;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.9,.53,.19),(fibers*.045+rings*.025)*cutFace*(1.0-star));
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.019,.006),spots*.86*cutFace*(1.0-star*.25));
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      "#include <roughnessmap_fragment>\nroughnessFactor=mix(.54+.34*dryPowder(vDried),mix(.50,.35,dryStar(vDried.xy)),dryCutFace(vDried));",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <transmission_fragment>",
      THREE.ShaderChunk.transmission_fragment
        .replace(
          "material.transmission = transmission;",
          "material.transmission = mix(.60*(1.0-.75*dryPowder(vDried)),mix(.60,.94,dryStar(vDried.xy)),dryCutFace(vDried));",
        )
        .replace(
          "material.thickness = thickness;",
          "material.thickness = thickness * mix(1.0,.62,dryStar(vDried.xy)*dryCutFace(vDried));",
        ),
    );
  };
  material.customProgramCacheKey = () => key + "-dried-persimmon-slice-v4";
}
