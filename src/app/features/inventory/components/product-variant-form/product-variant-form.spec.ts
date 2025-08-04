import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariantFormComponent } from './product-variant-form';

describe('ProductVariantFormComponent', () => {
    let component: ProductVariantFormComponent;
    let fixture: ComponentFixture<ProductVariantFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductVariantFormComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ProductVariantFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
