import { Component, OnInit, inject, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderStatus } from '../../../../core/enums/purchase-order-status.enum';
import { CostCenterStore } from '../../store/cost-center/cost-center.store';
import { CostCenter } from '../../models/cost-center.model';

@Component({
    selector: 'app-cost-center-form',
    imports: [CommonModule, ReactiveFormsModule, InputText, TextareaModule, CheckboxModule, ButtonModule, ToastModule],
    providers: [CostCenterStore],
    templateUrl: './cost-center-form.html',
    styleUrl: './cost-center-form.scss'
})
export class CostCenterFormComponent implements OnInit {
    costCentersStore = inject(CostCenterStore);
    form!: FormGroup;
    editMode: boolean = false;
    costCenterId: number | string | null = null;
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
        effect(() => {
            const costCenter = this.costCentersStore.costCenter();
            if (costCenter) {
                this.form.patchValue(costCenter);
            }
        });
    }

    ngOnInit(): void {
        this.loadForm();
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.editMode = true;
                this.costCenterId = +id;
                this.costCentersStore.loadCostCenter({ id: this.costCenterId });
            } else {
                this.editMode = false;
                this.form.patchValue({
                    status: PurchaseOrderStatus.Solicited
                });
            }
        });
    }
    loadForm(): void {
        this.form = this.fb.group({
            code: ['', Validators.required],
            name: ['', Validators.required],
            description: [''],
            isActive: [true]
        });
    }

    onSubmit(): void {
        if (this.form.invalid) return;
        const costCenter: CostCenter = this.form.value;
        if (this.editMode && this.costCenterId !== null) {
            this.costCentersStore.updateCostCenter({ id: this.costCenterId, costCenter });
        } else {
            this.costCentersStore.addCostCenter(costCenter);
        }
    }
    cancel(): void {
        this.router.navigate(['/settings/cost-center']);
    }
}
