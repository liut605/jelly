import * as THREE from "three";
import {
  createSliceGeometry,
  type SliceGeometryData,
} from "./sliceGeometry.ts";

import { createPerforatedSlice } from "./perforatedSlice.ts";

const smooth = THREE.MathUtils.smoothstep;
const TAU = Math.PI * 2;
const flesh = new THREE.Color("#c4877c");
const rind = new THREE.Color("#a96359");
const rice = new THREE.Color("#fff9e9");
const flowerGold = new THREE.Color("#ffd644");

/** x, y, rotation, radius, in undeformed material coordinates. */
export const OSMANTHUS_FLOWERS = [
  [-0.594, 0.594, 0.3, 0.049],
  [-0.184, 0.049, 1.1, 0.041],
  [0.695, 0.186, 0.7, 0.048],
  [0.186, -0.695, -0.4, 0.044],
  [0.594, -0.594, 0.2, 0.045],
  [-0.39, 0.7, 0.6, 0.029],
  [0.42, 0.62, -0.3, 0.027],
  [-0.39, -0.6, 1.3, 0.031],
  [0.12, 0.33, 0.8, 0.025],
] as const;

const hash = (x: number, y: number): number => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
};

type Channel = readonly [number, number, number, number, number];
const polarChannel = (
  angle: number,
  radius: number,
  width: number,
  length: number,
  tilt = 0,
): Channel => [
  Math.sin(angle) * radius,
  Math.cos(angle) * radius,
  angle + tilt,
  width,
  length,
];

/** Uneven sizes and spacing retain the characteristic dial-like ring. */
export const LOTUS_CHAMBERS: readonly Channel[] = [
  polarChannel(0.02, 0.55, 0.137, 0.235, -0.11),
  polarChannel(0.91, 0.57, 0.14, 0.195, 0.06),
  polarChannel(1.68, 0.52, 0.145, 0.22, -0.1),
  polarChannel(2.43, 0.57, 0.126, 0.215, 0.11),
  polarChannel(3.22, 0.535, 0.153, 0.247, -0.045),
  polarChannel(4.02, 0.53, 0.135, 0.204, 0.14),
  polarChannel(4.78, 0.57, 0.136, 0.22, -0.02),
  polarChannel(5.54, 0.52, 0.141, 0.24, 0.08),
];
export const LOTUS_HOLLOW_CHANNELS: readonly Channel[] = [
  ...Array.from({ length: 8 }, (_, i) =>
    polarChannel(
      (i * TAU) / 8 + 0.43 + 0.06 * Math.sin(i * 2.7),
      0.815 + 0.014 * Math.sin(i * 1.3),
      0.026 + 0.007 * hash(i, 7),
      0.036 + 0.011 * hash(i, 13),
      0.22 * Math.sin(i * 1.9),
    ),
  ),
  ...Array.from({ length: 6 }, (_, i) =>
    polarChannel(
      (i * TAU) / 6 + 0.39 + 0.1 * Math.sin(i * 2.4),
      0.224 + 0.025 * Math.sin(i * 1.8),
      0.025 + 0.007 * hash(i, 4),
      0.034 + 0.012 * hash(i, 16),
      0.4 * Math.sin(i),
    ),
  ),
];
function channelDistance(
  x: number,
  y: number,
  channels: readonly Channel[],
): number {
  let d = 20;
  for (const [cx, cy, angle, width, length] of channels) {
    const qx = x - cx,
      qy = y - cy;
    const across = (qx * Math.cos(angle) - qy * Math.sin(angle)) / width;
    const along = (qx * Math.sin(angle) + qy * Math.cos(angle)) / length;
    d = Math.min(
      d,
      Math.pow(Math.abs(across) ** 2.3 + Math.abs(along) ** 2.3, 1 / 2.3),
    );
  }
  return d;
}
export function lotusChamberDistance(x: number, y: number): number {
  const r = Math.hypot(x - 0.014, y + 0.009),
    a = Math.atan2(x, y);
  return Math.min(
    r / (0.097 * (1 + 0.07 * Math.cos(a * 7))),
    channelDistance(x, y, LOTUS_CHAMBERS),
  );
}
export function lotusHollowDistance(x: number, y: number): number {
  return channelDistance(x, y, LOTUS_HOLLOW_CHANNELS);
}
export function lotusRiceMask(x: number, y: number): number {
  return (
    (1 - smooth(lotusChamberDistance(x, y), 0.84, 1.02)) *
    smooth(lotusHollowDistance(x, y), 1.0, 1.35)
  );
}

/** Packed, irregularly rotated oval grains, rather than a tiled dot texture. */
export function lotusRiceGrain(x: number, y: number): number {
  const px = x * 31,
    py = y * 31,
    cx = Math.floor(px),
    cy = Math.floor(py);
  let distance = 9;
  for (let i = -1; i <= 1; i++)
    for (let j = -1; j <= 1; j++) {
      const gx = cx + i,
        gy = cy + j;
      if (hash(gx + 41, gy + 17) < 0.74) continue;
      const qx = px - gx - 0.5 - (hash(gx + 19.7, gy) - 0.5) * 0.55;
      const qy = py - gy - 0.5 - (hash(gx, gy + 53.1) - 0.5) * 0.55;
      const a = hash(gx, gy) * TAU;
      distance = Math.min(
        distance,
        Math.hypot(
          (qx * Math.cos(a) + qy * Math.sin(a)) / 0.64,
          (-qx * Math.sin(a) + qy * Math.cos(a)) / 0.34,
        ),
      );
    }
  return 1 - smooth(distance, 0.15, 1.08);
}

/** Five small four-petalled blossoms, slightly embedded in the top surface. */
export function osmanthusMask(x: number, y: number): number {
  let flower = 0;
  for (const [fx, fy, rotation, size] of OSMANTHUS_FLOWERS) {
    const qx = (x - fx) / size,
      qy = (y - fy) / size;
    let petal = 1 - smooth(Math.hypot(qx, qy), 0.12, 0.25);
    for (let i = 0; i < 4; i++) {
      const a = rotation + (i * Math.PI) / 2;
      const along = qx * Math.cos(a) + qy * Math.sin(a);
      const across = -qx * Math.sin(a) + qy * Math.cos(a);
      petal = Math.max(
        petal,
        1 - smooth(Math.hypot((along - 0.43) / 0.44, across / 0.265), 0.72, 1),
      );
    }
    flower = Math.max(flower, petal);
  }
  return flower;
}

function cutFace(x: number, y: number, z: number): number {
  return (
    smooth(Math.abs(z), 0.04, 0.2) * (1 - smooth(Math.hypot(x, y), 0.95, 0.985))
  );
}

/** Filled channels form one continuous composite volume with the root flesh.
 * A level underside and rounded rim retain the existing stable floor contact. */
export function mapLotusRootPoint(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const r = Math.min(1, Math.hypot(x, y)),
    a = Math.atan2(x, y);
  const pole = Math.sqrt(Math.max(0, 1 - r * r));
  const depth = pole > 1e-6 ? THREE.MathUtils.clamp(z / pole, -1, 1) : 0;
  const outline = 1.02 + 0.009 * Math.sin(a * 3) + 0.006 * Math.cos(a * 5);
  const roll = Math.max(0, (r - 0.89) / 0.11);
  const edge = Math.sqrt(Math.max(0, 1 - roll ** 4));
  return [x * outline, -0.16 + depth * 0.34 * edge, -y * outline];
}

export function mapLotusRootSurface(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const p = mapLotusRootPoint(x, y, z);
  const face = cutFace(x, y, z) * smooth(z, 0, 0.2);
  if (face > 0) {
    const filling = lotusRiceMask(x, y);
    const grain = filling > 0 ? lotusRiceGrain(x, y) : 0;
    // The rice sits just inside its red channel rim; grains and petals have actual relief.
    p[1] +=
      face * (filling * (-0.011 + 0.004 * grain) + osmanthusMask(x, y) * 0.012);
  }
  return p;
}

/** The channel pattern extends through the volume for future exposed cut faces. */
export function lotusRootInteriorColor(
  x: number,
  y: number,
  _z: number,
): THREE.Color {
  const filling = lotusRiceMask(x, y);
  return flesh.clone().lerp(rice, filling);
}

export function createLotusRootGeometry(): SliceGeometryData {
  // The coarse simulation retains its regular grid; the detailed visible
  // surface is independently triangulated around exact, shared hole contours.
  const volume = createSliceGeometry(mapLotusRootPoint, () => flesh, {
    rings: 64,
    sides: 96,
  });
  volume.geometry.dispose();
  const holes = LOTUS_HOLLOW_CHANNELS.map(([cx, cy, angle, width, length]) =>
    Array.from({ length: 32 }, (_, i) => {
      const a = (i * TAU) / 32;
      const across =
        Math.sign(Math.cos(a)) *
        Math.abs(Math.cos(a)) ** (2 / 2.3) *
        width *
        1.2;
      const along =
        Math.sign(Math.sin(a)) *
        Math.abs(Math.sin(a)) ** (2 / 2.3) *
        length *
        1.2;
      return new THREE.Vector2(
        cx + across * Math.cos(angle) + along * Math.sin(angle),
        cy - across * Math.sin(angle) + along * Math.cos(angle),
      );
    }),
  );
  const geometry = createPerforatedSlice(
    holes,
    mapLotusRootSurface,
    ([x, y, z], wall) => {
      const face = cutFace(x, y, z),
        filling = lotusRiceMask(x, y) * face * (1 - wall);
      const color = rind.clone().lerp(flesh, face);
      const grain = filling > 0 ? lotusRiceGrain(x, y) : 0;
      color.lerp(rice.clone().multiplyScalar(0.95 + grain * 0.05), filling);
      color.multiplyScalar(1 - wall * 0.12);
      color.lerp(
        flowerGold,
        osmanthusMask(x, y) * smooth(z, 0.1, 0.3) * (1 - wall),
      );
      return color;
    },
  );
  return {
    ...volume,
    geometry,
    sourcePositions: new Float32Array(geometry.getAttribute("position").array),
  };
}

export function addLotusRootAppearance(
  material: THREE.MeshPhysicalMaterial,
): void {
  material.attenuationColor.set("#f3cdc2");
  material.attenuationDistance = 1.7;
  material.clearcoat = 0.23;
  material.clearcoatRoughness = 0.48;
  material.sheenColor.set("#f3cdc2");
  const compile = material.onBeforeCompile.bind(material),
    key = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.uniforms.uOsmanthus = {
      value: OSMANTHUS_FLOWERS.map((v) => new THREE.Vector4(...v)),
    };
    shader.uniforms.uLotusFlesh = { value: flesh };
    shader.uniforms.uLotusRind = { value: rind };
    const channelUniforms = (channels: readonly Channel[]) => ({
      axes: channels.map(
        ([x, y, a]) => new THREE.Vector4(x, y, Math.sin(a), Math.cos(a)),
      ),
      sizes: channels.map(([, , , w, h]) => new THREE.Vector2(w, h)),
    });
    const filled = channelUniforms(LOTUS_CHAMBERS),
      hollow = channelUniforms(LOTUS_HOLLOW_CHANNELS);
    shader.uniforms.uRiceAxes = { value: filled.axes };
    shader.uniforms.uRiceSizes = { value: filled.sizes };
    shader.uniforms.uHollowAxes = { value: hollow.axes };
    shader.uniforms.uHollowSizes = { value: hollow.sizes };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nattribute vec3 aFleshCoordinate;attribute float aChannelWall;varying vec3 vLotus;varying float vChannelWall;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "void main() {\nvLotus=aFleshCoordinate;vChannelWall=aChannelWall;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
varying vec3 vLotus;
varying float vChannelWall;
uniform vec3 uLotusFlesh,uLotusRind;
uniform vec4 uOsmanthus[${OSMANTHUS_FLOWERS.length}];
float lotusHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
uniform vec4 uRiceAxes[8],uHollowAxes[14];
uniform vec2 uRiceSizes[8],uHollowSizes[14];
float channelEllipse(vec2 p,vec4 c,vec2 size){
 vec2 q=p-c.xy;float across=abs(dot(q,vec2(c.w,-c.z))/size.x),along=abs(dot(q,c.zw)/size.y);
 return pow(pow(across,2.3)+pow(along,2.3),1.0/2.3);
}
float lotusChannel(vec2 p){
 float r=length(p-vec2(.014,-.009)),a=atan(p.x,p.y),d=r/(.097*(1.0+.07*cos(a*7.0)));
 for(int i=0;i<8;i++)d=min(d,channelEllipse(p,uRiceAxes[i],uRiceSizes[i]));
 return d;
}
float lotusHollow(vec2 p){
 float d=20.0;for(int i=0;i<14;i++)d=min(d,channelEllipse(p,uHollowAxes[i],uHollowSizes[i]));return d;
}
float lotusGrain(vec2 p){
 vec2 pos=p*31.0,cell=floor(pos);float d=9.0;
 for(int i=-1;i<=1;i++)for(int j=-1;j<=1;j++){
  vec2 c=cell+vec2(float(i),float(j));
  if(lotusHash(c+vec2(41,17))<.74)continue;
  vec2 q=pos-c-.5-(vec2(lotusHash(c+vec2(19.7,0)),lotusHash(c+vec2(0,53.1)))-.5)*.55;
  float a=lotusHash(c)*6.283185307;
  d=min(d,length(vec2(dot(q,vec2(cos(a),sin(a)))/.64,dot(q,vec2(-sin(a),cos(a)))/.34)));
 }
 return 1.0-smoothstep(.15,1.08,d);
}
vec2 lotusFlower(vec2 p){
 float flower=0.0,heart=0.0;
 for(int f=0;f<${OSMANTHUS_FLOWERS.length};f++){
  vec4 blossom=uOsmanthus[f];vec2 q=(p-blossom.xy)/blossom.w;
  float petal=1.0-smoothstep(.12,.25,length(q));
  heart=max(heart,1.0-smoothstep(.1,.27,length(q)));
  for(int i=0;i<4;i++){
   float a=blossom.z+float(i)*1.570796327;
   float along=dot(q,vec2(cos(a),sin(a))),across=dot(q,vec2(-sin(a),cos(a)));
   petal=max(petal,1.0-smoothstep(.72,1.0,length(vec2((along-.43)/.44,across/.265))));
  }
  flower=max(flower,petal);
 }
 return vec2(flower,heart);
}
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
float lr=length(vLotus.xy),la=atan(vLotus.x,vLotus.y);
float lotusFace=smoothstep(.04,.2,abs(vLotus.z))*(1.0-smoothstep(.95,.985,lr));
// Evaluate tissue masks per pixel: interpolating white cap vertex colors
// across the triangulated openings creates pale triangular streaks.
diffuseColor.rgb=mix(uLotusRind,uLotusFlesh,lotusFace);
float channel=lotusChannel(vLotus.xy);
float hollow=lotusHollow(vLotus.xy);
float lotusRice=(1.0-smoothstep(.84,1.02,channel))*lotusFace*smoothstep(1.0,1.35,hollow)*(1.0-vChannelWall);
float riceGrain=lotusRice>.001?lotusGrain(vLotus.xy):0.0;
vec2 blossom=lotusFlower(vLotus.xy)*smoothstep(.1,.3,vLotus.z)*(1.0-vChannelWall);
float tissue=lotusHash(floor(vLotus.xy*270.0))-.5;
float fibers=pow(.5+.5*sin(la*212.0+lr*24.0+sin(la*17.0)),18.0);
diffuseColor.rgb*=1.0+tissue*.045-fibers*.05*lotusFace*(1.0-lotusRice);
// A fine red channel lining separates white sticky rice from translucent root flesh.
float rimDistance=(channel-1.04)/.085;
float lining=exp(-rimDistance*rimDistance)*lotusFace;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.28,.09,.064),lining*.34);
// Mostly soft gelatinized paste, with only a few recognizable swollen grains.
float cloud=.5+.5*sin(vLotus.x*35.0+sin(vLotus.y*23.0))*sin(vLotus.y*29.0+vLotus.x*17.0);
vec3 riceColor=mix(vec3(.67,.65,.58),vec3(.76,.74,.67),cloud);
riceColor=mix(riceColor,vec3(.98,.96,.87),riceGrain*.70);
diffuseColor.rgb*=1.0-vChannelWall*.12;
diffuseColor.rgb=mix(diffuseColor.rgb,riceColor,lotusRice);
vec3 petalColor=mix(vec3(1.0,.69,.025),vec3(.85,.29,.005),blossom.y*.7);
diffuseColor.rgb=mix(diffuseColor.rgb,petalColor,blossom.x);
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      "#include <roughnessmap_fragment>\nroughnessFactor=mix(mix(mix(.55,.38+.025*(1.0-riceGrain),lotusRice),.72,1.0-smoothstep(.9,1.8,hollow)),.60,blossom.x);",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <transmission_fragment>",
      THREE.ShaderChunk.transmission_fragment.replace(
        "material.transmission = transmission;",
        "material.transmission = mix(mix(mix(mix(.20,.34,lotusFace),.22,lotusRice),.08,blossom.x),.06,vChannelWall);",
      ),
    );
  };
  material.customProgramCacheKey = () => key + "-stuffed-lotus-root-v9";
}
