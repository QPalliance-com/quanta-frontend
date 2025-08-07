import { Component, OnInit, signal, ViewChild, inject } from '@angular/core';
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
import { Product } from '../../../inventory/models/product.model';
import { Router } from '@angular/router';
import { Column, ExportColumn } from '../../../../core/models/table-options.model';
import { ProductsStore } from '../../store/products/products.store';
import { PRODUCT_TYPE_LABELS, ProductType } from '../../../../core/enums/type-product.enum';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, TableModule, FormsModule, ToastModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService, ProductsStore],
    templateUrl: './product-list.html',
    styleUrl: './product-list.scss'
})
export class ProductListComponent implements OnInit {
    filterFields: string[] = ['id', 'code', 'name', 'type', 'unit', 'estimatedUnitPrice', 'defaultLocation', 'description', 'isActive'];
    exportColumns!: ExportColumn[];
    cols!: Column[];
    productsStore = inject(ProductsStore);
    selectedProducts!: Product[] | null;
    selectedProduct!: Product;
    displayViewDialog = false;
    productTypes = Object.values(ProductType);
    @ViewChild('productsTable') productsTable!: Table;
    constructor(
        private messageService: MessageService,
        private router: Router
    ) {}
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
        this.productsStore.loadAllProducts();
    }
    getProductTypeLabel(type: string): string {
        return PRODUCT_TYPE_LABELS[type as ProductType] ?? 'Desconocido';
    }
    openNew() {
        this.router.navigate(['/inventory/products-form/new']);
    }
    editProduct(id: number | string | null) {
        this.router.navigate(['/inventory/products-form/edit', id]);
    }
    viewProduct(id: number | string | null) {
        this.productsStore.loadProductById({ id });
        this.displayViewDialog = true;
    }
    exportCSV() {
        this.productsTable.exportCSV();
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
