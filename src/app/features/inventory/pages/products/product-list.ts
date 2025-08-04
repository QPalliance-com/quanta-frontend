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
import { Product } from '../../../inventory/models/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Column, ExportColumn } from '../../../../core/models/table-options.model';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, TableModule, FormsModule, InputTextModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, RatingModule, DialogModule, TagModule, InputIconModule, IconFieldModule, ConfirmDialogModule],
    providers: [MessageService, ConfirmationService],

    templateUrl: './product-list.html',
    styleUrl: './product-list.scss'
})
export class ProductListComponent implements OnInit {
    filterFields: string[] = ['id', 'code', 'name', 'type', 'unit', 'estimatedUnitPrice', 'defaultLocation', 'description', 'isActive'];
    exportColumns!: ExportColumn[];
    cols!: Column[];

    products = signal<Product[]>([]);
    product!: Product;
    selectedProducts!: Product[] | null;
    selectedProduct!: Product;
    displayViewDialog = false;
    @ViewChild('productsTable') productsTable!: Table;
    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private productService: ProductService
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
        this.loadProducts();
    }
    loadProducts() {
        this.productService.getAllProductsCatalogItem().subscribe({
            next: (res) => {
                this.products.set(res.data);
            },
            error: () => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar productos' });
            }
        });
    }
    openNew() {
        this.router.navigate(['/inventory/products-form/new']);
    }
    editProduct(product: Product) {
        this.router.navigate(['/inventory/products-form/edit', product.id]);
    }
    viewProduct(product: Product) {
        this.product = product;
        this.displayViewDialog = true;
    }
    exportCSV() {
        this.productsTable.exportCSV();
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
