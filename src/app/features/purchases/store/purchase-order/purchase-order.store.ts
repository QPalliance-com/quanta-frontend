import { PurchaseOrder } from '../../models/purchase-order.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type PurchaseOrderState = {
    purchaseOrderList: PurchaseOrder[];
    purchaseOrder: PurchaseOrder | null;
    query: string;
};

const initialState: PurchaseOrderState = {
    purchaseOrderList: [],
    purchaseOrder: null,
    query: ''
};
export const PurchaseOrderStore = signalStore(
    withState(initialState),
    withMethods((store, _PurchaseOrderService = inject(PurchaseOrderService), msg = inject(MessageService)) => ({
        loadAllPurchaseOrders: rxMethod<void>(
            pipe(
                switchMap(() =>
                    _PurchaseOrderService.getAllPurchaseOrders().pipe(
                        tapResponse({
                            next: (purchaseOrderList: ApiResponse<PurchaseOrder[]>) => {
                                patchState(store, { purchaseOrderList: purchaseOrderList.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: purchaseOrderList.message });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        loadPurchaseOrder: rxMethod<{ id: number | string }>(
            pipe(
                switchMap(({ id }) =>
                    _PurchaseOrderService.getPurchaseOrderById(id).pipe(
                        tapResponse({
                            next: (purchaseOrder: ApiResponse<PurchaseOrder>) => {
                                patchState(store, { purchaseOrder: purchaseOrder.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: purchaseOrder.message });
                            },
                            error: (purchaseOrder: ApiResponse<PurchaseOrder>) => {
                                msg.add({ severity: 'error', summary: 'Error', detail: purchaseOrder.message });
                            }
                        })
                    )
                )
            )
        ),
        addPurchaseOrder: rxMethod<PurchaseOrder>(
            pipe(
                switchMap((newPurchaseOrder) =>
                    _PurchaseOrderService.createPurchaseOrder(newPurchaseOrder).pipe(
                        tapResponse({
                            next: (purchaseOrder: ApiResponse<PurchaseOrder>) => {
                                patchState(store, { purchaseOrder: purchaseOrder.data });
                                msg.add({ severity: 'success', summary: 'Creado', detail: purchaseOrder.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        updatePurchaseOrder: rxMethod<{ purchaseOrder: PurchaseOrder; id: number | string }>(
            pipe(
                switchMap(({ purchaseOrder, id }) =>
                    _PurchaseOrderService.updatePurchaseOrder(id, purchaseOrder).pipe(
                        tapResponse({
                            next: (purchaseOrder: ApiResponse<PurchaseOrder>) => {
                                patchState(store, {
                                    purchaseOrder: purchaseOrder.data
                                });
                                msg.add({ severity: 'success', summary: 'Actualizado', detail: purchaseOrder.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
    }))
);
