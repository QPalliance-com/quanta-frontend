import { Component, OnInit, inject, effect } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product, ProductVariant } from '../../../inventory/models/product.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FieldsetModule } from 'primeng/fieldset';
import { forkJoin } from 'rxjs';
import { ProductVariantFormComponent } from '../product-variant-form/product-variant-form';
import { TableModule } from 'primeng/table';
import { ProductsStore } from '../../store/products/products.store';
import { PRODUCT_TYPE_LABELS, ProductType } from '../../../../core/enums/type-product.enum';

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [
        InputTextModule,
        InputNumberModule,
        FieldsetModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        CheckboxModule,
        TextareaModule,
        ToastModule,
        SelectModule,
        ButtonModule,
        DividerModule,
        CommonModule,
        ReactiveFormsModule,
        PanelModule,
        ProductVariantFormComponent,
        TableModule
    ],
    templateUrl: './product-form.html',
    styleUrls: ['./product-form.scss'],
    providers: [ProductsStore]
})
export class ProductFormComponent implements OnInit {
    form!: FormGroup;
    isEditMode = false;
    productId!: number;
    productsStore = inject(ProductsStore);
    newAttribute: string = '';
    attributes: string[] = [];
    parentProductName: string = '';

    productTypes = Object.values(ProductType).map((type) => ({
        label: PRODUCT_TYPE_LABELS[type],
        value: type
    }));
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
        effect(() => {
            const product = this.productsStore.product();
            if (product) {
                this.form.patchValue(product);
            }
        });
    }

    ngOnInit(): void {
        this.buildForm();

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.productId = +id;
            this.productsStore.loadProductById({ id });
        }
    }

    buildForm(): void {
        this.form = this.fb.group({
            code: ['', Validators.required],
            name: ['', Validators.required],
            type: ['input', Validators.required],
            unit: [''],
            estimatedUnitPrice: [0],
            defaultLocation: [''],
            description: [''],
            isActive: [true],
            variants: this.fb.array([])
        });
    }

    get variationsFormArray(): FormArray {
        return this.form.get('variants') as FormArray;
    }

    onSubmit(): void {
        if (this.form.invalid) return;

        const data: Product = this.form.value;

        if (this.isEditMode) {
        } else {
            this.productsStore.addProduct(data);
        }
    }
    addVariant(variant: any) {
        this.variationsFormArray.push(this.fb.group(variant));
    }

    cancel(): void {
        this.router.navigate(['/inventory/products']);
    }
}
