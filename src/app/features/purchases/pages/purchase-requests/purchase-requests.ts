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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PurchaseOrder } from '../../models/purchase-order.model';
import { Router } from '@angular/router';
import { Panel, PanelModule } from 'primeng/panel';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';
import { forkJoin, Observable } from 'rxjs';
import { CompanyService } from '../../../settings/services/company.service';
import { Company } from '../../../settings/models/company.model';
@Component({
    selector: 'app-purchase-requests',
    imports: [CommonModule, TableModule, FormsModule, ButtonModule, RippleModule, PanelModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    templateUrl: './purchase-requests.html',
    providers: [MessageService, PurchaseOrderService, ConfirmationService, CompanyService, SupplierService],
    styleUrl: './purchase-requests.scss'
})
export class PurchaseRequestsComponent implements OnInit {
    orders = signal<PurchaseOrder[]>([]);
    order!: PurchaseOrder;
    selectedOrders!: PurchaseOrder[] | null;
    suppliers: Supplier[] = [];
    company$: Observable<Company | null>;

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
    findSupplier(id: number) {
        return this.suppliers.find((supplier) => supplier.id === id) || { name: 'Desconocido' };
    }
    openNew() {
        this.router.navigate(['/purchases/requests-form/new']);
    }
    viewPurchaseOrder(order: PurchaseOrder) {
        // this.router.navigate(['/purchases/requests-form', order.id]);
    }
    editPurchaseOrder(order: PurchaseOrder) {
        this.router.navigate(['/purchases/requests-form/edit', order.id]);
    }
}
