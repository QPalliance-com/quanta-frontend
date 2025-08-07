import { Component, OnInit, signal, inject, ViewChild } from '@angular/core';
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
import { Column, ExportColumn } from '../../../../core/models/table-options.model';
import { SupplierStore } from '../../store/supplier/supplier.store';
import { PurchaseOrderStore } from '../../store/purchase-order/purchase-order.store';
import { CompanyStore } from '../../../settings/store/company.store';
@Component({
    selector: 'app-purchase-orders',
    imports: [CommonModule, TableModule, FormsModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService, SupplierStore, CompanyStore, PurchaseOrderStore],
    templateUrl: './purchase-orders.html',
    styleUrl: './purchase-orders.scss'
})
export class PurchaseOrdersComponent implements OnInit {
    companyStore = inject(CompanyStore);
    filterFields: string[] = ['id', 'companyName', 'supplierId', 'receptionDate', 'dueDate', 'deliveryDays', 'ceco.label', 'participation', 'status'];
    exportColumns!: ExportColumn[];
    cols!: Column[];

    order!: PurchaseOrder;
    selectedOrders!: PurchaseOrder[] | null;
    suppliersStore = inject(SupplierStore);
    purchaseOrderStore = inject(PurchaseOrderStore);
    selectedPurchaseOrder!: PurchaseOrder;
    displayViewDialog = false;
    @ViewChild('ordersTable') ordersTable!: Table;
    constructor(
        private purchaseOrderService: PurchaseOrderService,
        private messageService: MessageService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'companyName', header: 'Empresa' },
            { field: 'supplierId', header: 'Proveedor' },
            { field: 'receptionDate', header: 'Fecha de recepción' },
            { field: 'dueDate', header: 'Fecha de vencimiento' },
            { field: 'deliveryDays', header: 'Días para entregar' },
            { field: 'cecos', header: 'Centros de costo' },
            { field: 'status', header: 'Estado' }
        ];
        this.exportColumns = this.cols.map((col) => ({
            title: col.header,
            dataKey: col.field
        }));
        this.suppliersStore.loadAllSuppliers();
        this.purchaseOrderStore.loadAllPurchaseOrders();
    }

    findSupplierName(id: number): string {
        return this.suppliersStore.supplierList().find((s) => s.id === id)?.companyName || 'Desconocido';
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
