import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MenuItem, MessageService } from 'primeng/api';

type MenuState = {
    Menu: MenuItem[];
    query: string;
};

const initialState: MenuState = {
    Menu: [],
    query: ''
};
export const MenuStore = signalStore(
    withState(initialState),
    withMethods((store, menuService = inject(MenuService), msg = inject(MessageService)) => ({
        loadMenu: rxMethod<void>(
            pipe(
                switchMap(() =>
                    menuService.getMenu().pipe(
                        tapResponse({
                            next: (menu: ApiResponse<MenuItem[]>) => {
                                patchState(store, { Menu: menu.data });
                                msg.add({ severity: 'success', summary: 'Creado', detail: menu.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
    }))
);
