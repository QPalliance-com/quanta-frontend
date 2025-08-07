import { Component, Input, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PurchaseOrderItem } from '../../models/purchase-order-item.model';
import { Product } from '../../../inventory/models/product.model';
import { ProductService } from '../../../inventory/services/product.service';
import { ProductsStore } from '../../../inventory/store/products/products.store';

@Component({
    selector: 'app-purchase-items-table',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, AutoCompleteModule, InputTextModule, ButtonModule],
    providers: [ProductsStore],
    templateUrl: './purchase-items-table.html',
    styleUrls: ['./purchase-items-table.scss']
})
export class PurchaseItemsTableComponent implements OnInit {
    @Input() itemsFormArray!: FormArray<FormGroup>;
    productOptions: Product[] = [];
    productsStore = inject(ProductsStore);
    constructor(private fb: FormBuilder) {
        effect(() => {
            this.productOptions = this.productsStore.productsListItems();
        });
    }

    ngOnInit(): void {}

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
        this.productsStore.searchProducts(query);
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
    }
    get totalItemsSubtotal(): number {
        return this.itemsFormArray?.controls?.map((item) => (item.value.quantity || 0) * (item.value.unitPrice || 0))?.reduce((acc, curr) => acc + curr, 0) || 0;
    }
}
