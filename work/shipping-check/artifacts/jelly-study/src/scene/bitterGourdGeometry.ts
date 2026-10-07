import * as THREE from "three";
import {
  createSliceGeometry,
  type SliceGeometryData,
} from "./sliceGeometry.ts";
const smooth = THREE.MathUtils.smoothstep;

/** Broad rounded ribs, with slight organic variation in their spacing. */
function ridgeProfile(angle: number): number {
  const phase =
    angle * 20 + 0.23 * Math.sin(angle * 3) + 0.12 * Math.cos(angle * 7);
  return 0.5 + 0.5 * Math.cos(phase);
}

/** Small rounded tubercles stagger along the longitudinal ribs. These are
 * visible-surface detail carried by the smoother volumetric core. */
function rindRelief(angle: number, height: number): number {
  const phase =
    angle * 20 + 0.23 * Math.sin(angle * 3) + 0.12 * Math.cos(angle * 7);
  const ridge = ridgeProfile(angle);
  const stagger = 0.027 * Math.sin(angle * 9) + 0.013 * Math.cos(angle * 13);
  const bead = (center: number, radius: number) =>
    Math.exp(-Math.pow((height - center - stagger) / radius, 2));
  const lobes =
    0.043 * bead(-0.36, 0.075) +
    0.055 * bead(-0.155, 0.09) +
    0.034 * bead(0.055, 0.075);
  const small =
    Math.exp(2.7 * (Math.cos(phase + Math.PI) - 1)) *
    (0.022 * bead(-0.26, 0.058) + 0.018 * bead(-0.025, 0.055));
  return ridge * lobes + small;
}

/** A thick cut cylinder with a level underside and gently rounded cut rims.
 * The physics core includes broad ribs, keeping all coarse cells well formed. */
export function mapBitterGourdPoint(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const r = Math.min(1, Math.hypot(x, y)),
    a = Math.atan2(x, y),
    pole = Math.sqrt(Math.max(0, 1 - r * r));
  const depth = pole > 1e-6 ? THREE.MathUtils.clamp(z / pole, -1, 1) : 0;
  const outline = 0.985 + 0.011 * Math.cos(a * 3) + 0.008 * Math.sin(a * 5);
  const radial = r * (outline + smooth(r, 0.8, 0.98) * 0.062 * ridgeProfile(a));
  // Keep the face broad and the sides steep, instead of a wavy dish edge.
  const roll = Math.max(0, (r - 0.88) / 0.12);
  const edge = Math.sqrt(Math.max(0, 1 - roll ** 4));
  const middle = -0.165;
  const membrane = 1 - smooth(r, 0.11, 0.32);
  const front = middle + 0.335 * edge - 0.045 * membrane;
  const back = middle - 0.335 * edge;
  return [
    Math.sin(a) * radial * 1.01,
    THREE.MathUtils.lerp(back, front, (depth + 1) / 2),
    -Math.cos(a) * radial,
  ];
}

export function mapBitterGourdSurface(
  x: number,
  y: number,
  z: number,
): [number, number, number] {
  const p = mapBitterGourdPoint(x, y, z);
  const r = Math.hypot(x, y),
    a = Math.atan2(x, y);
  const relief = smooth(r, 0.86, 0.975) * rindRelief(a, p[1]);
  p[0] += Math.sin(a) * relief * 1.01;
  p[2] -= Math.cos(a) * relief;
  return p;
}

export function createBitterGourdGeometry(): SliceGeometryData {
  const pith = new THREE.Color("#deddb7"),
    flesh = new THREE.Color("#779b49"),
    innerGreen = new THREE.Color("#bdd09a"),
    skin = new THREE.Color("#224f29"),
    ridgeGreen = new THREE.Color("#50763b"),
    red = new THREE.Color("#b93c38");
  return createSliceGeometry(
    mapBitterGourdSurface,
    (point, [x, y]) => {
      const r = Math.hypot(x, y),
        a = Math.atan2(x, y),
        organic = r + 0.014 * Math.sin(a * 7) + 0.009 * Math.cos(a * 13);
      const color = pith
        .clone()
        .lerp(innerGreen, smooth(organic, 0.47, 0.68))
        .lerp(flesh, smooth(organic, 0.65, 0.84))
        .lerp(skin, smooth(organic, 0.86, 0.98));
      color.lerp(
        ridgeGreen,
        smooth(r, 0.88, 0.99) *
          (0.2 * ridgeProfile(a) + 4.5 * rindRelief(a, point[1])),
      );
      // Color the three existing seed shapes, leaving the central pith pale.
      // Vertex colors also carry the seeds into the software still preview.
      let seeds = 0;
      for (let seed = 0; seed < 3; seed++) {
        const angle = seed * ((Math.PI * 2) / 3) + 0.18;
        const ax = Math.sin(angle),
          ay = Math.cos(angle);
        const qx = x - ax * 0.38,
          qy = y - ay * 0.38;
        const ellipse = Math.hypot(
          (qx * ay - qy * ax) / 0.145,
          (qx * ax + qy * ay) / 0.235,
        );
        seeds = Math.max(seeds, 1 - smooth(ellipse, 0.72, 0.94));
      }
      color.lerp(red, seeds * 0.94);
      return color;
    },
    { sides: 288 },
  );
}

/** Fine flesh cells, vascular fibers, pith membranes and skin pores remain in
 * material coordinates. The larger external tubercles are actual geometry. */
export function addBitterGourdAppearance(
  material: THREE.MeshPhysicalMaterial,
): void {
  const compile = material.onBeforeCompile.bind(material),
    key = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nattribute vec3 aFleshCoordinate;varying vec3 vGourd;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "void main() {\nvGourd=aFleshCoordinate;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
varying vec3 vGourd;
float gourdHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
float gr=length(vGourd.xy),ga=atan(vGourd.x,vGourd.y),rind=smoothstep(.84,.98,gr);
float grain=gourdHash(floor(vGourd*215.0));
float pores=smoothstep(.76,.98,grain)*rind;
vec2 cell=fract(vGourd.xy*74.0+vec2(sin(vGourd.y*12.0),sin(vGourd.x*11.0))*.35)-.5;
float walls=smoothstep(.24,.47,length(cell));
float fibers=pow(.5+.5*sin(ga*155.0+gr*28.0+sin(ga*21.0)*2.0),12.0);
float inner=1.0-smoothstep(.57,.84,gr);
float loculeRim=0.0,seeds=0.0;
for(int chamber=0;chamber<3;chamber++){
 float ca=float(chamber)*2.094395+.18;vec2 axis=vec2(sin(ca),cos(ca)),across=vec2(axis.y,-axis.x),q=vGourd.xy-axis*.38;
 float ellipse=length(vec2(dot(q,across)/.145,dot(q,axis)/.235));
 float rimDistance=(ellipse-1.0)/.055;
 loculeRim+=exp(-rimDistance*rimDistance);seeds=max(seeds,1.0-smoothstep(.72,.94,ellipse));
}
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.78,.74,.43),loculeRim*.30);
float membranes=pow(.5+.5*cos(ga*3.0+sin(gr*12.0)*.3),30.0)*smoothstep(.15,.28,gr)*(1.0-smoothstep(.45,.66,gr));
diffuseColor.rgb*=1.0-pores*.22-(1.0-rind)*walls*.055;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.64,.70,.39),fibers*(1.0-rind)*(1.0-seeds)*.15);
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.88,.85,.62),(membranes*.28+walls*inner*.035)*(1.0-seeds));
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.59,.055,.042),seeds*fibers*.18);
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      "#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+0.05*smoothstep(.82,.99,length(vGourd.xy)),0.0,1.0);",
    );
    // Keep the dark rind substantial while the pale flesh transmits soft light.
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <transmission_fragment>",
      THREE.ShaderChunk.transmission_fragment.replace(
        "material.transmission = transmission;",
        "material.transmission = transmission * mix(1.0,0.30,smoothstep(.82,.98,length(vGourd.xy)));",
      ),
    );
  };
  material.customProgramCacheKey = () => key + "-bitter-gourd-v3";
}
