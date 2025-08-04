import { Product } from '../../inventory/models/product.model';
import { Supplier } from './supplier.model';

export interface OSPRequest {
    id: number;
    productionRequestId: number;
    product: Product;
    productName: string;
    requiredQuantity: number;
    unit: string;
    suggestedSuppliers: SupplierOption[];
    preferredSupplierId?: number;
    status: 'Pendiente' | 'Asignado' | 'Convertido en orden';
    deliveryDate?: string;
}
export interface SupplierOption extends Supplier {
    deliveryTimeDays: number;
    unitPrice: number;
    totalPrice: number;
    availableStock?: number;
}
