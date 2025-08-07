import { Supplier } from '../../models/supplier.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type SupplierState = {
    supplierList: Supplier[];
    supplier: Supplier | null;
    query: string;
};

const initialState: SupplierState = {
    supplierList: [],
    supplier: null,
    query: ''
};
export const SupplierStore = signalStore(
    withState(initialState),
    withMethods((store, _supplierService = inject(SupplierService), msg = inject(MessageService)) => ({
        loadAllSuppliers: rxMethod<void>(
            pipe(
                switchMap(() =>
                    _supplierService.getAllSuppliers().pipe(
                        tapResponse({
                            next: (supplierList: ApiResponse<Supplier[]>) => {
                                patchState(store, { supplierList: supplierList.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: supplierList.message });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        loadSupplier: rxMethod<{ id: number | string }>(
            pipe(
                switchMap(({ id }) =>
                    _supplierService.getSupplierById(id).pipe(
                        tapResponse({
                            next: (supplier: ApiResponse<Supplier>) => {
                                patchState(store, { supplier: supplier.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: supplier.message });
                            },
                            error: (supplier: ApiResponse<Supplier>) => {
                                msg.add({ severity: 'error', summary: 'Error', detail: supplier.message });
                            }
                        })
                    )
                )
            )
        ),
        addSupplier: rxMethod<Supplier>(
            pipe(
                switchMap((newSupplier) =>
                    _supplierService.createSupplier(newSupplier).pipe(
                        tapResponse({
                            next: (supplier: ApiResponse<Supplier>) => {
                                patchState(store, { supplier: supplier.data });
                                msg.add({ severity: 'success', summary: 'Creado', detail: supplier.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        updateSupplier: rxMethod<{ supplier: Supplier; id: number | string }>(
            pipe(
                switchMap(({ supplier, id }) =>
                    _supplierService.updateSupplier(id, supplier).pipe(
                        tapResponse({
                            next: (supplier: ApiResponse<Supplier>) => {
                                patchState(store, {
                                    supplier: supplier.data
                                });
                                msg.add({ severity: 'success', summary: 'Actualizado', detail: supplier.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
    }))
);
