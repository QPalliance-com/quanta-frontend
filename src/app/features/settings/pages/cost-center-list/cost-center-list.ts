import { Component, inject, OnInit, ViewChild } from '@angular/core';
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
import { CostCenter } from '../../models/cost-center.model';
import { CostCenterStore } from '../../store/cost-center/cost-center.store';

@Component({
    selector: 'app-cost-center-list',
    standalone: true,
    imports: [CommonModule, TableModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService, CostCenterStore],
    templateUrl: './cost-center-list.html',
    styleUrl: './cost-center-list.scss'
})
export class CostCenterListComponent implements OnInit {
    filterFields: string[] = ['code', 'name', 'description'];
    exportColumns!: ExportColumn[];
    cols!: Column[];
    costCentersStore = inject(CostCenterStore);
    @ViewChild('costCenterTable') costCenterTable!: Table;
    constructor(private router: Router) {}
    ngOnInit(): void {
        this.cols = [
            { field: 'id', header: 'ID', customExportHeader: 'Cost Center ID' },
            { field: 'code', header: 'Codigo', customExportHeader: 'Codigo' },
            { field: 'name', header: 'Nombre', customExportHeader: 'Nombre' },
            { field: 'description', header: 'Descripción', customExportHeader: 'Descripción' },
            {
                field: 'isActive',
                header: 'Active',
                customExportHeader: 'Status'
            }
        ];
        this.costCentersStore.loadCostCenters();
    }

    openNew() {
        this.router.navigate(['/settings/cost-center-form/new']);
    }
    editCostCenter(costCenter: CostCenter) {
        this.router.navigate(['/settings/cost-center-form/edit', costCenter.id]);
    }

    exportCSV() {
        this.costCenterTable.exportCSV();
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
