import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.model';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../../core/services/department.service';
import { CityService } from '../../../../core/services/city.service';
import { forkJoin } from 'rxjs';
import { Panel, PanelModule } from 'primeng/panel';
import { Column, ExportColumn } from '../../../../core/models/table-options.model';
@Component({
    selector: 'app-supplier-list',
    standalone: true,
    imports: [CommonModule, TableModule, InputTextModule, FormsModule, ButtonModule, RippleModule, PanelModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    templateUrl: './supplier-list.html',
    styleUrl: './supplier-list.scss',
    providers: [MessageService, SupplierService, ConfirmationService, DepartmentService, CityService]
})
export class SupplierListComponent implements OnInit {
    filterFields: string[] = ['companyName', 'contactName', 'documentType', 'documentNumber', 'email', 'address', 'phone', 'creditLimit', 'paymentTerms', 'seller', 'department.name', 'city.name'];
    exportColumns!: ExportColumn[];
    cols!: Column[];
    supplierDialog: boolean = false;
    suppliers = signal<Supplier[]>([]);
    supplier!: Supplier;
    selectedsuppliers!: Supplier[] | null;
    departmentsMap = new Map<number, string>();
    citiesMap = new Map<number, string>();
    msg: any;
    selectedSupplier!: Supplier;
    displayViewDialog = false;
    @ViewChild('suppliersTable') suppliersTable!: Table;
    constructor(
        private supplierService: SupplierService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private departmentService: DepartmentService,
        private cityService: CityService
    ) {}
    ngOnInit() {
        this.cols = [
            {
                field: 'companyName',
                header: 'Empresa',
                customExportHeader: 'Nombre de la Empresa'
            },
            {
                field: 'contactName',
                header: 'Contacto',
                customExportHeader: 'Nombre del Contacto'
            },
            {
                field: 'documentType',
                header: 'Tipo Doc.',
                customExportHeader: 'Tipo de Documento'
            },
            {
                field: 'documentNumber',
                header: 'N° Documento',
                customExportHeader: 'Número de Documento'
            },
            {
                field: 'dv',
                header: 'DV',
                customExportHeader: 'Dígito de Verificación'
            },
            {
                field: 'email',
                header: 'Correo',
                customExportHeader: 'Correo Electrónico'
            },
            {
                field: 'address',
                header: 'Dirección',
                customExportHeader: 'Dirección del Proveedor'
            },
            {
                field: 'phone',
                header: 'Teléfono',
                customExportHeader: 'Número Telefónico'
            },
            {
                field: 'creditLimit',
                header: 'Límite Crédito',
                customExportHeader: 'Límite de Crédito'
            },
            {
                field: 'paymentTerms',
                header: 'Plazo Pago',
                customExportHeader: 'Plazo de Pago'
            },
            {
                field: 'seller',
                header: 'Vendedor',
                customExportHeader: 'Nombre del Vendedor'
            },
            {
                field: 'department.name',
                header: 'Departamento',
                customExportHeader: 'Departamento'
            },
            {
                field: 'city.name',
                header: 'Ciudad',
                customExportHeader: 'Ciudad'
            }
        ];

        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field
        }));
        forkJoin([this.departmentService.getDepartments(), this.cityService.getAllCities(), this.supplierService.getSuppliersData()]).subscribe({
            next: ([deptRes, cityRes, supplierRes]) => {
                this.departmentsMap = new Map(deptRes.map((dep) => [dep.id, dep.name]));
                this.citiesMap = new Map(cityRes.map((city) => [city.id, city.name]));
                this.suppliers.set(supplierRes.data);
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar datos' });
            }
        });
    }
    loadSuppliers() {
        this.supplierService.getSuppliersData().subscribe({
            next: (res) => {
                this.suppliers.set(res.data);
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar proveedores' });
            }
        });
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    openNew() {
        this.router.navigate(['/purchases/suppliers-form/new']);
    }
    exportCSV() {
        this.suppliersTable.exportCSV();
    }
    viewSupplier(supplier: Supplier) {
        this.selectedSupplier = supplier;
        this.displayViewDialog = true;
    }
    editSupplier(supplier: Supplier) {
        this.router.navigate(['/purchases/suppliers-form/edit', supplier.id]);
    }
    deleteSupplier(supplier: Supplier) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + supplier.companyName + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.supplierService.deleteSupplier(supplier).subscribe({
                    next: () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Proveedor eliminado satisfactoriamente.',
                            life: 3000
                        });
                        this.loadSuppliers();
                    },
                    error: () => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al eliminar proveedor' });
                    }
                });
            }
        });
    }
}
