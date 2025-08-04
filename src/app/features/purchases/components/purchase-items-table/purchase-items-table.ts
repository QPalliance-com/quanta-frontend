import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PurchaseOrderItem } from '../../models/purchase-order-item.model';
import { Product } from '../../../inventory/models/product.model';
import { ProductService } from '../../../inventory/services/product.service';

@Component({
    selector: 'app-purchase-items-table',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, AutoCompleteModule, InputTextModule, ButtonModule],
    templateUrl: './purchase-items-table.html',
    styleUrls: ['./purchase-items-table.scss']
})
export class PurchaseItemsTableComponent implements OnInit {
    @Input() itemsFormArray!: FormArray<FormGroup>;
    productOptions: Product[] = [];

    constructor(
        private fb: FormBuilder,
        private productsService: ProductService
    ) {}

    ngOnInit(): void {
        this.loadProductsCatalogItem();
        // this.addItem();
    }
    loadProductsCatalogItem(): void {
        this.productsService.getAllProductsCatalogItem().subscribe((products) => {
            this.productOptions = products.data;
        });
    }

    addItem(): void {
        this.itemsFormArray.push(this.createItemGroup());
    }

    removeItem(index: number): void {
        this.itemsFormArray.removeAt(index);
    }

    createItemGroup(): FormGroup {
        return this.fb.group<PurchaseOrderItem>({
            productId: 0,
            name: '',
            unit: '',
            quantity: 1,
            unitPrice: null,
            observations: ''
        });
    }

    searchProducts(event: any): void {
        const query = event.query.toLowerCase();
        // Siempre parte del catálogo completo, no del filtrado anterior
        this.productsService.getAllProductsCatalogItem().subscribe((products) => {
            this.productOptions = products.data.filter((product: Product) => product.name.toLowerCase().includes(query) || (product.code && product.code.toLowerCase().includes(query)));
        });
    }

    onProductSelect(index: number, product: Product): void {
        const group = this.itemsFormArray.at(index) as FormGroup;
        if (group && product) {
            group.patchValue({
                productId: product.id,
                name: product.name,
                unit: product.unit ?? ''
            });
        }
        this.loadProductsCatalogItem(); // Reset search results
    }
    get totalItemsSubtotal(): number {
        return this.itemsFormArray?.controls?.map((item) => (item.value.quantity || 0) * (item.value.unitPrice || 0))?.reduce((acc, curr) => acc + curr, 0) || 0;
    }
}
