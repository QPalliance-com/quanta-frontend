import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { OSPRequest } from '../../models/osp-request.model';
import { OspService } from '../../services/osp.service';
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
import { SelectModule } from 'primeng/select';
import { Column, ExportColumn } from '../../../../core/models/table-options.model';
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
@Component({
    selector: 'app-osp-list',
    standalone: true,
    imports: [CommonModule, TableModule, FormsModule, SelectModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService, SupplierService],
    templateUrl: './osp-list.html',
    styleUrl: './osp-list.scss'
})
export class OspListComponent implements OnInit {
    filterFields: string[] = ['productName', 'unit', 'preferredSupplierId'];
    exportColumns!: ExportColumn[];
    cols!: Column[];

    allOsp = signal<OSPRequest[]>([]);
    order!: OSPRequest;
    selectedOsp!: OSPRequest[] | null;
    suppliers: Supplier[] = [];
    @ViewChild('ospTable') ospTable!: Table;
    constructor(
        private ospService: OspService,
        private supplierService: SupplierService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.cols = [
            { field: 'productName', header: 'Producto' },
            { field: 'requiredQuantity', header: 'Cantidad' },
            { field: 'unit', header: 'Unidad' },
            { field: 'preferredSupplierId', header: 'Proveedor sugerido' },
            { field: 'deliveryTimeDays', header: 'Días despacho' },
            { field: 'unitPrice', header: 'Precio unitario' }
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
        this.loadAllOsp();
    }

    loadAllOsp(): void {
        this.ospService.getAllOsp().subscribe((response) => {
            this.allOsp.set(response.data);
        });
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    exportCSV() {
        this.ospTable.exportCSV();
    }
    getDeliveryDays(osp: OSPRequest): number | string {
        const supplier = osp.suggestedSuppliers.find((s) => s.id === osp.preferredSupplierId);
        return supplier?.deliveryTimeDays ?? '-';
    }

    getUnitPrice(osp: OSPRequest): number {
        const supplier = osp.suggestedSuppliers.find((s) => s.id === osp.preferredSupplierId);
        return supplier?.unitPrice ?? 0;
    }
    createPurchaseOrder(request: OSPRequest): void {
        if (!request.preferredSupplierId) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Proveedor requerido',
                detail: 'Debe seleccionar un proveedor antes de continuar.'
            });
            return;
        }
        this.router.navigate(['/purchases/orders-form/new'], {
            state: { ospRequest: request }
        });
    }
}
