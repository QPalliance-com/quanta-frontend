import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { OSP } from '../../models/osp.model';
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
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';
import { OspStore } from '../../store/osp/osp.store';
import { SupplierStore } from '../../store/supplier/supplier.store';
@Component({
    selector: 'app-osp-list',
    standalone: true,
    imports: [CommonModule, TableModule, FormsModule, SelectModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService, SupplierStore, OspStore],
    templateUrl: './osp-list.html',
    styleUrl: './osp-list.scss'
})
export class OspListComponent implements OnInit {
    filterFields: string[] = ['productName', 'unit', 'preferredSupplierId'];
    exportColumns!: ExportColumn[];
    cols!: Column[];
    OspStore = inject(OspStore);
    selectedOsp!: OSP[] | null;
    suppplierStore = inject(SupplierStore);
    @ViewChild('ospTable') ospTable!: Table;
    constructor(
        private messageService: MessageService,
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
        this.suppplierStore.loadAllSuppliers();
        this.OspStore.loadAllOsp();
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    exportCSV() {
        this.ospTable.exportCSV();
    }
    getDeliveryDays(osp: OSP): number | string {
        const supplier = osp.suggestedSuppliers.find((s) => s.id === osp.preferredSupplierId);
        return supplier?.deliveryTimeDays ?? '-';
    }

    getUnitPrice(osp: OSP): number {
        const supplier = osp.suggestedSuppliers.find((s) => s.id === osp.preferredSupplierId);
        return supplier?.unitPrice ?? 0;
    }
    createPurchaseOrder(request: OSP): void {
        console.log(request);
        if (!request.preferredSupplierId) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Proveedor requerido',
                detail: 'Debe seleccionar un proveedor antes de continuar.'
            });
            return;
        }
        this.router.navigate(['/purchases/orders-form/new'], {
            state: { OSP: request }
        });
    }
}
