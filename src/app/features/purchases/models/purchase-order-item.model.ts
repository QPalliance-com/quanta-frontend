export interface PurchaseOrderItem {
    id?: number;
    productId: number;
    name: string;
    unit: string;
    quantity: number;
    unitPrice?: number | null;
    observations?: string | null;
}
