import { Improvement } from "../../../models/Improvement";
export interface MapProps {
  onTileClick: (tileIndex: number) => void;
  improvements: Improvement[];
  resources: Resource[];
}
