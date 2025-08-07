import { OSP } from '../../models/osp.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { OspService } from '../../services/osp.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type OspState = {
    ospList: OSP[];
    osp: OSP | null;
    query: string;
};

const initialState: OspState = {
    ospList: [],
    osp: null,
    query: ''
};
export const OspStore = signalStore(
    withState(initialState),
    withMethods((store, _ospService = inject(OspService), msg = inject(MessageService)) => ({
        loadAllOsp: rxMethod<void>(
            pipe(
                switchMap(() =>
                    _ospService.getAllOsp().pipe(
                        tapResponse({
                            next: (osplist: ApiResponse<OSP[]>) => {
                                patchState(store, { ospList: osplist.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: osplist.message });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
        // loadCostCenter: rxMethod<{ id: number | string }>(
        //     pipe(
        //         switchMap(({ id }) =>
        //             costCenterService.getCostCenter(id).pipe(
        //                 tapResponse({
        //                     next: (costCenter: ApiResponse<OSP>) => {
        //                         console.log('🧪 CostCenter recibido:', costCenter);
        //                         patchState(store, { costCenter: costCenter.data });
        //                     },
        //                     error: (costCenter: ApiResponse<OSP>) => {
        //                         msg.add({ severity: 'error', summary: 'Error', detail: costCenter.message });
        //                     }
        //                 })
        //             )
        //         )
        //     )
        // )
    }))
);
