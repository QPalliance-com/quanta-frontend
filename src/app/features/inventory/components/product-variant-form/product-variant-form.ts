import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductVariant } from '../../models/product.model';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-product-variant-form',
    standalone: true,
    imports: [TagModule, CheckboxModule, CommonModule, InputTextModule, InputNumberModule, ButtonModule, ReactiveFormsModule],
    templateUrl: './product-variant-form.html',
    styleUrls: ['./product-variant-form.scss']
})
export class ProductVariantFormComponent implements OnInit {
    @Input() variationsFormArray!: FormArray<FormGroup>;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    addVariation(): void {
        this.variationsFormArray.push(this.createVariationGroup());
    }

    removeVariation(index: number): void {
        this.variationsFormArray.removeAt(index);
    }

    createVariationGroup(): FormGroup {
        return this.fb.group<ProductVariant>({
            id: 0,
            idProduct: 0,
            code: '',
            unit: '',
            estimatedUnitPrice: 0,
            isActive: true
        });
    }
}
