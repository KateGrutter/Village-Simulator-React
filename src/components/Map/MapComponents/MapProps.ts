import { Improvement } from '../../../models/Improvement';
import { Resource } from '../../../models/Resource';

export interface MapProps {
  onTileClick: (tileIndex: number) => void;
  improvements: Improvement[];
  resources: Resource[];
}
