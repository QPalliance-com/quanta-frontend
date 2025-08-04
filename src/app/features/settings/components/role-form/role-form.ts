import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Module } from '../../models/module.model';
import { Permission } from '../../models/permission.model';
import { Role } from '../../models/role.model';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { forkJoin } from 'rxjs';
import { PermissionService } from '../../services/permission.service';
import { ModulesService } from '../../services/modules.service';
import { RolesService } from '../../services/roles.service';

@Component({
    selector: 'app-role-form',
    imports: [ReactiveFormsModule, FormsModule, InputText, TextareaModule, MultiSelectModule, Toast, CommonModule, ButtonModule],
    templateUrl: './role-form.html',
    styleUrl: './role-form.scss',
    providers: [PermissionService, ModulesService]
})
export class RoleFormComponent implements OnInit {
    role: Role | null = null;
    availablePermissions: Permission[] = [];
    availableModules: Module[] = [];
    submitForm = new EventEmitter<Role>();
    isEditMode = false;
    roleId!: number;
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private permissionService: PermissionService,
        private modulesService: ModulesService,
        private roleService: RolesService
    ) {}

    ngOnInit(): void {
        forkJoin([this.permissionService.getPermissions(), this.modulesService.getModules()]).subscribe(([permissions, modules]) => {
            this.availablePermissions = permissions.data;
            this.availableModules = modules.data;
        });
        this.buildForm();
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.roleId = +id;
            this.loadRole(this.roleId);
        }
    }

    buildForm(): void {
        this.form = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            permissions: [[], Validators.required],
            modules: [[], Validators.required]
        });
    }
    loadRole(id: number): void {
        this.roleService.getRoleById(id).subscribe((role) => {
            this.form.patchValue(role.data);
        });
    }
    onSubmit(): void {
        if (this.form.valid) {
            const result: Role = {
                id: this.role?.id || 0,
                name: this.form.value.name,
                description: this.form.value.description,
                permissions: this.availablePermissions.filter((p) => this.form.value.permissions.includes(p.id)),
                modules: this.availableModules.filter((m) => this.form.value.modules.includes(m.id))
            };
            this.submitForm.emit(result);
        }
    }
    cancel(): void {
        this.router.navigate(['/settings/roles']);
    }
}
