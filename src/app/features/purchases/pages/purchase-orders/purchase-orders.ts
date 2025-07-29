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
import { PurchaseOrder } from '../../models/purchase-order.model';
import { Router } from '@angular/router';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';
import { forkJoin, Observable } from 'rxjs';
import { CompanyService } from '../../../settings/services/company.service';
import { Company } from '../../../settings/models/company.model';

import { Column, ExportColumn } from '../../../../core/models/table-options.model';
@Component({
    selector: 'app-purchase-orders',
    imports: [CommonModule, TableModule, FormsModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, PurchaseOrderService, ConfirmationService, CompanyService, SupplierService],
    templateUrl: './purchase-orders.html',
    styleUrl: './purchase-orders.scss'
})
export class PurchaseOrdersComponent {
    company$: Observable<Company | null>;
    filterFields: string[] = ['id', 'companyName', 'supplierId', 'receptionDate', 'dueDate', 'deliveryDays', 'ceco.label', 'participation', 'status'];
    exportColumns!: ExportColumn[];
    cols!: Column[];

    orders = signal<PurchaseOrder[]>([]);
    order!: PurchaseOrder;
    selectedOrders!: PurchaseOrder[] | null;
    suppliers: Supplier[] = [];

    selectedPurchaseOrder!: PurchaseOrder;
    displayViewDialog = false;
    @ViewChild('ordersTable') ordersTable!: Table;
    constructor(
        private purchaseOrderService: PurchaseOrderService,
        private supplierService: SupplierService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private companyService: CompanyService,
        private router: Router
    ) {
        this.company$ = this.companyService.company$;
    }
    ngOnInit(): void {
        this.cols = [
            { field: 'id', header: 'ID', customExportHeader: 'Product ID' },
            { field: 'code', header: 'Código', customExportHeader: 'Product Code' },
            { field: 'name', header: 'Nombre', customExportHeader: 'Product Name' },
            { field: 'type', header: 'Tipo', customExportHeader: 'Type' },
            { field: 'unit', header: 'Unidad', customExportHeader: 'Unit' },
            { field: 'estimatedUnitPrice', header: 'Precio Estimado', customExportHeader: 'Estimated Unit Price' },
            { field: 'defaultLocation', header: 'Ubicación por Defecto', customExportHeader: 'Default Location' },
            { field: 'description', header: 'Descripción', customExportHeader: 'Description' },
            { field: 'isActive', header: 'Activo', customExportHeader: 'Active Status' }
        ];
        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field
        }));
        forkJoin([this.supplierService.getSuppliersData()]).subscribe({
            next: ([supplierRes]) => {
                this.suppliers = supplierRes.data;
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar datos' });
            }
        });
        this.loadPurchaseOrders();
    }
    loadPurchaseOrders() {
        this.purchaseOrderService.getPurchaseOrdersData().subscribe({
            next: (res) => {
                this.orders.set(res.data);
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar solicitudes de compra' });
            }
        });
    }
    findSupplierName(id: number): string {
        return this.suppliers.find((s) => s.id === id)?.companyName || 'Desconocido';
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    openNew() {
        this.router.navigate(['/purchases/orders-form/new']);
    }
    exportCSV() {
        this.ordersTable.exportCSV();
    }
    viewPurchaseOrder(order: PurchaseOrder) {
        this.selectedPurchaseOrder = order;
        this.displayViewDialog = true;
    }
    editPurchaseOrder(order: PurchaseOrder) {
        this.router.navigate(['/purchases/orders-form/edit', order.id]);
    }
}
