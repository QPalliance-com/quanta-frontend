import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.model';
import { Department } from '../../../../core/models/department.model';
import { City } from '../../../../core/models/city.model';
import { DepartmentService } from '../../../../core/services/department.service';
import { CityService } from '../../../../core/services/city.service';
import { DocumentType, DOCUMENT_TYPE_LABELS } from '../../../../core/enums/document-type.enum';

@Component({
    selector: 'app-supplier-form',
    standalone: true,
    imports: [CommonModule, InputTextModule, ButtonModule, RatingModule, ReactiveFormsModule, ToastModule, SelectModule, RouterModule],
    templateUrl: './supplier-form.html',
    styleUrl: './supplier-form.scss',
    providers: [MessageService, SupplierService, DepartmentService, CityService]
})
export class SupplierFormComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private msg: MessageService,
        private supplierService: SupplierService,
        private departmentService: DepartmentService,
        private cityService: CityService
    ) {}
    departments: Department[] = [];
    cities: City[] = [];
    documentTypes = Object.values(DocumentType).map((type) => ({
        label: DOCUMENT_TYPE_LABELS[type],
        value: type
    }));

    paymentTerms = [
        { label: '15 días', value: '15' },
        { label: '30 días', value: '30' },
        { label: '60 días', value: '60' }
    ];
    form!: FormGroup;
    editMode = false;
    supplierId: number | null = null;

    ngOnInit(): void {
        this.form = this.fb.group({
            contactName: ['', Validators.required],
            companyName: ['', Validators.required],
            documentType: ['', Validators.required],
            documentNumber: ['', Validators.required],
            dv: [''],
            email: ['', [Validators.required, Validators.email]],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            creditLimit: [null],
            paymentTerm: ['', Validators.required],
            departmentId: [null, Validators.required],
            cityId: [null, Validators.required]
        });
        this.loadDepartments();
        // Borrar dv si tipo ≠ NIT
        this.form.get('documentType')?.valueChanges.subscribe((type) => {
            if (type !== 'NIT') {
                this.form.get('dv')?.setValue('');
            }
        });
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.editMode = true;
                this.supplierId = +id;
                this.loadSupplier(this.supplierId);
            }
        });
    }

    loadSupplier(id: number) {
        this.supplierService.getSuppliersById(id).subscribe({
            next: (res) => this.form.patchValue(res.data),
            error: () => this.msg.add({ severity: 'error', summary: 'Error', detail: 'Proveedor no encontrado' })
        });
    }
    loadDepartments(): void {
        this.departmentService.getDepartments().subscribe({
            next: (res) => (this.departments = res),
            error: () => this.msg.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar departamentos' })
        });
    }

    onDepartmentChange(departmentId: number): void {
        this.cityService.getCitiesByDepartment(departmentId).subscribe({
            next: (res) => (this.cities = res),
            error: () => this.msg.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar ciudades' })
        });
    }
    onSubmit() {
        if (this.form.invalid) return;

        const supplier: Supplier = this.form.value;

        if (this.editMode && this.supplierId !== null) {
            this.supplierService.updateSupplier(this.supplierId, supplier).subscribe(() => {
                this.msg.add({ severity: 'success', summary: 'Actualizado', detail: 'Proveedor actualizado correctamente', life: 3000 });
                // this.router.navigate(['/purchases/suppliers-list']);
            });
        } else {
            console.log('Creating new supplier:', supplier);
            this.supplierService.createSupplier(supplier).subscribe(() => {
                this.msg.add({ severity: 'success', summary: 'Creado', detail: 'Proveedor creado exitosamente', life: 3000 });
                // this.router.navigate(['/purchases/suppliers-list']);
            });
        }
    }
    cancel() {
        this.router.navigate(['/purchases/suppliers']);
    }
}
