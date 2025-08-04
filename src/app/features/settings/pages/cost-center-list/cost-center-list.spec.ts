import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterListComponent } from './cost-center-list';

describe('CostCenterListComponent', () => {
    let component: CostCenterListComponent;
    let fixture: ComponentFixture<CostCenterListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CostCenterListComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CostCenterListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
