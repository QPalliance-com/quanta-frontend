import { Component, OnInit } from '@angular/core';
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
    providers: [ProductService]
})
export class ProductFormComponent implements OnInit {
    form!: FormGroup;
    isEditMode = false;
    productId!: number;
    productList: Product[] = [];
    filteredProducts: Product[] = [];
    newAttribute: string = '';
    attributes: string[] = [];
    parentProductName: string = '';
    productTypes = [
        { label: 'Input', value: 'input' },
        { label: 'Final Product', value: 'final_product' }
    ];

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        forkJoin({
            products: this.productService.getAllProductsCatalogItem()
        }).subscribe(({ products }) => {
            this.productList = products.data.filter((p) => !p.isVariant);
        });
        this.buildForm();

        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.productId = +id;
            this.loadProduct(this.productId);
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

    loadProduct(id: number): void {
        this.productService.getProductById(id).subscribe((product) => {
            this.form.patchValue(product.data);
        });
    }
    get variationsFormArray(): FormArray {
        return this.form.get('variants') as FormArray;
    }

    onSubmit(): void {
        if (this.form.invalid) return;

        const data: Product = this.form.value;

        if (this.isEditMode) {
            this.productService.updateProduct(this.productId, data).subscribe(() => {
                this.router.navigate(['/inventory/products']);
            });
        } else {
            this.productService.createProduct(data).subscribe(() => {
                this.router.navigate(['/inventory/products']);
            });
        }
    }
    addVariant(variant: any) {
        this.variationsFormArray.push(this.fb.group(variant));
    }

    cancel(): void {
        this.router.navigate(['/inventory/products']);
    }
}
