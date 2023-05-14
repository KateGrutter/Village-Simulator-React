export interface Resource {
    type: string;
    amount: number;
    
}

export interface Improvement {
    type: string;
    level: number;
    icon: string;
    resourceProduced: Resource;
    cost: Resource[]
   
}