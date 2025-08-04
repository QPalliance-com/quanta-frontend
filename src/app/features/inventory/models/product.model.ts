export interface Product {
    id?: number;
    code: string;
    name: string;
    description?: string;
    type: 'input' | 'final_product';
    unit: string;
    estimatedUnitPrice?: number;
    defaultLocation?: string;
    isActive: boolean;

    isVariant?: boolean; // ← Si es variante de otro
    parentProductId?: number; // ← Referencia al producto padre (si aplica)
    variationAttributes?: string[]; // ← ["500ml", "1L", "Caja 50und"] (opcional)
}
export interface ProductVariant {
    idProduct: number;
    code: string;
    unit: string;
    estimatedUnitPrice: number;
    variationAttributes: string[];
}
