import {
  createPeachGeometry,
  mapPeachSlicePoint,
  addPeachFleshAppearance,
} from "./peachGeometry";
import {
  createBitterGourdGeometry,
  mapBitterGourdPoint,
  addBitterGourdAppearance,
} from "./bitterGourdGeometry";
import {
  createDriedPersimmonGeometry,
  mapDriedPersimmonPoint,
  addDriedPersimmonAppearance,
  driedPersimmonInteriorColor,
} from "./driedPersimmonGeometry";
import {
  createLotusRootGeometry,
  mapLotusRootPoint,
  addLotusRootAppearance,
  lotusRootInteriorColor,
} from "./lotusRootGeometry";
export type SpecimenId =
  "peach" | "bitter-gourd" | "lotus-root" | "dried-persimmon";
export const specimens = {
  peach: {
    label: "Peach",
    title: "Longevity peach slice",
    latin: "Prunus persica",
    number: "001",
    note: "Pale flesh, a rose-colored heart, and an empty pit cavity in frosted translucent jelly.",
    create: createPeachGeometry,
    map: mapPeachSlicePoint,
    appearance: addPeachFleshAppearance,
  },
  "bitter-gourd": {
    label: "Bitter gourd",
    title: "Chinese bitter gourd",
    latin: "Momordica charantia",
    number: "002",
    note: "Knobbly green skin, layered pale flesh, and three orange-red seeds around a pale center in frosted translucent jelly.",
    create: createBitterGourdGeometry,
    map: mapBitterGourdPoint,
    appearance: addBitterGourdAppearance,
  },
  "lotus-root": {
    label: "Stuffed Lotus Root",
    title: "Stuffed lotus root slice",
    latin: "Nelumbo nucifera",
    number: "005",
    note: "Salmon-pink lotus root, uneven chambers of soft white sticky rice, small hollow channels, and embedded golden osmanthus blossoms.",
    create: createLotusRootGeometry,
    map: mapLotusRootPoint,
    appearance: addLotusRootAppearance,
    interior: { colorAt: lotusRootInteriorColor },
  },
  "dried-persimmon": {
    label: "Dried Persimmon",
    title: "Dried persimmon slice",
    latin: "Diospyros kaki",
    number: "004",
    note: "Exposed orange flesh, a darker heart, translucent star-shaped tissue, and dark speckles inside a frosted dried-persimmon rind.",
    create: createDriedPersimmonGeometry,
    map: mapDriedPersimmonPoint,
    appearance: addDriedPersimmonAppearance,
    // The later cutter can sample this at newly exposed material-space vertices.
    interior: { colorAt: driedPersimmonInteriorColor },
  },
};
