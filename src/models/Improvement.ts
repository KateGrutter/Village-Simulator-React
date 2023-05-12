import { Resource } from "./Resource";

export interface Improvement {
    type: string; //improvement
    level: number;
    resourceProduced: Resource; //may be referred to as benefit
    cost: Resource[]
}
  