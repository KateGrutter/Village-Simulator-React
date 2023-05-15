export interface Resource {
    type: string;
    amount: number;
    icon?: string;
    
}

export interface Improvement {
    type: string;
    level: number;
    icon: string;
    resourceProduced: Resource;
    cost: Resource[]
   
}