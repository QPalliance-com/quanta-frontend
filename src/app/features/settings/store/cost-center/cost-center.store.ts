import { CostCenter } from '../../models/cost-center.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { CostCenterService } from '../../services/cost-center.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type CostCenterState = {
    costCenters: CostCenter[];
    costCenter: CostCenter | null;
    query: string;
};

const initialState: CostCenterState = {
    costCenters: [],
    costCenter: null,
    query: ''
};
export const CostCenterStore = signalStore(
    withState(initialState),
    withMethods((store, _costCenterService = inject(CostCenterService), msg = inject(MessageService)) => ({
        loadCostCenters: rxMethod<void>(
            pipe(
                switchMap(() =>
                    _costCenterService.getAllCostCenter().pipe(
                        tapResponse({
                            next: (costCenters: ApiResponse<CostCenter[]>) => {
                                patchState(store, { costCenters: costCenters.data });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        loadCostCenter: rxMethod<{ id: number | string }>(
            pipe(
                switchMap(({ id }) =>
                    _costCenterService.getCostCenter(id).pipe(
                        tapResponse({
                            next: (costCenter: ApiResponse<CostCenter>) => {
                                console.log('🧪 CostCenter recibido:', costCenter);
                                patchState(store, { costCenter: costCenter.data });
                            },
                            error: (costCenter: ApiResponse<CostCenter>) => {
                                msg.add({ severity: 'error', summary: 'Error', detail: costCenter.message });
                            }
                        })
                    )
                )
            )
        ),
        addCostCenter: rxMethod<CostCenter>(
            pipe(
                switchMap((newCostCenter) =>
                    _costCenterService.createCostCenter(newCostCenter).pipe(
                        tapResponse({
                            next: (costCenter: ApiResponse<CostCenter>) => {
                                patchState(store, {
                                    costCenter: costCenter.data
                                });
                                msg.add({ severity: 'success', summary: 'Creado', detail: costCenter.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        updateCostCenter: rxMethod<{ costCenter: CostCenter; id: number | string | null }>(
            pipe(
                switchMap(({ costCenter, id }) =>
                    _costCenterService.updateCostCenter(id, costCenter).pipe(
                        tapResponse({
                            next: (costCenter: ApiResponse<CostCenter>) => {
                                patchState(store, {
                                    costCenter: costCenter.data
                                });
                                msg.add({ severity: 'success', summary: 'Actualizado', detail: costCenter.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
    }))
);
