import { Role } from '../../models/role.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type RoleState = {
    Roles: Role[];
    Role: Role | null;
    query: string;
};

const initialState: RoleState = {
    Roles: [],
    Role: null,
    query: ''
};
export const RoleStore = signalStore(
    withState(initialState),
    withMethods((store, _rolesService = inject(RolesService), msg = inject(MessageService)) => ({
        loadRoles: rxMethod<void>(
            pipe(
                switchMap(() =>
                    _rolesService.getAllRoles().pipe(
                        tapResponse({
                            next: (roles: ApiResponse<Role[]>) => {
                                patchState(store, { Roles: roles.data });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        loadRole: rxMethod<{ id: number | string }>(
            pipe(
                switchMap(({ id }) =>
                    _rolesService.getRoleById(id).pipe(
                        tapResponse({
                            next: (role: ApiResponse<Role>) => {
                                patchState(store, { Role: role.data });
                            },
                            error: (role: ApiResponse<Role>) => {
                                msg.add({ severity: 'error', summary: 'Error', detail: role.message });
                            }
                        })
                    )
                )
            )
        ),
        addRole: rxMethod<Role>(
            pipe(
                switchMap((newRole) =>
                    _rolesService.createRole(newRole).pipe(
                        tapResponse({
                            next: (role: ApiResponse<Role>) => {
                                patchState(store, { Role: role.data });
                                msg.add({ severity: 'success', summary: 'Creado', detail: role.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        updateRole: rxMethod<{ role: Role; id: number | string | null }>(
            pipe(
                switchMap(({ role, id }) =>
                    _rolesService.updateRole(id, role).pipe(
                        tapResponse({
                            next: (role: ApiResponse<Role>) => {
                                patchState(store, {
                                    Role: role.data
                                });
                                msg.add({ severity: 'success', summary: 'Actualizado', detail: role.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
    }))
);
