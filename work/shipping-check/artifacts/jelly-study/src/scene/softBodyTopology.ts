export const SOFT_BODY_TEXTURE_WIDTH = 128;
export const SOFT_BODY_TEXTURE_HEIGHT = 512;
export const SOFT_BODY_TEXTURE_CAPACITY = SOFT_BODY_TEXTURE_WIDTH * SOFT_BODY_TEXTURE_HEIGHT;
export const SOFT_BODY_MAX_LINKS = 16;
export const SOFT_BODY_LINK_TEXTURE_WIDTH = SOFT_BODY_TEXTURE_WIDTH * SOFT_BODY_MAX_LINKS;

const SHELL_FACTORS = [1, 0.72, 0.45, 0.18] as const;
const RADIAL_SHELLS = SHELL_FACTORS.length;
const SPINE_SPOKES = 8;

export interface SoftBodyTopology {
  readonly nodeCount: number;
  readonly restPositions: Float32Array;
  /** Four floats per link pixel: neighbor node, rest length, stiffness scale, unused. */
  readonly links: Float32Array<ArrayBuffer>;
  readonly surfaceNodeIds: Float32Array;
  /** Per surface vertex: left, right, up, down node IDs. */
  readonly surfaceNeighbors: Float32Array;
  /** Four node IDs per tetrahedron, with one rest volume per element. */
  readonly tetrahedra: Uint32Array;
  readonly tetraRestVolumes: Float32Array;
}

/**
 * Turns the existing closed surface into a spring-connected volume. The outer
 * shell follows the visible mesh exactly; inner shells and a center spine make
 * the volume element list useful for later section/cut operations.
 */
export function createSoftBodyTopology(
  sourcePositions: Float32Array,
  rings: number,
  sides: number,
): SoftBodyTopology {
  const surfaceVertexCount = (rings + 1) * (sides + 1);
  if (sourcePositions.length !== surfaceVertexCount * 3) {
    throw new Error('Soft-body topology does not match the specimen surface.');
  }

  const restPositions = new Float32Array(SOFT_BODY_TEXTURE_CAPACITY * 4);
  const nodeCoordinates = new Float32Array(SOFT_BODY_TEXTURE_CAPACITY * 3);
  let nodeCount = 0;
  const addNode = (x: number, y: number, z: number): number => {
    if (nodeCount >= SOFT_BODY_TEXTURE_CAPACITY) {
      throw new Error('The specimen volume exceeds the supported GPU texture size.');
    }
    const id = nodeCount;
    const p = id * 3;
    const t = id * 4;
    nodeCoordinates[p] = x;
    nodeCoordinates[p + 1] = y;
    nodeCoordinates[p + 2] = z;
    restPositions[t] = x;
    restPositions[t + 1] = y;
    restPositions[t + 2] = z;
    restPositions[t + 3] = 1;
    nodeCount += 1;
    return id;
  };
  const sourceVertex = (row: number, column: number): number => (row * (sides + 1) + column) * 3;
  const gridIndex = (row: number, column: number, shell: number): number =>
    (row * sides + column) * RADIAL_SHELLS + shell;

  const topIndex = sourceVertex(0, 0);
  const bottomIndex = sourceVertex(rings, 0);
  const topNode = addNode(sourcePositions[topIndex], sourcePositions[topIndex + 1], sourcePositions[topIndex + 2]);
  const bottomNode = addNode(
    sourcePositions[bottomIndex],
    sourcePositions[bottomIndex + 1],
    sourcePositions[bottomIndex + 2],
  );

  const shellNodes = new Int32Array((rings + 1) * sides * RADIAL_SHELLS);
  shellNodes.fill(-1);
  const spineNodes = new Int32Array(rings + 1);
  spineNodes.fill(-1);
  const rowCenters = new Float32Array((rings + 1) * 3);

  for (let row = 1; row < rings; row += 1) {
    let centerX = 0;
    let centerZ = 0;
    for (let column = 0; column < sides; column += 1) {
      const p = sourceVertex(row, column);
      centerX += sourcePositions[p];
      centerZ += sourcePositions[p + 2];
    }
    centerX /= sides;
    centerZ /= sides;
    const centerY = sourcePositions[sourceVertex(row, 0) + 1];
    const centerIndex = row * 3;
    rowCenters[centerIndex] = centerX;
    rowCenters[centerIndex + 1] = centerY;
    rowCenters[centerIndex + 2] = centerZ;

    for (let column = 0; column < sides; column += 1) {
      const surface = sourceVertex(row, column);
      const x = sourcePositions[surface];
      const y = sourcePositions[surface + 1];
      const z = sourcePositions[surface + 2];
      for (let shell = 0; shell < RADIAL_SHELLS; shell += 1) {
        const factor = SHELL_FACTORS[shell];
        shellNodes[gridIndex(row, column, shell)] = addNode(
          centerX + (x - centerX) * factor,
          centerY + (y - centerY) * factor,
          centerZ + (z - centerZ) * factor,
        );
      }
    }
    spineNodes[row] = addNode(centerX, centerY, centerZ);
  }

  const surfaceNodeIds = new Float32Array(surfaceVertexCount);
  const surfaceNodeAt = (row: number, column: number): number => {
    if (row <= 0) return topNode;
    if (row >= rings) return bottomNode;
    const wrappedColumn = ((column % sides) + sides) % sides;
    return shellNodes[gridIndex(row, wrappedColumn, 0)];
  };
  for (let row = 0; row <= rings; row += 1) {
    for (let column = 0; column <= sides; column += 1) {
      surfaceNodeIds[row * (sides + 1) + column] = surfaceNodeAt(row, column);
    }
  }

  const surfaceNeighbors = new Float32Array(surfaceVertexCount * 4);
  for (let row = 0; row <= rings; row += 1) {
    for (let column = 0; column <= sides; column += 1) {
      const vertex = row * (sides + 1) + column;
      const offset = vertex * 4;
      surfaceNeighbors[offset] = surfaceNodeAt(row, column - 1);
      surfaceNeighbors[offset + 1] = surfaceNodeAt(row, column + 1);
      surfaceNeighbors[offset + 2] = surfaceNodeAt(row - 1, column);
      surfaceNeighbors[offset + 3] = surfaceNodeAt(row + 1, column);
    }
  }

  const neighborIds = new Int32Array(SOFT_BODY_TEXTURE_CAPACITY * SOFT_BODY_MAX_LINKS);
  neighborIds.fill(-1);
  const neighborScales = new Float32Array(SOFT_BODY_TEXTURE_CAPACITY * SOFT_BODY_MAX_LINKS);
  const neighborCounts = new Uint8Array(SOFT_BODY_TEXTURE_CAPACITY);
  const addDirectedLink = (from: number, to: number, stiffness: number): void => {
    const base = from * SOFT_BODY_MAX_LINKS;
    const count = neighborCounts[from];
    for (let slot = 0; slot < count; slot += 1) {
      if (neighborIds[base + slot] === to) {
        neighborScales[base + slot] = Math.max(neighborScales[base + slot], stiffness);
        return;
      }
    }
    if (count >= SOFT_BODY_MAX_LINKS) {
      throw new Error('The specimen spring graph exceeds the supported link count.');
    }
    neighborIds[base + count] = to;
    neighborScales[base + count] = stiffness;
    neighborCounts[from] = count + 1;
  };
  const connect = (a: number, b: number, stiffness: number): void => {
    if (a === b) return;
    addDirectedLink(a, b, stiffness);
    addDirectedLink(b, a, stiffness);
  };

  // Axial edges and body diagonals form a compact 14-point volumetric stencil.
  for (let row = 1; row < rings; row += 1) {
    for (let column = 0; column < sides; column += 1) {
      for (let shell = 0; shell < RADIAL_SHELLS; shell += 1) {
        const from = shellNodes[gridIndex(row, column, shell)];
        for (let dr = -1; dr <= 1; dr += 1) {
          for (let dc = -1; dc <= 1; dc += 1) {
            for (let ds = -1; ds <= 1; ds += 1) {
              const manhattan = Math.abs(dr) + Math.abs(dc) + Math.abs(ds);
              const isAxial = manhattan === 1;
              const isBodyDiagonal = Math.abs(dr) === 1 && Math.abs(dc) === 1 && Math.abs(ds) === 1;
              if (!isAxial && !isBodyDiagonal) continue;
              const nextRow = row + dr;
              const nextShell = shell + ds;
              if (nextRow < 1 || nextRow >= rings || nextShell < 0 || nextShell >= RADIAL_SHELLS) continue;
              const nextColumn = (column + dc + sides) % sides;
              const to = shellNodes[gridIndex(nextRow, nextColumn, nextShell)];
              if (to > from) connect(from, to, isAxial ? 1.05 : 0.58);
            }
          }
        }
      }
    }
  }

  for (let row = 1; row < rings - 1; row += 1) {
    connect(spineNodes[row], spineNodes[row + 1], 1.2);
  }
  for (let row = 1; row < rings; row += 1) {
    for (let spoke = 0; spoke < SPINE_SPOKES; spoke += 1) {
      const column = Math.round((spoke * sides) / SPINE_SPOKES) % sides;
      connect(spineNodes[row], shellNodes[gridIndex(row, column, RADIAL_SHELLS - 1)], 0.84);
    }
  }
  for (let spoke = 0; spoke < SPINE_SPOKES; spoke += 1) {
    const column = Math.round((spoke * sides) / SPINE_SPOKES) % sides;
    connect(topNode, shellNodes[gridIndex(1, column, 0)], 0.8);
    connect(topNode, spineNodes[1], 0.7);
    connect(bottomNode, shellNodes[gridIndex(rings - 1, column, 0)], 0.8);
    connect(bottomNode, spineNodes[rings - 1], 0.7);
  }

  const links = new Float32Array(SOFT_BODY_TEXTURE_CAPACITY * SOFT_BODY_MAX_LINKS * 4);
  for (let node = 0; node < nodeCount; node += 1) {
    const nodeX = node % SOFT_BODY_TEXTURE_WIDTH;
    const nodeY = Math.floor(node / SOFT_BODY_TEXTURE_WIDTH);
    const rowOffset = nodeY * SOFT_BODY_LINK_TEXTURE_WIDTH * 4;
    for (let slot = 0; slot < neighborCounts[node]; slot += 1) {
      const pixel = rowOffset + (slot * SOFT_BODY_TEXTURE_WIDTH + nodeX) * 4;
      const neighbor = neighborIds[node * SOFT_BODY_MAX_LINKS + slot];
      const a = node * 3;
      const b = neighbor * 3;
      const dx = nodeCoordinates[b] - nodeCoordinates[a];
      const dy = nodeCoordinates[b + 1] - nodeCoordinates[a + 1];
      const dz = nodeCoordinates[b + 2] - nodeCoordinates[a + 2];
      links[pixel] = neighbor;
      links[pixel + 1] = Math.hypot(dx, dy, dz);
      links[pixel + 2] = neighborScales[node * SOFT_BODY_MAX_LINKS + slot];
      links[pixel + 3] = 1;
    }
  }

  const tetraNodeIds: number[] = [];
  const tetraVolumes: number[] = [];
  const addTetrahedron = (a: number, b: number, c: number, d: number): void => {
    const pa = a * 3;
    const pb = b * 3;
    const pc = c * 3;
    const pd = d * 3;
    const abx = nodeCoordinates[pb] - nodeCoordinates[pa];
    const aby = nodeCoordinates[pb + 1] - nodeCoordinates[pa + 1];
    const abz = nodeCoordinates[pb + 2] - nodeCoordinates[pa + 2];
    const acx = nodeCoordinates[pc] - nodeCoordinates[pa];
    const acy = nodeCoordinates[pc + 1] - nodeCoordinates[pa + 1];
    const acz = nodeCoordinates[pc + 2] - nodeCoordinates[pa + 2];
    const adx = nodeCoordinates[pd] - nodeCoordinates[pa];
    const ady = nodeCoordinates[pd + 1] - nodeCoordinates[pa + 1];
    const adz = nodeCoordinates[pd + 2] - nodeCoordinates[pa + 2];
    const volume =
      Math.abs(
        abx * (acy * adz - acz * ady) -
          aby * (acx * adz - acz * adx) +
          abz * (acx * ady - acy * adx),
      ) / 6;
    if (volume < 1e-10) return;
    tetraNodeIds.push(a, b, c, d);
    tetraVolumes.push(volume);
  };
  const nodeAt = (row: number, column: number, shell: number): number =>
    shellNodes[gridIndex(row, (column + sides) % sides, shell)];
  for (let row = 1; row < rings - 1; row += 1) {
    for (let column = 0; column < sides; column += 1) {
      const nextColumn = (column + 1) % sides;
      for (let shell = 0; shell < RADIAL_SHELLS - 1; shell += 1) {
        const v000 = nodeAt(row, column, shell);
        const v100 = nodeAt(row + 1, column, shell);
        const v010 = nodeAt(row, nextColumn, shell);
        const v001 = nodeAt(row, column, shell + 1);
        const v110 = nodeAt(row + 1, nextColumn, shell);
        const v101 = nodeAt(row + 1, column, shell + 1);
        const v011 = nodeAt(row, nextColumn, shell + 1);
        const v111 = nodeAt(row + 1, nextColumn, shell + 1);
        addTetrahedron(v000, v100, v110, v111);
        addTetrahedron(v000, v110, v010, v111);
        addTetrahedron(v000, v010, v011, v111);
        addTetrahedron(v000, v011, v001, v111);
        addTetrahedron(v000, v001, v101, v111);
        addTetrahedron(v000, v101, v100, v111);
      }
    }
  }
  for (let column = 0; column < sides; column += 1) {
    const nextColumn = (column + 1) % sides;
    for (let shell = 0; shell < RADIAL_SHELLS - 1; shell += 1) {
      const topOuterA = nodeAt(1, column, shell);
      const topOuterB = nodeAt(1, nextColumn, shell);
      const topInnerA = nodeAt(1, column, shell + 1);
      const topInnerB = nodeAt(1, nextColumn, shell + 1);
      addTetrahedron(topNode, topOuterA, topOuterB, topInnerB);
      addTetrahedron(topNode, topOuterA, topInnerB, topInnerA);

      const bottomOuterA = nodeAt(rings - 1, column, shell);
      const bottomOuterB = nodeAt(rings - 1, nextColumn, shell);
      const bottomInnerA = nodeAt(rings - 1, column, shell + 1);
      const bottomInnerB = nodeAt(rings - 1, nextColumn, shell + 1);
      addTetrahedron(bottomNode, bottomOuterB, bottomOuterA, bottomInnerB);
      addTetrahedron(bottomNode, bottomInnerB, bottomOuterA, bottomInnerA);
    }
  }
  for (let row = 1; row < rings - 1; row += 1) {
    for (let column = 0; column < sides; column += 1) {
      const nextColumn = (column + 1) % sides;
      const coreA = spineNodes[row];
      const coreB = spineNodes[row + 1];
      const ringA = nodeAt(row, column, RADIAL_SHELLS - 1);
      const ringB = nodeAt(row, nextColumn, RADIAL_SHELLS - 1);
      const ringC = nodeAt(row + 1, column, RADIAL_SHELLS - 1);
      const ringD = nodeAt(row + 1, nextColumn, RADIAL_SHELLS - 1);
      addTetrahedron(coreA, coreB, ringA, ringB);
      addTetrahedron(coreB, ringA, ringC, ringB);
      addTetrahedron(coreB, ringB, ringC, ringD);
    }
  }

  return {
    nodeCount,
    restPositions,
    links,
    surfaceNodeIds,
    surfaceNeighbors,
    tetrahedra: new Uint32Array(tetraNodeIds),
    tetraRestVolumes: new Float32Array(tetraVolumes),
  };
}
