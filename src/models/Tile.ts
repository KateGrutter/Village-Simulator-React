import { Improvement } from "./Improvement";

export interface TileData {
    improvement: Improvement | undefined;
  rowIndex: number; // Add the rowIndex property
  tileIndex: number;
  index: number;
}