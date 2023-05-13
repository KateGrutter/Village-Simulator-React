// import { Resource } from "./Resource";

interface Improvement {
    type: string; //improvement
    level: number;
    resourceProduced: Resource; //may be referred to as benefit
    cost: Resource[]
}
