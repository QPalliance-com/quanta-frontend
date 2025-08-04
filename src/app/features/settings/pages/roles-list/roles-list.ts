import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router } from '@angular/router';
import { Column, ExportColumn } from '../../../../core/models/table-options.model';
import { Role } from '../../models/role.model';
import { Permission } from '../../models/permission.model';
import { Module } from '../../models/module.model';
import { forkJoin } from 'rxjs';
import { ModulesService } from '../../services/modules.service';
import { PermissionService } from '../../services/permission.service';
import { RoleStore } from '../../store/role/role.store';

@Component({
    selector: 'app-roles-list',
    imports: [CommonModule, TableModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService, RoleStore],

    templateUrl: './roles-list.html',
    styleUrl: './roles-list.scss'
})
export class RolesListComponent implements OnInit {
    filterFields: string[] = ['id', 'code', 'name', 'type', 'unit', 'estimatedUnitPrice', 'defaultLocation', 'description', 'isActive'];
    exportColumns!: ExportColumn[];
    cols!: Column[];
    availablePermissions: Permission[] = [];
    availableModules: Module[] = [];
    RoleStore = inject(RoleStore);
    role!: Role;
    selectedRoles!: Role[] | null;
    selectedRole!: Role;
    displayViewDialog = false;
    @ViewChild('rolesTable') rolesTable!: Table;
    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private permissionService: PermissionService,
        private modulesService: ModulesService
    ) {}
    ngOnInit(): void {
        forkJoin([this.permissionService.getPermissions(), this.modulesService.getModules()]).subscribe(([permissions, modules]) => {
            this.availablePermissions = permissions.data;
            this.availableModules = modules.data;
        });
        this.cols = [
            { field: 'id', header: 'ID', customExportHeader: 'Role ID' },
            { field: 'name', header: 'Name', customExportHeader: 'Role Name' },
            { field: 'description', header: 'Description', customExportHeader: 'Role Description' },
            { field: 'permissions', header: 'Permissions', customExportHeader: 'Assigned Permissions' },
            { field: 'modules', header: 'Modules', customExportHeader: 'Assigned Modules' }
        ];
        this.RoleStore.loadRoles();
    }

    openNew() {
        this.router.navigate(['/settings/roles-form/new']);
    }
    editRole(role: Role) {
        this.router.navigate(['/settings/roles-form/edit', role.id]);
    }
    viewRole(role: Role) {
        this.role = role;
        this.displayViewDialog = true;
    }
    exportCSV() {
        this.rolesTable.exportCSV();
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    getPermissionById(id: number): string {
        const perm = this.availablePermissions.find((p) => p.id === id);
        return perm ? `${perm.name} (${perm.action})` : '';
    }

    getModuleById(id: number): string {
        const mod = this.availableModules.find((m) => m.id === id);
        return mod ? mod.name : '';
    }
}
