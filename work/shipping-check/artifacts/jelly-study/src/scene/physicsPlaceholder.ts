/**
 * Reserved interface for the next material-study stage.
 * No soft-body, cutting, or simulation behavior exists in this build.
 */
export interface DeformableSpecimen {
  readonly restPositions: Float32Array;
  readonly currentPositions: Float32Array;
}

export function createDeformableSpecimen(restPositions: Float32Array): DeformableSpecimen {
  return {
    restPositions,
    currentPositions: new Float32Array(restPositions),
  };
}