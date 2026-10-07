import * as THREE from "three";
import type { SpecimenId } from "./specimens";

export function addCutAppearance(
  material: THREE.MeshPhysicalMaterial,
  specimen: SpecimenId,
): void {
  const compile = material.onBeforeCompile.bind(material),
    key = material.customProgramCacheKey();
  material.onBeforeCompile = (shader, renderer) => {
    compile(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nattribute float aCutSurface;attribute vec3 aInteriorColor;varying vec4 vCutColor;varying vec3 vCutPoint;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      "void main() {\nvCutColor=vec4(aInteriorColor,aCutSurface);vCutPoint=aFleshCoordinate;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      "#include <common>\nvarying vec4 vCutColor;varying vec3 vCutPoint;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>
float cutNoise=fract(sin(dot(floor(vCutPoint*185.0),vec3(127.1,311.7,74.7)))*43758.5453);
vec3 cutColor=vCutColor.rgb*(.96+.06*cutNoise);
${
  specimen === "dried-persimmon"
    ? `
vec3 grainPoint=vCutPoint*105.0,grainCell=floor(grainPoint);
float seed=fract(sin(dot(grainCell,vec3(127.1,311.7,74.7)))*43758.5453);
float grainDistance=length(fract(grainPoint)-.5);
float speck=step(.92,seed)*(1.0-smoothstep(.14,.30,grainDistance));
cutColor=mix(cutColor,vec3(.092,.019,.006),speck*.88);`
    : ""
}
diffuseColor.rgb=mix(diffuseColor.rgb,cutColor,step(.5,vCutColor.a));
roughnessFactor=mix(roughnessFactor,.48,step(.5,vCutColor.a));`,
    );
  };
  material.customProgramCacheKey = () => key + "-munch-interior-v3-" + specimen;
}
