import { PurchaseOrderStatus } from '../../../core/enums/purchase-order-status.enum';
import { PurchaseOrderItem } from './purchase-order-item.model';

export interface PurchaseOrder {
    id: number | null;
    supplierId: number | null;
    companyName: string | null;
    receptionDate: Date | string | null;
    dueDate: Date | string | null;
    deliveryDays: number | null;
    ceco: any | null;
    participation: number | null;
    registryNumber: string | null;
    status: PurchaseOrderStatus | null;
    items: PurchaseOrderItem[];
    createdAt: Date | string | null;
    updatedAt?: Date | string | null;
}
