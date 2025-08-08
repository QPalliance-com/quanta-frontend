import { Component, Input, Output, EventEmitter, OnInit, inject, effect } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PurchaseOrder } from '../../models/purchase-order.model';
import { PurchaseOrderStatus } from '../../../../core/enums/purchase-order-status.enum';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { DatePicker } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { Product } from '../../../inventory/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseItemsTableComponent } from '../purchase-items-table/purchase-items-table';
import { PurchaseOrderItem } from '../../models/purchase-order-item.model';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { CostCenterStore } from '../../../settings/store/cost-center/cost-center.store';
import { SupplierStore } from '../../store/supplier/supplier.store';
import { PurchaseOrderStore } from '../../store/purchase-order/purchase-order.store';
import { CompanyStore } from '../../../settings/store/company.store';

@Component({
    selector: 'app-purchase-form',
    templateUrl: './purchase-form.html',
    styleUrls: ['./purchase-form.scss'],
    standalone: true,
    imports: [InputTextModule, InputNumberModule, FileUpload, ToastModule, MultiSelectModule, SelectModule, ButtonModule, DividerModule, CommonModule, ReactiveFormsModule, PanelModule, DatePicker, PurchaseItemsTableComponent],
    providers: [CostCenterStore, SupplierStore, PurchaseOrderStore, MessageService]
})
export class PurchaseFormComponent implements OnInit {
    @Input() formData: PurchaseOrder | null = null;
    @Output() submitted = new EventEmitter<PurchaseOrder>();
    @Output() cancelled = new EventEmitter<void>();

    suppliersStore = inject(SupplierStore);
    costCenterStore = inject(CostCenterStore);
    purchaseOrderStore = inject(PurchaseOrderStore);
    companyStore = inject(CompanyStore);

    filteredProducts: Product[] = [];
    form!: FormGroup;
    editMode = false;
    orderId: number | null = null;
    selectedFile?: File;

    statusOptions = Object.values(PurchaseOrderStatus);
    private loadedOnce = false;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ) {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.editMode = true;
                this.orderId = +id;
                this.purchaseOrderStore.loadPurchaseOrder({ id });

                effect(() => {
                    const purchaseOrder = this.purchaseOrderStore.purchaseOrder();
                    if (purchaseOrder && !this.loadedOnce) {
                        this.loadedOnce = true;
                        this.patchPurchaseOrder(purchaseOrder);
                    }
                });
            } else {
                this.editMode = false;
            }
        });
    }

    ngOnInit(): void {
        this.suppliersStore.loadAllSuppliers();
        this.costCenterStore.loadCostCentersFormOrder();
        this.buildForm();

        // Deshabilitar status en modo creación
        if (!this.editMode) {
            this.form.get('status')?.disable();
            this.form.patchValue({ status: PurchaseOrderStatus.Solicited });
        }

        // Calcular deliveryDays automáticamente
        this.form.get('receptionDate')?.valueChanges.subscribe((receptionDate: Date) => {
            if (receptionDate) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selected = new Date(receptionDate);
                selected.setHours(0, 0, 0, 0);
                const diffTime = selected.getTime() - today.getTime();
                const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
                this.form.get('deliveryDays')?.setValue(diffDays, { emitEvent: false });
            } else {
                this.form.get('deliveryDays')?.setValue(0, { emitEvent: false });
            }
        });

        // Generar controles dinámicos para participación por ceco
        this.form.get('cecoIds')?.valueChanges.subscribe((cecos: number[]) => {
            const cecosArray = this.form.get('cecos') as FormArray;
            cecosArray.clear();
            cecos.forEach((cecoId) => {
                cecosArray.push(
                    this.fb.group({
                        cecoId: [cecoId],
                        cecoName: this.getCecoLabel(cecoId),
                        participation: [0, [Validators.required, Validators.min(0), Validators.max(100)]]
                    })
                );
            });
        });
    }

    private buildForm(): void {
        this.form = this.fb.group({
            companyId: [this.companyStore.company()?.id ?? null, Validators.required],
            companyName: [this.companyStore.company()?.companyName ?? null, Validators.required],
            supplierId: [null, Validators.required],
            receptionDate: [null, Validators.required],
            dueDate: [null, Validators.required],
            deliveryDays: [null, [Validators.required, Validators.min(0)]],
            cecoIds: [[]],
            cecos: this.fb.array([]),
            participation: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
            status: [PurchaseOrderStatus.Solicited, Validators.required],
            items: this.fb.array([])
        });
    }

    private patchPurchaseOrder(purchaseOrder: PurchaseOrder): void {
        purchaseOrder.receptionDate = purchaseOrder.receptionDate ? new Date(purchaseOrder.receptionDate) : null;
        purchaseOrder.dueDate = purchaseOrder.dueDate ? new Date(purchaseOrder.dueDate) : null;

        this.form.patchValue({
            ...purchaseOrder,
            cecoIds: purchaseOrder.cecos?.map((c) => c.cecoId) || []
        });

        this.loadCecosPurchaseOrder(purchaseOrder.cecos);
        this.setItems(purchaseOrder.items || []);
    }

    get itemsFormArray(): FormArray {
        return this.form.get('items') as FormArray;
    }

    get cecosFormArray(): FormArray {
        return this.form.get('cecos') as FormArray;
    }

    setItems(items: PurchaseOrderItem[]): void {
        this.itemsFormArray.clear();
        items.forEach((item) => {
            this.itemsFormArray.push(
                this.fb.group({
                    productId: [item.productId],
                    name: [item.name],
                    unit: [item.unit],
                    quantity: [item.quantity],
                    unitPrice: [item.unitPrice ?? null],
                    observations: [item.observations || '']
                })
            );
        });
    }

    loadCecosPurchaseOrder(cecos: { cecoId: number; participation: number }[] | null) {
        const cecosArray = this.form.get('cecos') as FormArray;
        cecosArray.clear();
        cecos?.forEach((ceco) => {
            cecosArray.push(
                this.fb.group({
                    cecoId: [ceco.cecoId],
                    cecoName: this.getCecoLabel(ceco.cecoId),
                    participation: [ceco.participation]
                })
            );
        });
    }

    onSubmit(): void {
        const purchaseOrder: PurchaseOrder = this.form.getRawValue();
        if (this.editMode && this.orderId !== null) {
            this.purchaseOrderStore.updatePurchaseOrder({ id: this.orderId, purchaseOrder });
        } else {
            this.purchaseOrderStore.addPurchaseOrder(purchaseOrder);
        }
    }

    cancel(): void {
        this.router.navigate(['/purchases/orders']);
    }

    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    getCecoLabel(id: number | string): string | number {
        const ceco = this.costCenterStore.costCenters().find((c) => c.id === id);
        return ceco ? ceco.name : id;
    }

    get totalParticipation(): number {
        const cecos = this.form.get('cecos') as FormArray;
        return cecos.controls.reduce((total, group) => {
            return total + (group.get('participation')?.value || 0);
        }, 0);
    }
}
