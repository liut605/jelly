import * as THREE from "three";
import {
  createSliceGeometry,
  type SliceGeometryData,
} from "./sliceGeometry.ts";

const smooth = THREE.MathUtils.smoothstep;

/** Rounded circular slice with a broad, level resting surface and real depth. */
export function mapPersimmonPoint(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const r = Math.min(1, Math.hypot(x, y));
  const angle = Math.atan2(x, y);
  const pole = Math.sqrt(Math.max(0, 1 - r * r));
  const depth = pole > 1e-6 ? THREE.MathUtils.clamp(z / pole, -1, 1) : 0;
  const outline =
    1.015 + 0.009 * Math.cos(angle * 4) + 0.004 * Math.sin(angle * 3);
  const roll = Math.max(0, (r - 0.89) / 0.11);
  const edge = Math.sqrt(Math.max(0, 1 - roll ** 4));
  return [x * outline, -0.2 + depth * 0.3 * edge, -y * outline];
}

/** Eight tapered translucent tissue rays; no holes, displaced ridges or seeds. */
export function persimmonStar(x: number, y: number): number {
  const r = Math.hypot(x, y),
    a = Math.atan2(x, y) - 0.1;
  const folded = Math.atan2(Math.sin(a * 8), Math.cos(a * 8)) / 8;
  const along = THREE.MathUtils.clamp((r - 0.1) / 0.65, 0, 1);
  const width = 0.014 + 0.034 * Math.sin(Math.PI * along);
  return (
    (1 - smooth(Math.abs(r * Math.sin(folded)), width * 0.42, width)) *
    smooth(r, 0.075, 0.16) *
    (1 - smooth(r, 0.64, 0.77))
  );
}

export function createPersimmonGeometry(): SliceGeometryData {
  const flesh = new THREE.Color("#efb451"),
    outerFlesh = new THREE.Color("#f2a23b"),
    peel = new THREE.Color("#d77322"),
    clearAmber = new THREE.Color("#bd7028"),
    heart = new THREE.Color("#f6ead0");
  return createSliceGeometry(
    mapPersimmonPoint,
    (_point, [x, y]) => {
      const r = Math.hypot(x, y),
        a = Math.atan2(x, y);
      const color = flesh
        .clone()
        .lerp(outerFlesh, smooth(r, 0.25, 0.91) * 0.42);
      color.lerp(clearAmber, persimmonStar(x, y) * 0.67);
      const coreRadius = r / (1 + 0.075 * Math.cos(a * 8));
      color.lerp(heart, 1 - smooth(coreRadius, 0.045, 0.135));
      color.lerp(peel, smooth(r, 0.957, 0.994));
      return color;
    },
    { sides: 256 },
  );
}

/** Tissue color, fine grain and optical variation all follow the material when stretched. */
export function addPersimmonAppearance(
  material: THREE.MeshPhysicalMaterial,
): void {
  material.attenuationColor.set("#ffe6b6");
  material.sheenColor.set("#ffdab0");
  const compile = material.onBeforeCompile.bind(material),
    key = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nattribute vec3 aFleshCoordinate;varying vec3 vPersimmon;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "void main() {\nvPersimmon=aFleshCoordinate;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
varying vec3 vPersimmon;
float persimmonHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float persimmonRay(vec2 p){
 float r=length(p),a=atan(p.x,p.y)-.1;
 float folded=atan(sin(a*8.0),cos(a*8.0))/8.0;
 float along=clamp((r-.1)/.65,0.0,1.0),width=.014+.034*sin(3.14159265*along);
 return (1.0-smoothstep(width*.42,width,abs(r*sin(folded))))*smoothstep(.075,.16,r)*(1.0-smoothstep(.64,.77,r));
}
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
float pr=length(vPersimmon.xy),pa=atan(vPersimmon.x,vPersimmon.y);
float star=persimmonRay(vPersimmon.xy),peel=smoothstep(.957,.994,pr);
float fleshArea=(1.0-peel)*smoothstep(.10,.19,pr);
// Sparse irregular flecks in material space, with soft antialiased boundaries.
vec2 grainPosition=vPersimmon.xy*105.0,cell=floor(grainPosition);
float grain=persimmonHash(cell);
vec2 grainCenter=vec2(persimmonHash(cell+19.7),persimmonHash(cell+53.1))*.6+.2;
float spotDistance=length(fract(grainPosition)-grainCenter);
float spotSize=mix(.13,.26,persimmonHash(cell+8.2));
float aa=max(fwidth(spotDistance)*.5,.015);
float spots=step(.94,grain)*(1.0-smoothstep(spotSize-aa,spotSize+aa,spotDistance));
float tissueGrain=persimmonHash(floor(vPersimmon.xy*380.0))-.5;
float fibers=pow(.5+.5*sin(pa*184.0+pr*17.0+sin(pa*13.0)*.7),22.0);
float rings=pow(.5+.5*cos(pr*198.0+sin(pa*5.0)*.35),28.0);
diffuseColor.rgb*=1.0+tissueGrain*.025*fleshArea;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.91,.79,.51),(fibers*.055+rings*.027)*fleshArea*(1.0-star));
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.105,.035,.009),spots*.78*fleshArea*(1.0-star*.55));
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      "#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor-.17*persimmonRay(vPersimmon.xy)+.035*smoothstep(.957,.994,length(vPersimmon.xy)),.2,1.0);",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <transmission_fragment>",
      THREE.ShaderChunk.transmission_fragment
        .replace(
          "material.transmission = transmission;",
          "material.transmission = mix(transmission, .94, persimmonRay(vPersimmon.xy)) * mix(1.0, .34, smoothstep(.957,.994,length(vPersimmon.xy)));",
        )
        .replace(
          "material.thickness = thickness;",
          "material.thickness = thickness * mix(1.0,.68,persimmonRay(vPersimmon.xy));",
        ),
    );
  };
  material.customProgramCacheKey = () => key + "-persimmon-v2";
}
