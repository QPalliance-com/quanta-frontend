export enum PurchaseOrderStatus {
    Solicited = 'Solicitada',
    Sent = 'Enviada',
    Accepted = 'Aceptada',
    Rejected = 'Rechazada',
    Closed = 'Cerrada'
}
export const PurchaseOrderStatusColors: Record<PurchaseOrderStatus, string> = {
    [PurchaseOrderStatus.Solicited]: 'orange',
    [PurchaseOrderStatus.Accepted]: 'blue',
    [PurchaseOrderStatus.Sent]: 'green',
    [PurchaseOrderStatus.Rejected]: 'red',
    [PurchaseOrderStatus.Closed]: 'gray'
};
