interface Resource {
    type: string;
    amount: number;
}

export interface Improvement {
    type: string;
    level: number;
    resourceProduced: Resource;
    cost: Resource[]
}