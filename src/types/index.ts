export type PlacementCoeff = {
  x: number;
  y: number;
};

export const CellPlacement = {
  TOP_LEFT: { x: 1, y: 1 } as PlacementCoeff,
  TOP_MIDDLE: { x: 0, y: 1 } as PlacementCoeff,
  TOP_RIGHT: { x: -1, y: 1 } as PlacementCoeff,
  MIDDLE_LEFT: { x: 1, y: 0 } as PlacementCoeff,
  CENTER: { x: 0, y: 0 } as PlacementCoeff,
  MIDDLE_RIGHT: { x: -1, y: 0 } as PlacementCoeff,
  BOTTOM_LEFT: { x: 1, y: -1 } as PlacementCoeff,
  BOTTOM_MIDDLE: { x: 0, y: -1 } as PlacementCoeff,
  BOTTOM_RIGHT: { x: -1, y: -1 } as PlacementCoeff,
} as { [key: string]: PlacementCoeff };
