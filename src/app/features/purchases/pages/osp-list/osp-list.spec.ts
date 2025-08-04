import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspListComponent } from './osp-list';

describe('OspListComponent', () => {
    let component: OspListComponent;
    let fixture: ComponentFixture<OspListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OspListComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(OspListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
