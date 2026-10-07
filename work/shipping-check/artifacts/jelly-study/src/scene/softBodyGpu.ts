import * as THREE from "three";
import { GPUComputationRenderer } from "three/examples/jsm/misc/GPUComputationRenderer.js";
import {
  createVolumeTopology,
  VOLUME_RINGS,
  VOLUME_SIDES,
  type VolumeTopology,
  type VolumePointMap,
} from "./volumeTopology";

import type { PlayBounds } from "./framing";
import { normalGradientLinks } from "./volumeNormals";
import { bindVolumeSurface } from "./volumeSkinning";

export const PEACH_FLOOR = -0.68;
// Calibrated to the reference study: gravity in world units per second squared,
// with Coulomb floor contact rather than a separate scripted rebound impulse.
export const GRAVITY_ACCELERATION = 9.81;
const FLOOR_FRICTION = 0.55;
const STEP = 1 / 120;
const ITERATIONS = 10;
const MAX_SUBSTEPS = 6;
const MAX_GRAB_NODES = 48;
// A short, balanced squeeze excites elastic modes; all motion after this burst
// comes from the existing volume solver. Repeated clicks never stack bursts.
const SHAKE_DURATION = 0.36;
const SHAKE_ACCELERATION = 100;
type SkinShader = Parameters<THREE.MeshPhysicalMaterial["onBeforeCompile"]>[0];
export interface SoftBodySettings {
  firmness: number;
  damping: number;
  handStrength?: number;
  paused: boolean;
  slowMotion: boolean;
  gravity?: boolean;
  gravityStrength?: number;
}
export interface SoftBodyGpu {
  readonly topology: VolumeTopology;
  step(delta: number, settings: SoftBodySettings): void;
  beginGrab(
    point: THREE.Vector3,
    triangle?: readonly number[],
    barycentric?: THREE.Vector3,
  ): void;
  moveGrab(point: THREE.Vector3): void;
  endGrab(): void;
  triggerShake(): void;
  reset(): void;
  syncSurfaceForRaycast(): void;
  bindSurfaceMaterial(
    material: THREE.MeshPhysicalMaterial | THREE.MeshDepthMaterial,
  ): void;
  getSurfaceBounds(): THREE.Box3;
  setPlayBounds(bounds: PlayBounds | null): void;
  diagnostics(): {
    volumeRatio: number;
    minVolumeRatio: number;
    minimumY: number;
    maxSpeed: number;
    centerY: number;
    centerVelocityY: number;
    centerSpeed: number;
    maxEdgeRatio: number;
    strainSpeed: number;
  };
  snapshot(): SoftBodySnapshot;
  restoreState(positions: Float32Array, velocities?: Float32Array): void;
  dispose(): void;
}
export interface SoftBodySnapshot {
  topology: VolumeTopology;
  positions: Float32Array;
  velocities: Float32Array;
}
function texture(
  data: Float32Array<ArrayBuffer>,
  width: number,
  height: number,
): THREE.DataTexture {
  const t = new THREE.DataTexture(
    data,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType,
  );
  t.minFilter = t.magFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}
function packed(values: number[][], width = 256): THREE.DataTexture {
  const h = Math.max(1, Math.ceil(values.length / width));
  const data = new Float32Array(width * h * 4);
  values.forEach((v, i) => data.set(v, i * 4));
  return texture(data, width, h);
}
function target(w: number, h: number): THREE.WebGLRenderTarget {
  return new THREE.WebGLRenderTarget(w, h, {
    type: THREE.FloatType,
    format: THREE.RGBAFormat,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false,
  });
}
class VolumeBody implements SoftBodyGpu {
  readonly topology: VolumeTopology;
  private readonly gpu: GPUComputationRenderer;
  private readonly width = 64;
  private readonly height: number;
  private readonly rest: THREE.DataTexture;
  private positions: THREE.WebGLRenderTarget[];
  private velocities: THREE.WebGLRenderTarget[];
  private previous: THREE.WebGLRenderTarget;
  private com: THREE.WebGLRenderTarget;
  private grab: THREE.WebGLRenderTarget;
  private skin: THREE.WebGLRenderTarget;
  private readonly textures: THREE.DataTexture[] = [];
  private readonly materials: THREE.ShaderMaterial[] = [];
  private readonly comPass: THREE.ShaderMaterial;
  private readonly predictPass: THREE.ShaderMaterial;
  private readonly projectPass: THREE.ShaderMaterial;
  private readonly velocityPass: THREE.ShaderMaterial;
  private readonly grabPass: THREE.ShaderMaterial;
  private readonly skinPass: THREE.ShaderMaterial;
  private readonly normalPass: THREE.ShaderMaterial;
  private readonly normalFrames: THREE.WebGLRenderTarget;
  private readonly boundsPass: THREE.ShaderMaterial;
  private readonly boundsTarget: THREE.WebGLRenderTarget;
  private readonly boundsPixels = new Float32Array(8);
  private readonly restBounds = new THREE.Box3();
  private readonly surfaceBounds = new THREE.Box3();
  private readonly viewportPass: THREE.ShaderMaterial;
  private readonly applyViewportPass: THREE.ShaderMaterial;
  private readonly viewportShift: THREE.WebGLRenderTarget;
  private readonly shapePass: THREE.ShaderMaterial;
  private readonly shape: THREE.WebGLRenderTarget;
  private readonly safetyPass: THREE.ShaderMaterial;
  private readonly reduceSafetyPass: THREE.ShaderMaterial;
  private readonly applySafetyPass: THREE.ShaderMaterial;
  private readonly safety: THREE.WebGLRenderTarget;
  private readonly safeFraction: THREE.WebGLRenderTarget;
  private readonly grabWeights: THREE.DataTexture;
  private readonly grabWeightValues: Float32Array<ArrayBuffer>;
  private readonly nodesBuffer: Float32Array<ArrayBuffer>;
  private readonly source: Float32Array;
  private readonly start = new THREE.Vector3();
  private readonly grabTarget = new THREE.Vector3();
  private readonly requestedTarget = new THREE.Vector3();
  private readonly targetDelta = new THREE.Vector3();
  private readonly wallUniforms: Record<string, THREE.IUniform> = {
    uWalls: { value: 0 },
    uWallRight: { value: new THREE.Vector3(1, 0, 0) },
    uWallUp: { value: new THREE.Vector3(0, 1, 0) },
    uWallDirection: { value: new THREE.Vector3(0, 0, 1) },
    uWallFocus: { value: new THREE.Vector3() },
    uWallDistance: { value: 5 },
    uWallFov: { value: new THREE.Vector2(1, 1) },
    uWallOffset: { value: new THREE.Vector2() },
    uWallDepth: { value: 1.65 },
  };
  private accumulator = 0;
  private active = false;
  private shakePending = false;
  private shakeCount = 0;
  private shakeTime = SHAKE_DURATION;
  private disposed = false;
  private readonly volumeUniforms: THREE.IUniform[] = [];
  constructor(
    private renderer: THREE.WebGLRenderer,
    private geometry: THREE.BufferGeometry,
    source: Float32Array,
    rings: number,
    sides: number,
    volumeSource: Float32Array,
    warp: VolumePointMap,
    topology?: VolumeTopology,
  ) {
    this.source = source;
    this.restBounds.setFromBufferAttribute(
      new THREE.BufferAttribute(source, 3),
    );
    this.topology =
      topology ?? createVolumeTopology(volumeSource, rings, sides, warp);
    if (
      geometry.userData.volumeSkinning &&
      !geometry.userData.volumeBindingsReady
    )
      bindVolumeSurface(geometry, source, this.topology);
    const t = this.topology;
    this.height = Math.ceil(t.nodeCount / this.width);
    this.nodesBuffer = new Float32Array(this.width * this.height * 4);
    const restData = new Float32Array(this.nodesBuffer.length);
    for (let i = 0; i < t.nodeCount; i++)
      restData.set(
        [
          t.restPositions[i * 3],
          t.restPositions[i * 3 + 1],
          t.restPositions[i * 3 + 2],
          1,
        ],
        i * 4,
      );
    this.rest = texture(restData, this.width, this.height);
    this.textures.push(this.rest);
    this.gpu = new GPUComputationRenderer(this.width, this.height, renderer);
    this.positions = [
      target(this.width, this.height),
      target(this.width, this.height),
    ];
    this.velocities = [
      target(this.width, this.height),
      target(this.width, this.height),
    ];
    this.previous = target(this.width, this.height);
    this.com = target(1, 1);
    this.grab = target(1, 1);
    this.skin = target(VOLUME_SIDES, VOLUME_RINGS + 1);
    const linkData: number[][] = [],
      incidenceData: number[][] = [],
      meta: number[][] = [];
    for (let i = 0; i < t.nodeCount; i++) {
      meta.push([
        linkData.length,
        t.edges[i].length,
        incidenceData.length,
        t.incidentTetrahedra[i].length,
      ]);
      for (const j of t.edges[i])
        linkData.push([
          j,
          Math.hypot(
            ...[0, 1, 2].map(
              (k) => t.restPositions[j * 3 + k] - t.restPositions[i * 3 + k],
            ),
          ),
          0,
          0,
        ]);
      for (const id of t.incidentTetrahedra[i])
        incidenceData.push([id, 0, 0, 0]);
    }
    const links = packed(linkData),
      incidence = packed(incidenceData),
      metadata = packed(meta, this.width);
    const tetra = packed(
      Array.from(t.tetraRestVolumes, (_, i) =>
        Array.from(t.tetrahedra.slice(i * 4, i * 4 + 4)),
      ),
    );
    const volumes = packed(Array.from(t.tetraRestVolumes, (v) => [v, 0, 0, 0]));
    this.boundsTarget = target(2, 1);
    this.shape = target(4, 1);
    this.viewportShift = target(1, 1);
    this.safety = target(tetra.image.width, tetra.image.height);
    this.safeFraction = target(1, 1);
    this.grabWeightValues = new Float32Array(restData.length);
    this.grabWeights = texture(this.grabWeightValues, this.width, this.height);
    const surface = packed(
      Array.from(t.surfaceGrid, (v) => [v, 0, 0, 0]),
      VOLUME_SIDES,
    );
    this.textures.push(
      links,
      incidence,
      metadata,
      tetra,
      volumes,
      this.grabWeights,
      surface,
    );
    const shared = `
uniform sampler2D uPositions,uRest,uVelocity;
uniform float uDelta;
uniform float uWalls,uWallDistance,uWallDepth;
uniform vec3 uWallRight,uWallUp,uWallDirection,uWallFocus;uniform vec2 uWallFov,uWallOffset;

vec2 nodeUv(float i){return (vec2(mod(i,${this.width}.0),floor(i/${this.width}.0))+0.5)/vec2(${this.width}.0,${this.height}.0);}
vec3 pos(float i){return texture2D(uPositions,nodeUv(i)).xyz;}
vec2 packedUv(float i,vec2 size){return (vec2(mod(i,size.x),floor(i/size.x))+0.5)/size;}
`;
    const base = (): Record<string, THREE.IUniform> => ({
      uPositions: { value: null },
      uRest: { value: this.rest },
      uVelocity: { value: null },
      uDelta: { value: STEP },
      ...this.wallUniforms,
    });
    const make = (
      code: string,
      extra: Record<string, THREE.IUniform> = {},
    ): THREE.ShaderMaterial => {
      const m = this.gpu.createShaderMaterial(shared + code, {
        ...base(),
        ...extra,
      });
      this.materials.push(m);
      return m;
    };
    this.normalFrames = target(this.width * 3, this.height);
    const gradientLinks = packed(normalGradientLinks(t));
    this.textures.push(gradientLinks);
    this.normalPass = make(
      `
uniform sampler2D uGradientLinks,uNodeMeta;
void main(){
 float column=mod(floor(gl_FragCoord.x),3.0);
 float id=floor(gl_FragCoord.x/3.0)+floor(gl_FragCoord.y)*${this.width}.0;
 if(id>=${t.nodeCount}.0){gl_FragColor=vec4(0.0);return;}
 vec4 meta=texture2D(uNodeMeta,nodeUv(id)); vec3 center=pos(id),f=vec3(0.0);
 for(int j=0;j<${Math.max(...t.edges.map((row) => row.length))};j++){
  if(float(j)>=meta.y)break;
  vec4 link=texture2D(uGradientLinks,packedUv(meta.x+float(j),vec2(${gradientLinks.image.width}.0,${gradientLinks.image.height}.0)));
  float coefficient=column<.5?link.x:(column<1.5?link.y:link.z);
  f+=(pos(link.w)-center)*coefficient;
 }
 gl_FragColor=vec4(f,1.0);
}`,
      {
        uGradientLinks: { value: gradientLinks },
        uNodeMeta: { value: metadata },
      },
    );
    this.comPass = make(
      `void main(){vec3 v=vec3(0.0);float minimum=1e20;for(int i=0;i<${t.nodeCount};i++){v+=texture2D(uVelocity,nodeUv(float(i))).xyz;minimum=min(minimum,pos(float(i)).y);}gl_FragColor=vec4(v/${t.nodeCount}.0,minimum<${PEACH_FLOOR + 0.001}?1.0:0.0);}`,
    );
    this.predictPass = make(
      `
uniform sampler2D uCom,uShakeModeA,uShakeModeB,uShakeShape;
uniform float uDamping,uGravity,uShake,uAirDrag;
uniform vec2 uShakeMix;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 rest=texture2D(uRest,uv);if(rest.w<0.5){gl_FragColor=vec4(0.0);return;}
vec3 p=texture2D(uPositions,uv).xyz,v=texture2D(uVelocity,uv).xyz,com=texture2D(uCom,vec2(0.5)).xyz;
vec3 drift=com;
if(texture2D(uCom,vec2(.5)).w>.5&&com.y<.05){float slide=length(com.xz);drift.xz*=max(0.0,1.0-${FLOOR_FRICTION}*uGravity*${GRAVITY_ACCELERATION}*uDelta/max(slide,0.000001));}
v=drift+(v-com)*exp(-uDamping*uDelta);
v.y-=uGravity*${GRAVITY_ACCELERATION}*uDelta;v*=exp(-uAirDrag*uDelta);
if(abs(uShake)>0.0){
mat3 rotation=mat3(texture2D(uShakeShape,vec2(.375,.5)).xyz,texture2D(uShakeShape,vec2(.625,.5)).xyz,texture2D(uShakeShape,vec2(.875,.5)).xyz);
v+=uShake*rotation*(uShakeMix.x*texture2D(uShakeModeA,uv).xyz+uShakeMix.y*texture2D(uShakeModeB,uv).xyz);
}
gl_FragColor=vec4(p+v*uDelta,1.0);}`,
      {
        uCom: { value: this.com.texture },
        uDamping: { value: 3 },
        uGravity: { value: 1 },
        uAirDrag: { value: 0.08 },
        uShake: { value: 0 },
        uShakeMix: { value: new THREE.Vector2() },
        uShakeModeA: { value: null },
        uShakeModeB: { value: null },
        uShakeShape: { value: this.shape.texture },
      },
    );
    this.grabPass = make(
      `
uniform float uCount;uniform sampler2D uForceStencil;
uniform float uNodes[${MAX_GRAB_NODES}];uniform float uWeights[${MAX_GRAB_NODES}];uniform vec3 uPoint;
void main(){vec3 p=uPoint;float denom=0.0;for(int i=0;i<${MAX_GRAB_NODES};i++){if(float(i)>=uCount)break;float w=uWeights[i];p+=w*(pos(uNodes[i])-texture2D(uRest,nodeUv(uNodes[i])).xyz);denom+=w*texture2D(uForceStencil,nodeUv(uNodes[i])).x;}gl_FragColor=vec4(p,denom);}`,
      {
        uCount: { value: 0 },
        uForceStencil: { value: this.grabWeights },
        uNodes: { value: new Float32Array(MAX_GRAB_NODES) },
        uWeights: { value: new Float32Array(MAX_GRAB_NODES) },
        uPoint: { value: new THREE.Vector3() },
      },
    );
    const size = (tex: THREE.DataTexture): THREE.IUniform => ({
      value: new THREE.Vector2(tex.image.width, tex.image.height),
    });
    const restCenter = new THREE.Vector3();
    for (let i = 0; i < t.nodeCount; i++)
      restCenter.add(new THREE.Vector3().fromArray(t.restPositions, i * 3));
    restCenter.divideScalar(t.nodeCount);
    const covariance = new THREE.Matrix3().set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    for (let i = 0; i < t.nodeCount; i++) {
      const r = new THREE.Vector3()
        .fromArray(t.restPositions, i * 3)
        .sub(restCenter);
      for (let column = 0; column < 3; column++)
        for (let row = 0; row < 3; row++)
          covariance.elements[column * 3 + row] +=
            (r.getComponent(row) * r.getComponent(column)) / t.nodeCount;
    }
    const trace =
      covariance.elements[0] + covariance.elements[4] + covariance.elements[8];
    const inverseInertia = covariance.clone().multiplyScalar(-1);
    for (const i of [0, 4, 8]) inverseInertia.elements[i] += trace;
    inverseInertia.invert();
    // Opposed in-plane squeeze/shear, with translation and rigid spin removed
    // for the actual (asymmetric) specimen. Rotating these material-space fields
    // with the current body also works after grabbing or orbiting the slice.
    for (const [mode, uniform] of [
      [0, "uShakeModeA"],
      [1, "uShakeModeB"],
    ] as const) {
      const offsets: THREE.Vector3[] = [];
      const forces: THREE.Vector3[] = [];
      const mean = new THREE.Vector3();
      const torque = new THREE.Vector3();
      for (let i = 0; i < t.nodeCount; i++) {
        const r = new THREE.Vector3()
          .fromArray(t.restPositions, i * 3)
          .sub(restCenter);
        const force =
          mode === 0
            ? new THREE.Vector3(r.x, 0, -r.z)
            : new THREE.Vector3(r.z, 0, r.x);
        offsets.push(r);
        forces.push(force);
        mean.add(force);
        torque.add(new THREE.Vector3().crossVectors(r, force));
      }
      mean.divideScalar(t.nodeCount);
      const spin = torque
        .divideScalar(t.nodeCount)
        .applyMatrix3(inverseInertia);
      let energy = 0;
      for (let i = 0; i < t.nodeCount; i++) {
        forces[i]
          .sub(mean)
          .sub(new THREE.Vector3().crossVectors(spin, offsets[i]));
        energy += forces[i].lengthSq();
      }
      const scale = 1 / Math.max(Math.sqrt(energy / t.nodeCount), 1e-6);
      const data = new Float32Array(restData.length);
      for (let i = 0; i < t.nodeCount; i++)
        forces[i].multiplyScalar(scale).toArray(data, i * 4);
      const field = texture(data, this.width, this.height);
      this.textures.push(field);
      this.predictPass.uniforms[uniform].value = field;
    }
    // Corotational bulk elasticity keeps the silhouette firm while allowing local
    // strain. Its moving center and extracted rotation leave rigid motion free.
    this.shapePass = make(
      `uniform vec3 uRestCenter;uniform mat3 uInverseCovariance,uInverseInertia;uniform float uGravity;
void main(){vec3 center=vec3(0.0);mat3 covariance=mat3(0.0);
for(int i=0;i<${t.nodeCount};i++){vec3 p=pos(float(i)),r=texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter;center+=p;covariance+=mat3(p*r.x,p*r.y,p*r.z);}
center/=${t.nodeCount}.0;
mat3 rotation=(covariance/${t.nodeCount}.0)*uInverseCovariance;
for(int j=0;j<8;j++){vec3 a=rotation[0],b=rotation[1],c=rotation[2];float det=dot(a,cross(b,c));mat3 inverseTranspose=mat3(cross(b,c),cross(c,a),cross(a,b))/max(det,0.000001);rotation=(rotation+inverseTranspose)*0.5;}
// A tilted recovery frame needs the gravitational moment about its support
// region. A supported flat base has zero moment; an edge-balanced slice tips.
float low=1e20;
for(int i=0;i<${t.nodeCount};i++){vec3 q=rotation*(texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter);low=min(low,q.y);}
if(center.y+low<${PEACH_FLOOR + 0.006}&&uGravity>0.0){
vec2 footLow=vec2(1e20),footHigh=vec2(-1e20);
for(int i=0;i<${t.nodeCount};i++){vec3 q=rotation*(texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter);if(q.y<low+.012){footLow=min(footLow,q.xz);footHigh=max(footHigh,q.xz);}}
vec2 foot=clamp(vec2(0.0),footLow,footHigh);
vec3 torque=cross(vec3(foot.x,low,foot.y),vec3(0.0,uGravity*${GRAVITY_ACCELERATION},0.0));
vec3 localTorque=vec3(dot(rotation[0],torque),dot(rotation[1],torque),dot(rotation[2],torque));
vec3 angle=rotation*(uInverseInertia*localTorque)*uDelta*uDelta;
float turn=length(angle);if(turn>.012)angle*=.012/turn;
for(int j=0;j<3;j++)rotation[j]+=cross(angle,rotation[j]);
rotation[0]=normalize(rotation[0]);rotation[2]=normalize(cross(rotation[0],rotation[1]));rotation[1]=cross(rotation[2],rotation[0]);
}
if(gl_FragCoord.x<1.0){
float minimum=1e20;
for(int i=0;i<${t.nodeCount};i++)minimum=min(minimum,(rotation*(texture2D(uRest,nodeUv(float(i))).xyz-uRestCenter)).y);
center.y=max(center.y,${PEACH_FLOOR}-minimum);gl_FragColor=vec4(center,1.0);return;
}
int column=int(floor(gl_FragCoord.x))-1;gl_FragColor=vec4(rotation[column],1.0);}`,
      {
        uRestCenter: { value: restCenter },
        uInverseCovariance: { value: covariance.invert() },
        uInverseInertia: { value: inverseInertia },
        uGravity: { value: 1 },
      },
    );
    this.projectPass = make(
      `
uniform sampler2D uMeta,uLinks,uIncident,uTetra,uVolumes,uGrab,uGrabWeights,uPrevious;
uniform vec2 uLinkSize,uIncidentSize,uTetSize;
uniform float uEdgeCompliance,uGrabCompliance,uGrabActive;
uniform vec3 uGrabTarget,uRestCenter;uniform sampler2D uShape;uniform float uShapeStiffness;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 rest=texture2D(uRest,uv);if(rest.w<0.5){gl_FragColor=vec4(0.0);return;}
float id=floor(gl_FragCoord.y)*${this.width}.0+floor(gl_FragCoord.x);vec3 p=texture2D(uPositions,uv).xyz;vec4 meta=texture2D(uMeta,uv);
vec3 edge=vec3(0.0),volume=vec3(0.0),barrier=vec3(0.0);float worstRatio=0.4;
for(int j=0;j<${Math.max(...t.edges.map((x) => x.length))};j++){if(float(j)>=meta.y)break;vec4 link=texture2D(uLinks,packedUv(meta.x+float(j),uLinkSize));vec3 d=pos(link.x)-p;float len=max(length(d),0.000001);float degree=max(meta.y,texture2D(uMeta,nodeUv(link.x)).y);edge+=d*((len-link.y)/len)/((2.0+uEdgeCompliance/(uDelta*uDelta))*degree);
// A firm jelly can stretch locally, but thin boundary cells must not become
// long needles when contact and the hand pull in opposing directions.
if(len>link.y*1.5)edge+=d*((len-link.y*1.5)/len)/(2.0*degree);
}
for(int j=0;j<${Math.max(...t.incidentTetrahedra.map((x) => x.length))};j++){if(float(j)>=meta.w)break;float ti=texture2D(uIncident,packedUv(meta.z+float(j),uIncidentSize)).x;vec2 tu=packedUv(ti,uTetSize);vec4 ids=texture2D(uTetra,tu);float rv=texture2D(uVolumes,tu).x;
vec3 a=pos(ids.x),b=pos(ids.y),c=pos(ids.z),d=pos(ids.w);vec3 gb=cross(c-a,d-a)/6.0,gc=cross(d-a,b-a)/6.0,gd=cross(b-a,c-a)/6.0,ga=-gb-gc-gd;
float v=dot(b-a,gb);float denominator=dot(ga,ga)+dot(gb,gb)+dot(gc,gc)+dot(gd,gd)+2e-8*rv/(uDelta*uDelta);
vec3 grad=id==ids.x?ga:id==ids.y?gb:id==ids.z?gc:gd;
float degree=max(max(texture2D(uMeta,nodeUv(ids.x)).w,texture2D(uMeta,nodeUv(ids.y)).w),max(texture2D(uMeta,nodeUv(ids.z)).w,texture2D(uMeta,nodeUv(ids.w)).w));volume+=-grad*(v-rv)/(max(denominator,1e-15)*degree);if(v/rv<worstRatio){worstRatio=v/rv;barrier=-grad*(v-0.4*rv)/max(denominator,1e-15);}}
vec3 correction=0.8*edge+0.9*volume;
float lengthCorrection=length(correction);if(lengthCorrection>0.045)correction*=0.045/lengthCorrection;
vec3 center=texture2D(uShape,vec2(0.125,0.5)).xyz;
mat3 rotation=mat3(texture2D(uShape,vec2(0.375,0.5)).xyz,texture2D(uShape,vec2(0.625,0.5)).xyz,texture2D(uShape,vec2(0.875,0.5)).xyz);
// The recovery frame carries support torque; local contact and volume
// constraints still determine deformation at the floor.
vec3 goal=center+rotation*(rest.xyz-uRestCenter);goal.y=max(goal.y,${PEACH_FLOOR});
p+=correction+0.8*barrier+uShapeStiffness*(goal-p);
if(uGrabActive>0.5){float weight=texture2D(uGrabWeights,uv).x;vec4 grab=texture2D(uGrab,vec2(0.5));vec3 move=weight*(uGrabTarget-grab.xyz)/(grab.w+uGrabCompliance/(uDelta*uDelta));float m=length(move);if(m>0.04)move*=0.04/m;p+=move;}
// Static/contact friction belongs to the position solve. This prevents the
// floor from being a frictionless moving support between velocity updates.
float penetration=max(0.0,${PEACH_FLOOR}-p.y);
if(penetration>0.0){vec2 slip=p.xz-texture2D(uPrevious,uv).xz;p.xz-=slip*min(1.0,${FLOOR_FRICTION}*penetration/max(length(slip),0.000001));}
p.y=max(p.y,${PEACH_FLOOR});gl_FragColor=vec4(p,1.0);}`,
      {
        uPrevious: { value: this.previous.texture },
        uShape: { value: this.shape.texture },
        uShapeStiffness: { value: 0.02 },
        uRestCenter: { value: restCenter },
        uMeta: { value: metadata },
        uLinks: { value: links },
        uIncident: { value: incidence },
        uTetra: { value: tetra },
        uVolumes: { value: volumes },
        uLinkSize: size(links),
        uIncidentSize: size(incidence),
        uTetSize: size(tetra),
        uGrab: { value: this.grab.texture },
        uGrabWeights: { value: this.grabWeights },
        uEdgeCompliance: { value: 1e-6 },
        uGrabCompliance: { value: 1e-6 },
        uGrabActive: { value: 0 },
        uGrabTarget: { value: this.grabTarget },
      },
    );
    // The viewport is a composition boundary rather than a crushing plate.
    // Project the whole current volume by a common translation; this preserves
    // deformation, every edge length and volume, and never changes the camera.
    this.viewportPass = make(
      `
void main(){
vec3 shift=vec3(0.0);
if(uWalls>0.5)for(int iteration=0;iteration<6;iteration++){
float nearDepth=-1e20,farDepth=1e20;
for(int i=0;i<${t.nodeCount};i++){float d=dot(pos(float(i))+shift-uWallFocus,uWallDirection);nearDepth=max(nearDepth,d);farDepth=min(farDepth,d);}
float dl=-uWallDepth-farDepth,dh=uWallDepth-nearDepth;
shift+=uWallDirection*(dl<=dh?clamp(0.0,dl,dh):(dl+dh)*.5);
vec2 lo=vec2(-1e20),hi=vec2(1e20);float lowest=1e20;
for(int i=0;i<${t.nodeCount};i++){
vec3 p=pos(float(i))+shift,q=p-uWallFocus;float depth=dot(q,uWallDirection);
vec2 xy=vec2(dot(q,uWallRight),dot(q,uWallUp));
lo=max(lo,(uWallDistance-depth)*(uWallOffset-uWallFov)-xy);
hi=min(hi,(uWallDistance-depth)*(uWallOffset+uWallFov)-xy);
lowest=min(lowest,p.y);
}
vec2 move=clamp(vec2(0.0),min(lo,hi),max(lo,hi));
shift+=uWallRight*move.x+uWallUp*move.y;
shift.y+=max(0.0,${PEACH_FLOOR}-(lowest+uWallRight.y*move.x+uWallUp.y*move.y));
}
gl_FragColor=vec4(shift,1.0);}`,
      {},
    );
    this.applyViewportPass = make(
      `uniform sampler2D uShift;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 p=texture2D(uPositions,uv);p.xyz+=texture2D(uShift,vec2(.5)).xyz;gl_FragColor=p;}`,
      { uShift: { value: this.viewportShift.texture } },
    );
    // A common step fraction preserves every tetrahedron's orientation without
    // tearing shared faces. The barrier above supplies the recovery force; this
    // line search only limits a proposed step when a cell approaches collapse.
    this.safetyPass = make(
      `
uniform sampler2D uPrevious,uTetra,uVolumes;
uniform vec2 uTetSize;
float volume(vec3 a,vec3 b,vec3 c,vec3 d){return dot(b-a,cross(c-a,d-a))/6.0;}
void main(){vec2 uv=gl_FragCoord.xy/uTetSize;float rv=texture2D(uVolumes,uv).x;
if(rv<=0.0){gl_FragColor=vec4(1.0);return;}
vec4 ids=texture2D(uTetra,uv);
vec3 a=texture2D(uPrevious,nodeUv(ids.x)).xyz,b=texture2D(uPrevious,nodeUv(ids.y)).xyz,c=texture2D(uPrevious,nodeUv(ids.z)).xyz,d=texture2D(uPrevious,nodeUv(ids.w)).xyz;
vec3 da=pos(ids.x)-a,db=pos(ids.y)-b,dc=pos(ids.z)-c,dd=pos(ids.w)-d;
float safe=1.0;
if(volume(a+da,b+db,c+dc,d+dd)<rv*0.15 || volume(a+da*0.5,b+db*0.5,c+dc*0.5,d+dd*0.5)<rv*0.15){
float lo=0.0,hi=1.0;for(int j=0;j<12;j++){float f=(lo+hi)*0.5;if(volume(a+da*f,b+db*f,c+dc*f,d+dd*f)>=rv*0.15)lo=f;else hi=f;}safe=lo*0.98;
}gl_FragColor=vec4(safe);}`,
      {
        uPrevious: { value: this.previous.texture },
        uTetra: { value: tetra },
        uVolumes: { value: volumes },
        uTetSize: size(tetra),
      },
    );
    this.reduceSafetyPass = make(
      `uniform sampler2D uSafety;uniform vec2 uTetSize;
void main(){float f=1.0;for(int i=0;i<${t.tetraRestVolumes.length};i++)f=min(f,texture2D(uSafety,packedUv(float(i),uTetSize)).x);gl_FragColor=vec4(f);}`,
      { uSafety: { value: this.safety.texture }, uTetSize: size(tetra) },
    );
    this.applySafetyPass = make(
      `uniform sampler2D uPrevious,uFraction;void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;float f=texture2D(uFraction,vec2(0.5)).x;gl_FragColor=mix(texture2D(uPrevious,uv),texture2D(uPositions,uv),f);}`,
      {
        uPrevious: { value: this.previous.texture },
        uFraction: { value: this.safeFraction.texture },
      },
    );
    this.velocityPass = make(
      `
uniform sampler2D uPrevious;
uniform float uGravity;
void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;if(texture2D(uRest,uv).w<0.5){gl_FragColor=vec4(0.0);return;}
vec3 p=texture2D(uPositions,uv).xyz,old=texture2D(uPrevious,uv).xyz,v=(p-old)/uDelta;
if(p.y<${PEACH_FLOOR + 0.001}){
// Contact removes inward velocity. Upward motion is supplied by stored strain
// in the volume constraints, not a second impulse added to the whole body.
v.y=max(v.y,0.0);

}
float speed=length(v);if(speed>8.0)v*=8.0/speed;gl_FragColor=vec4(v,1.0);}`,
      {
        uPrevious: { value: this.previous.texture },
        uGravity: { value: 1 },
      },
    );
    this.boundsPass = make(`void main(){vec3 low=vec3(1e20),high=vec3(-1e20);
for(int i=0;i<${t.nodeCount};i++){vec3 d=pos(float(i))-texture2D(uRest,nodeUv(float(i))).xyz;low=min(low,d);high=max(high,d);}
gl_FragColor=vec4(gl_FragCoord.x<1.0?low:high,1.0);}`);
    this.skinPass = make(
      `uniform sampler2D uSurface;void main(){vec2 uv=gl_FragCoord.xy/vec2(${VOLUME_SIDES}.0,${VOLUME_RINGS + 1}.0);float id=texture2D(uSurface,uv).x;gl_FragColor=vec4(pos(id)-texture2D(uRest,nodeUv(id)).xyz,1.0);}`,
      { uSurface: { value: surface } },
    );
    const restU = new Float32Array(source.length),
      restV = new Float32Array(source.length),
      uvs = new Float32Array((source.length / 3) * 2);
    for (let r = 0; !geometry.userData.volumeSkinning && r <= rings; r++)
      for (let c = 0; c <= sides; c++) {
        const vi = r * (sides + 1) + c;
        uvs[vi * 2] = (c * VOLUME_SIDES) / sides;
        uvs[vi * 2 + 1] = (r * VOLUME_RINGS) / rings;
        const left = r * (sides + 1) + ((c + sides - 1) % sides),
          right = r * (sides + 1) + ((c + 1) % sides);
        const up = Math.max(0, r - 1) * (sides + 1) + c,
          down = Math.min(rings, r + 1) * (sides + 1) + c;
        for (let k = 0; k < 3; k++) {
          restU[vi * 3 + k] =
            ((source[right * 3 + k] - source[left * 3 + k]) * sides) /
            (2 * VOLUME_SIDES);
          restV[vi * 3 + k] =
            ((source[down * 3 + k] - source[up * 3 + k]) * rings) /
            (2 * VOLUME_RINGS);
        }
      }
    geometry.setAttribute(
      "aRestPosition",
      new THREE.BufferAttribute(source.slice(), 3),
    );
    if (!geometry.hasAttribute("aRestDu"))
      geometry.setAttribute("aRestDu", new THREE.BufferAttribute(restU, 3));
    if (!geometry.hasAttribute("aRestDv"))
      geometry.setAttribute("aRestDv", new THREE.BufferAttribute(restV, 3));
    geometry.setAttribute("aSoftUv", new THREE.BufferAttribute(uvs, 2));
    this.reset();
  }
  private pass(
    material: THREE.ShaderMaterial,
    output: THREE.WebGLRenderTarget,
  ): void {
    material.uniforms.uPositions.value = this.positions[0].texture;
    material.uniforms.uVelocity.value = this.velocities[0].texture;
    this.gpu.doRenderTarget(material, output);
  }
  step(delta: number, settings: SoftBodySettings): void {
    if (this.disposed || settings.paused) return;
    this.accumulator +=
      Math.min(0.05, Math.max(0, delta)) * (settings.slowMotion ? 0.24 : 1);
    let count = 0;
    while (this.accumulator >= STEP && count < MAX_SUBSTEPS) {
      this.gpu.renderTexture(this.positions[0].texture, this.previous);
      this.pass(this.comPass, this.com);
      this.predictPass.uniforms.uGravity.value =
        settings.gravity === false
          ? 0
          : THREE.MathUtils.clamp(
              (settings.gravityStrength ?? 100) / 100,
              0,
              2,
            );
      this.shapePass.uniforms.uGravity.value =
        settings.gravity === false
          ? 0
          : THREE.MathUtils.clamp(
              (settings.gravityStrength ?? 100) / 100,
              0,
              2,
            );
      this.predictPass.uniforms.uAirDrag.value = this.active ? 1.4 : 0.08;
      this.predictPass.uniforms.uDamping.value = THREE.MathUtils.lerp(
        0.6,
        8,
        settings.damping / 100,
      );
      if (this.shakePending) {
        this.shakePending = false;
        this.shakeTime = 0;
        this.shakeCount++;
        const angle = this.shakeCount * 2.17;
        this.predictPass.uniforms.uShakeMix.value.set(
          Math.cos(angle),
          Math.sin(angle),
        );
      }
      let shake = 0;
      if (this.shakeTime < SHAKE_DURATION) {
        const progress = (this.shakeTime + STEP * 0.5) / SHAKE_DURATION;
        shake =
          SHAKE_ACCELERATION *
          STEP *
          Math.sin(Math.PI * progress) *
          Math.sin(4 * Math.PI * progress);
        this.shakeTime = Math.min(SHAKE_DURATION, this.shakeTime + STEP);
        this.pass(this.shapePass, this.shape);
      }
      this.predictPass.uniforms.uShake.value = shake;
      this.pass(this.predictPass, this.positions[1]);
      this.positions.reverse();
      const strength = THREE.MathUtils.clamp(
        (settings.handStrength ?? 60) / 100,
        0,
        1,
      );
      this.projectPass.uniforms.uEdgeCompliance.value = THREE.MathUtils.lerp(
        8e-5,
        2e-8,
        settings.firmness / 100,
      );
      if (this.active)
        this.grabTarget.add(
          this.targetDelta
            .copy(this.requestedTarget)
            .sub(this.grabTarget)
            .clampLength(0, 1.5 * STEP),
        );
      this.projectPass.uniforms.uGrabActive.value =
        this.active && strength > 0 ? 1 : 0;
      this.projectPass.uniforms.uGrabCompliance.value = THREE.MathUtils.lerp(
        7e-3,
        1e-3,
        strength * strength,
      );
      this.projectPass.uniforms.uShapeStiffness.value = THREE.MathUtils.lerp(
        0.012,
        0.05,
        settings.firmness / 100,
      );
      this.pass(this.shapePass, this.shape);
      for (let i = 0; i < ITERATIONS; i++) {
        if (this.active && strength > 0) this.pass(this.grabPass, this.grab);
        this.pass(this.projectPass, this.positions[1]);
        this.positions.reverse();
      }
      if (this.wallUniforms.uWalls.value > 0.5) {
        this.pass(this.viewportPass, this.viewportShift);
        this.pass(this.applyViewportPass, this.positions[1]);
        this.positions.reverse();
      }
      this.pass(this.safetyPass, this.safety);
      this.pass(this.reduceSafetyPass, this.safeFraction);
      this.pass(this.applySafetyPass, this.positions[1]);
      this.positions.reverse();
      this.pass(this.velocityPass, this.velocities[1]);
      this.velocities.reverse();
      this.accumulator -= STEP;
      count++;
    }
    if (count === MAX_SUBSTEPS)
      this.accumulator = Math.min(this.accumulator, STEP);
    if (count) {
      this.pass(this.skinPass, this.skin);
      if (this.geometry.userData.volumeSkinning)
        this.pass(this.normalPass, this.normalFrames);
      this.pass(this.boundsPass, this.boundsTarget);
    }
    for (const uniform of this.volumeUniforms)
      uniform.value = this.positions[0].texture;
  }
  beginGrab(
    point: THREE.Vector3,
    triangle?: readonly number[],
    barycentric?: THREE.Vector3,
  ): void {
    this.start.copy(point);
    this.grabTarget.copy(point);
    this.requestedTarget.copy(point);
    this.active = true;
    if (!triangle || !barycentric) {
      this.syncSurfaceForRaycast();
      const p = this.geometry.getAttribute("position");
      let nearest = 0,
        distance = Infinity;
      for (let i = 0; i < p.count; i++) {
        const d =
          (p.getX(i) - point.x) ** 2 +
          (p.getY(i) - point.y) ** 2 +
          (p.getZ(i) - point.z) ** 2;
        if (d < distance) {
          distance = d;
          nearest = i;
        }
      }
      triangle = [nearest];
      barycentric = new THREE.Vector3(1, 0, 0);
    }
    const map = new Map<number, number>();
    const restPoint = new THREE.Vector3();
    triangle.forEach((vertex, i) => {
      const weight = barycentric!.getComponent(i);
      restPoint.addScaledVector(
        new THREE.Vector3().fromArray(this.source, vertex * 3),
        weight,
      );
      const b = this.topology.bindings[vertex];
      b.nodes.forEach((node, j) =>
        map.set(node, (map.get(node) ?? 0) + weight * b.weights[j]),
      );
    });
    if (map.size > MAX_GRAB_NODES)
      throw new Error("Grab attachment exceeds GPU capacity.");
    const nodes = this.grabPass.uniforms.uNodes.value as Float32Array,
      weights = this.grabPass.uniforms.uWeights.value as Float32Array;
    const field = this.grabWeightValues;
    field.fill(0);
    let i = 0;
    for (const [node, w] of map) {
      nodes[i] = node;
      weights[i] = w;
      i++;
    }
    // Measure the exact clicked material point with its original cubic weights,
    // but spread the hand force through a small volume, as a fingertip does.
    // Signed interpolation weights must not become alternating point forces
    // that tear very thin rim cells into needles.
    for (let node = 0; node < this.topology.nodeCount; node++) {
      const distanceSquared = new THREE.Vector3()
        .fromArray(this.topology.restPositions, node * 3)
        .distanceToSquared(restPoint);
      const falloff = Math.max(0, 1 - distanceSquared / (0.36 * 0.36));
      field[node * 4] = falloff * falloff;
    }
    this.grabPass.uniforms.uCount.value = i;
    this.grabPass.uniforms.uPoint.value.copy(restPoint);
    this.grabWeights.needsUpdate = true;
  }
  moveGrab(point: THREE.Vector3): void {
    if (this.active) {
      this.requestedTarget
        .copy(point)
        .sub(this.start)
        .clampLength(0, 0.9)
        .add(this.start);
      this.confineGrabTarget();
    }
  }
  private confineGrabTarget(): void {
    const u = this.wallUniforms;
    if (u.uWalls.value < 0.5) return;
    const right = u.uWallRight.value as THREE.Vector3,
      up = u.uWallUp.value as THREE.Vector3,
      direction = u.uWallDirection.value as THREE.Vector3;
    const focus = u.uWallFocus.value as THREE.Vector3,
      fov = u.uWallFov.value as THREE.Vector2;
    // Saturate the hand at the wall instead of pulling indefinitely through it.
    // Lateral correction preserves the picked point's camera-plane depth.
    for (let i = 0; i < 3; i++) {
      const q = this.targetDelta.copy(this.requestedTarget).sub(focus);
      const extent = u.uWallDistance.value - q.dot(direction);
      const x = q.dot(right),
        y = q.dot(up);
      this.requestedTarget.addScaledVector(
        right,
        THREE.MathUtils.clamp(
          x,
          extent * (u.uWallOffset.value.x - fov.x),
          extent * (u.uWallOffset.value.x + fov.x),
        ) - x,
      );
      this.requestedTarget.addScaledVector(
        up,
        THREE.MathUtils.clamp(
          y,
          extent * (u.uWallOffset.value.y - fov.y),
          extent * (u.uWallOffset.value.y + fov.y),
        ) - y,
      );
      this.requestedTarget.y = Math.max(PEACH_FLOOR, this.requestedTarget.y);
    }
  }
  endGrab(): void {
    this.active = false;
  }
  triggerShake(): void {
    if (this.shakeTime >= SHAKE_DURATION) this.shakePending = true;
  }
  reset(): void {
    this.active = false;
    this.accumulator = 0;
    this.shakePending = false;
    this.shakeCount = 0;
    this.shakeTime = SHAKE_DURATION;
    for (const rt of this.positions) this.gpu.renderTexture(this.rest, rt);
    const zero = texture(
      new Float32Array(this.nodesBuffer.length),
      this.width,
      this.height,
    );
    for (const rt of this.velocities) this.gpu.renderTexture(zero, rt);
    zero.dispose();
    this.pass(this.skinPass, this.skin);
    if (this.geometry.userData.volumeSkinning)
      this.pass(this.normalPass, this.normalFrames);
    this.pass(this.boundsPass, this.boundsTarget);
    this.syncSurfaceForRaycast();
  }
  setPlayBounds(bounds: PlayBounds | null): void {
    const u = this.wallUniforms;
    u.uWalls.value = bounds ? 1 : 0;
    if (!bounds) return;
    u.uWallRight.value.copy(bounds.right);
    u.uWallUp.value.copy(bounds.up);
    u.uWallDirection.value.copy(bounds.direction);
    u.uWallFocus.value.copy(bounds.focus);
    u.uWallDistance.value = bounds.distance;
    u.uWallFov.value.copy(bounds.halfFov);
    u.uWallOffset.value.copy(bounds.offsetFov);
    u.uWallDepth.value = bounds.depthLimit;
  }
  getSurfaceBounds(): THREE.Box3 {
    this.renderer.readRenderTargetPixels(
      this.boundsTarget,
      0,
      0,
      2,
      1,
      this.boundsPixels,
    );
    // Catmull-Rom weights sum to one; the largest absolute weight sum over
    // both axes is 1.25². Include that overshoot, not only the coarse nodes.
    for (let k = 0; k < 3; k++) {
      const middle = (this.boundsPixels[k] + this.boundsPixels[k + 4]) * 0.5;
      const half =
        (this.boundsPixels[k + 4] - this.boundsPixels[k]) * 0.5 * 1.5625 +
        0.005;
      this.surfaceBounds.min.setComponent(
        k,
        this.restBounds.min.getComponent(k) + middle - half,
      );
      this.surfaceBounds.max.setComponent(
        k,
        this.restBounds.max.getComponent(k) + middle + half,
      );
    }
    return this.surfaceBounds;
  }
  private readNodes(): void {
    this.renderer.readRenderTargetPixels(
      this.positions[0],
      0,
      0,
      this.width,
      this.height,
      this.nodesBuffer,
    );
  }
  snapshot(): SoftBodySnapshot {
    this.readNodes();
    const velocity = new Float32Array(this.nodesBuffer.length);
    this.renderer.readRenderTargetPixels(
      this.velocities[0],
      0,
      0,
      this.width,
      this.height,
      velocity,
    );
    const positions = new Float32Array(this.topology.nodeCount * 3);
    const velocities = new Float32Array(positions.length);
    for (let i = 0; i < this.topology.nodeCount; i++) {
      positions.set(this.nodesBuffer.subarray(i * 4, i * 4 + 3), i * 3);
      velocities.set(velocity.subarray(i * 4, i * 4 + 3), i * 3);
    }
    return { topology: this.topology, positions, velocities };
  }
  restoreState(positions: Float32Array, velocities?: Float32Array): void {
    const p = new Float32Array(this.nodesBuffer.length),
      v = new Float32Array(p.length);
    for (let i = 0; i < this.topology.nodeCount; i++) {
      p.set(positions.subarray(i * 3, i * 3 + 3), i * 4);
      p[i * 4 + 3] = 1;
      if (velocities) v.set(velocities.subarray(i * 3, i * 3 + 3), i * 4);
    }
    const pt = texture(p, this.width, this.height),
      vt = texture(v, this.width, this.height);
    for (const rt of this.positions) this.gpu.renderTexture(pt, rt);
    for (const rt of this.velocities) this.gpu.renderTexture(vt, rt);
    pt.dispose();
    vt.dispose();
    this.pass(this.skinPass, this.skin);
    if (this.geometry.userData.volumeSkinning)
      this.pass(this.normalPass, this.normalFrames);
    this.pass(this.boundsPass, this.boundsTarget);
    this.syncSurfaceForRaycast();
  }
  syncSurfaceForRaycast(): void {
    this.readNodes();
    const attr = this.geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;
    this.topology.bindings.forEach((b, i) => {
      let x = this.source[i * 3],
        y = this.source[i * 3 + 1],
        z = this.source[i * 3 + 2];
      b.nodes.forEach((n, j) => {
        const w = b.weights[j];
        x += w * (this.nodesBuffer[n * 4] - this.topology.restPositions[n * 3]);
        y +=
          w *
          (this.nodesBuffer[n * 4 + 1] -
            this.topology.restPositions[n * 3 + 1]);
        z +=
          w *
          (this.nodesBuffer[n * 4 + 2] -
            this.topology.restPositions[n * 3 + 2]);
      });
      attr.setXYZ(i, x, y, z);
    });
    attr.needsUpdate = true;
    this.geometry.computeBoundingSphere();
    this.geometry.computeBoundingBox();
  }
  diagnostics(): {
    volumeRatio: number;
    minVolumeRatio: number;
    minimumY: number;
    maxSpeed: number;
    centerY: number;
    centerVelocityY: number;
    centerSpeed: number;
    maxEdgeRatio: number;
    strainSpeed: number;
  } {
    this.readNodes();
    let total = 0,
      rest = 0,
      min = Infinity,
      minY = Infinity,
      maxSpeed = 0,
      centerY = 0,
      centerVelocityY = 0,
      maxEdgeRatio = 0;
    let speedSquared = 0,
      velocityX = 0,
      velocityZ = 0;
    const p = this.nodesBuffer;
    for (let i = 0; i < this.topology.nodeCount; i++) {
      minY = Math.min(minY, p[i * 4 + 1]);
      centerY += p[i * 4 + 1] / this.topology.nodeCount;
      for (const j of this.topology.edges[i]) {
        const length = Math.hypot(
          p[j * 4] - p[i * 4],
          p[j * 4 + 1] - p[i * 4 + 1],
          p[j * 4 + 2] - p[i * 4 + 2],
        );
        const r = this.topology.restPositions;
        const restLength = Math.hypot(
          r[j * 3] - r[i * 3],
          r[j * 3 + 1] - r[i * 3 + 1],
          r[j * 3 + 2] - r[i * 3 + 2],
        );
        maxEdgeRatio = Math.max(
          maxEdgeRatio,
          length / Math.max(restLength, 1e-8),
        );
      }
    }
    const a = new THREE.Vector3(),
      b = new THREE.Vector3(),
      c = new THREE.Vector3(),
      d = new THREE.Vector3();
    this.topology.tetraRestVolumes.forEach((rv, i) => {
      const ids = this.topology.tetrahedra.subarray(i * 4, i * 4 + 4);
      a.fromArray(p, ids[0] * 4);
      b.fromArray(p, ids[1] * 4).sub(a);
      c.fromArray(p, ids[2] * 4).sub(a);
      d.fromArray(p, ids[3] * 4).sub(a);
      const v = b.dot(c.cross(d)) / 6;
      total += v;
      rest += rv;
      min = Math.min(min, v / rv);
    });
    this.renderer.readRenderTargetPixels(
      this.velocities[0],
      0,
      0,
      this.width,
      this.height,
      p,
    );
    for (let i = 0; i < this.topology.nodeCount; i++) {
      maxSpeed = Math.max(
        maxSpeed,
        Math.hypot(p[i * 4], p[i * 4 + 1], p[i * 4 + 2]),
      );
      centerVelocityY += p[i * 4 + 1] / this.topology.nodeCount;
      velocityX += p[i * 4] / this.topology.nodeCount;
      velocityZ += p[i * 4 + 2] / this.topology.nodeCount;
      speedSquared +=
        (p[i * 4] ** 2 + p[i * 4 + 1] ** 2 + p[i * 4 + 2] ** 2) /
        this.topology.nodeCount;
    }
    return {
      volumeRatio: total / rest,
      minVolumeRatio: min,
      minimumY: minY,
      maxSpeed,
      centerY,
      centerVelocityY,
      centerSpeed: Math.hypot(velocityX, centerVelocityY, velocityZ),
      maxEdgeRatio,
      strainSpeed: Math.sqrt(
        Math.max(
          0,
          speedSquared - velocityX ** 2 - centerVelocityY ** 2 - velocityZ ** 2,
        ),
      ),
    };
  }
  bindSurfaceMaterial(
    material: THREE.MeshPhysicalMaterial | THREE.MeshDepthMaterial,
  ): void {
    if (this.geometry.userData.volumeSkinning) {
      material.onBeforeCompile = (shader: SkinShader) => {
        const positions = { value: this.positions[0].texture };
        this.volumeUniforms.push(positions);
        shader.uniforms.uVolumePositions = positions;
        shader.uniforms.uVolumeNormals = { value: this.normalFrames.texture };
        shader.vertexShader = shader.vertexShader.replace(
          "#include <common>",
          `#include <common>
attribute vec4 aVolumeNodes,aVolumeWeights;
attribute vec3 aVolumeNormal;
uniform sampler2D uVolumePositions,uVolumeNormals;
mat3 volumeFrame(float n){
 vec2 at=vec2(mod(n,${this.width}.0)*3.0,floor(n/${this.width}.0));
 vec2 size=vec2(${this.width * 3}.0,${this.height}.0);
 return mat3(texture2D(uVolumeNormals,(at+vec2(.5,.5))/size).xyz,texture2D(uVolumeNormals,(at+vec2(1.5,.5))/size).xyz,texture2D(uVolumeNormals,(at+vec2(2.5,.5))/size).xyz);
}
vec3 volumeNode(float n){return texture2D(uVolumePositions,(vec2(mod(n,${this.width}.0),floor(n/${this.width}.0))+.5)/vec2(${this.width}.0,${this.height}.0)).xyz;}
void volumeSample(out vec3 p,out vec3 n){
 vec3 a=volumeNode(aVolumeNodes.x),b=volumeNode(aVolumeNodes.y),c=volumeNode(aVolumeNodes.z),d=volumeNode(aVolumeNodes.w);
 p=a*aVolumeWeights.x+b*aVolumeWeights.y+c*aVolumeWeights.z+d*aVolumeWeights.w;
 vec4 w=max(aVolumeWeights,vec4(0.0));w/=dot(w,vec4(1.0));
 mat3 f=volumeFrame(aVolumeNodes.x)*w.x+volumeFrame(aVolumeNodes.y)*w.y+volumeFrame(aVolumeNodes.z)*w.z+volumeFrame(aVolumeNodes.w)*w.w;
 n=normalize(cross(f[1],f[2])*normal.x+cross(f[2],f[0])*normal.y+cross(f[0],f[1])*normal.z);
}`,
        );
        shader.vertexShader = shader.vertexShader.replace(
          "#include <beginnormal_vertex>",
          "vec3 volumePosition,objectNormal;volumeSample(volumePosition,objectNormal);",
        );
        shader.vertexShader = shader.vertexShader.replace(
          "#include <begin_vertex>",
          material instanceof THREE.MeshDepthMaterial
            ? "vec3 volumePosition,volumeNormal;volumeSample(volumePosition,volumeNormal);vec3 transformed=volumePosition;"
            : "vec3 transformed=volumePosition;",
        );
      };
      material.customProgramCacheKey = () =>
        `jelly-volume-embedded-v3-${this.width}x${this.height}`;
      return;
    }
    material.onBeforeCompile = (shader: SkinShader) => {
      shader.uniforms.uSoftDisplacement = { value: this.skin.texture };
      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `#include <common>
attribute vec3 aRestPosition,aRestDu,aRestDv;attribute vec2 aSoftUv;uniform sampler2D uSoftDisplacement;
vec4 weights(float t){return vec4(-0.5*t+t*t-0.5*t*t*t,1.0-2.5*t*t+1.5*t*t*t,0.5*t+2.0*t*t-1.5*t*t*t,-0.5*t*t+0.5*t*t*t);}
vec4 derivatives(float t){return vec4(-0.5+2.0*t-1.5*t*t,-5.0*t+4.5*t*t,0.5+4.0*t-4.5*t*t,-t+1.5*t*t);}
void softSample(out vec3 delta,out vec3 du,out vec3 dv){vec2 f=fract(aSoftUv),base=floor(aSoftUv);vec4 wx=weights(f.x),wy=weights(f.y),dx=derivatives(f.x),dy=derivatives(f.y);delta=vec3(0.0);du=vec3(0.0);dv=vec3(0.0);
for(int y=0;y<4;y++)for(int x=0;x<4;x++){vec2 p=base+vec2(float(x)-1.0,float(y)-1.0);p.x=mod(p.x+${VOLUME_SIDES}.0,${VOLUME_SIDES}.0);p.y=clamp(p.y,0.0,${VOLUME_RINGS}.0);vec3 d=texture2D(uSoftDisplacement,(p+0.5)/vec2(${VOLUME_SIDES}.0,${VOLUME_RINGS + 1}.0)).xyz;delta+=d*wx[x]*wy[y];du+=d*dx[x]*wy[y];dv+=d*wx[x]*dy[y];}}`,
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <beginnormal_vertex>",
        `vec3 softDelta,softDu,softDv;softSample(softDelta,softDu,softDv);vec3 n=cross(aRestDu+softDu,aRestDv+softDv);vec3 objectNormal=length(n)>0.000001?normalize(n):normalize(normal);`,
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        material instanceof THREE.MeshDepthMaterial
          ? "vec3 softDelta,softDu,softDv;softSample(softDelta,softDu,softDv);vec3 transformed=aRestPosition+softDelta;"
          : "vec3 transformed=aRestPosition+softDelta;",
      );
    };
    material.customProgramCacheKey = () => "jelly-volume-surface-v2";
  }
  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const m of this.materials) m.dispose();
    for (const t of this.textures) t.dispose();
    for (const rt of [
      ...this.positions,
      ...this.velocities,
      this.previous,
      this.com,
      this.grab,
      this.skin,
      this.normalFrames,
      this.safety,
      this.safeFraction,
      this.shape,
      this.viewportShift,
      this.boundsTarget,
    ])
      rt.dispose();
    this.gpu.dispose();
  }
}
export function createGpuSoftBody(
  renderer: THREE.WebGLRenderer,
  geometry: THREE.BufferGeometry,
  source: Float32Array,
  rings: number,
  sides: number,
  volumeSource: Float32Array,
  warp: VolumePointMap,
  topology?: VolumeTopology,
): SoftBodyGpu {
  if (
    !renderer.capabilities.isWebGL2 ||
    !renderer.getContext().getExtension("EXT_color_buffer_float")
  )
    throw new Error("Floating-point WebGL 2 simulation is unavailable.");
  return new VolumeBody(
    renderer,
    geometry,
    source,
    rings,
    sides,
    volumeSource,
    warp,
    topology,
  );
}
