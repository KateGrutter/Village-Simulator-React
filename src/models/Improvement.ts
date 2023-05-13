export interface Resource {
    type: string;
    amount: number;
    icon?: string
}

export interface Improvement {
    type: string;
    level: number;
    resourceProduced: Resource;
    cost: Resource[]
}