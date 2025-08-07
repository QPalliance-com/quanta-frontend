import { ProductType } from '../../../core/enums/type-product.enum';

export interface Product {
    id?: number | string | null;
    code: string;
    name: string;
    description?: string;
    type: ProductType;
    unit: string;
    estimatedUnitPrice?: number;
    defaultLocation?: string;
    isActive: boolean;
}
export interface ProductVariant {
    id?: number;
    idProduct: number;
    code: string;
    unit: string;
    estimatedUnitPrice: number;
    isActive: boolean;
}
