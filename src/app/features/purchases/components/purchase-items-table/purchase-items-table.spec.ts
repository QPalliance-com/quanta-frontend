import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemsTableComponent } from './purchase-items-table';

describe('PurchaseItemsTableComponent', () => {
    let component: PurchaseItemsTableComponent;
    let fixture: ComponentFixture<PurchaseItemsTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PurchaseItemsTableComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PurchaseItemsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
