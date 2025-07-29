export interface Product {
    id: number;
    code: string;
    name: string;
    description?: string;
    unit: string;
    type: 'input' | 'final_product';
    defaultLocation?: string;
    estimatedUnitPrice?: number;
    isActive: boolean;
}
