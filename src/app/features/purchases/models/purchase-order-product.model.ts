export interface PurchaseOrderProduct {
    name: string | null;
    unit: string | null;
    quantity: number | null;
    receivedQuantity?: number | null;
    status?: 'Pendiente' | 'Parcial' | 'Completado' | null;
    observations?: string | null;
}
