import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Module } from '../../models/module.model';
import { Permission } from '../../models/permission.model';
import { Role } from '../../models/role.model';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { Router } from '@angular/router';
import { Toast } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-role-form',
    imports: [ReactiveFormsModule, FormsModule, InputText, TextareaModule, MultiSelectModule, Toast, CommonModule, ButtonModule],
    templateUrl: './role-form.html',
    styleUrl: './role-form.scss'
})
export class RoleFormComponent implements OnInit {
    @Input() role: Role | null = null;
    @Input() availablePermissions: Permission[] = [];
    @Input() availableModules: Module[] = [];
    @Output() submitForm = new EventEmitter<Role>();

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            name: [this.role?.name || '', Validators.required],
            description: [this.role?.description || '', Validators.required],
            permissions: [this.role?.permissions?.map((p) => p.id) || [], Validators.required],
            modules: [this.role?.modules?.map((m) => m.id) || [], Validators.required]
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
        this.router.navigate(['/settings/products']);
    }
}
