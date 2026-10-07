import type { SpecimenId } from "./specimens";

export interface MunchEventDetail {
  specimen: SpecimenId;
  removedVolume: number;
  remainingPieces: number;
  consumed: boolean;
}
// A future sound layer can subscribe here. Misses and rejected cuts never emit
// an event, so audio only accompanies a successfully committed physical bite.
export const munchEvents = new EventTarget();
export function emitMunch(detail: MunchEventDetail): void {
  munchEvents.dispatchEvent(new CustomEvent("munch", { detail }));
}
