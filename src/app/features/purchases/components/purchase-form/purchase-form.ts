import { Component, Input, Output, EventEmitter, OnInit, inject, effect } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PurchaseOrder } from '../../models/purchase-order.model';
import { PurchaseOrderStatus } from '../../../../core/enums/purchase-order-status.enum';
/** PrimeNG modules */
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
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { PurchaseItemsTableComponent } from '../purchase-items-table/purchase-items-table';
import { PurchaseOrderItem } from '../../models/purchase-order-item.model';
import { CompanyService } from '../../../settings/services/company.service';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { ProductService } from '../../../inventory/services/product.service';
import { CostCenterStore } from '../../../settings/store/cost-center/cost-center.store';
import { SupplierStore } from '../../store/supplier/supplier.store';
import { PurchaseOrderStore } from '../../store/purchase-order/purchase-order.store';
import { CompanyStore } from '../../../settings/store/company.store';
@Component({
    selector: 'app-purchase-form',
    templateUrl: './purchase-form.html',
    styleUrls: ['./purchase-form.scss'],
    standalone: true,
    imports: [InputTextModule, InputNumberModule, FileUpload, ToastModule, MultiSelectModule, SelectModule, ButtonModule, DividerModule, CommonModule, ReactiveFormsModule, PanelModule, DatePicker, PurchaseItemsTableComponent], // ← agrega aquí PrimeNG y módulos compartidos si es necesario
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
    editMode: boolean = false;
    orderId: number | null = null;
    selectedFile?: File; // Variable para almacenar el archivo seleccionado

    statusOptions = Object.values(PurchaseOrderStatus);

    constructor(
        private fb: FormBuilder,
        private orderService: PurchaseOrderService,
        private companyService: CompanyService,
        private msg: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private productsService: ProductService
    ) {
        effect(() => {
            const purchaseOrder = this.purchaseOrderStore.purchaseOrder();
            if (purchaseOrder) {
                // Convierte fechas a objetos Date si vienen como string
                purchaseOrder.receptionDate = purchaseOrder.receptionDate ? new Date(purchaseOrder.receptionDate) : null;
                purchaseOrder.dueDate = purchaseOrder.dueDate ? new Date(purchaseOrder.dueDate) : null;
                this.form.patchValue(purchaseOrder);
                this.form.patchValue({
                    cecoIds: purchaseOrder.cecos?.map((c) => c.cecoId)
                });
                this.loadCecosPurchaseOrder(purchaseOrder.cecos);
            }
        });
    }

    ngOnInit(): void {
        this.suppliersStore.loadAllSuppliers();
        this.costCenterStore.loadCostCenters();
        this.buildForm();
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.editMode = true;
                this.orderId = +id;
                this.purchaseOrderStore.loadPurchaseOrder({ id });
            } else {
                this.editMode = false;
                this.form.patchValue({
                    status: PurchaseOrderStatus.Solicited
                });
            }
        });
        this.form.get('receptionDate')?.valueChanges.subscribe((receptionDate: Date) => {
            if (receptionDate) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selected = new Date(receptionDate);
                selected.setHours(0, 0, 0, 0);
                const diffTime = selected.getTime() - today.getTime(); // ← invertido
                const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
                this.form.get('deliveryDays')?.setValue(diffDays, { emitEvent: false });
            } else {
                this.form.get('deliveryDays')?.setValue(0, { emitEvent: false });
            }
        });
        this.form.get('ceco')?.valueChanges.subscribe((cecos: any[]) => {
            // Elimina controles antiguos
            Object.keys(this.form.controls)
                .filter((key) => key.startsWith('participation_'))
                .forEach((key) => this.form.removeControl(key));
            // Agrega un control por cada ceco seleccionado
            cecos.forEach((cecoId) => {
                this.form.addControl(`participation_${cecoId}`, this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(100)]));
            });
        });
        const ospRequest = history.state.ospRequest;
        if (ospRequest) {
            // Aquí puedes inicializar los campos del formulario con los datos recibidos
            this.form.patchValue({
                supplierId: ospRequest.preferredSupplierId
                // Otros campos que quieras precargar...
            });

            // Si viene solo un productId, agrégalo como único ítem
            if (ospRequest.product) {
                this.itemsFormArray.push(
                    this.fb.group({
                        productId: ospRequest.product.id,
                        name: ospRequest.product.name,
                        unit: ospRequest.product.unit ?? '',
                        quantity: ospRequest.requiredQuantity || ospRequest.product.unit,
                        unitPrice: ospRequest.product.unitPrice ?? null,
                        observations: ''
                    })
                );
            }
        }
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
    get itemsFormArray(): FormArray {
        return this.form.get('items') as FormArray;
    }

    get cecosFormArray(): FormArray {
        return this.form.get('cecos') as FormArray;
    }
    setItems(items: PurchaseOrderItem[]): void {
        const itemsFG = items.map((item) =>
            this.fb.group<PurchaseOrderItem>({
                productId: item.productId,
                name: item.name,
                unit: item.unit,
                quantity: item.quantity,
                unitPrice: item.unitPrice ?? null,
                observations: item.observations ?? ''
            })
        );

        this.itemsFormArray.clear(); // Limpia si venías del modo crear
        itemsFG.forEach((fg) => this.itemsFormArray.push(fg));
    }

    onSubmit(): void {
        // if (this.form.invalid) return;

        const purchaseOrder: PurchaseOrder = this.form.value;
        console.log(purchaseOrder);
        if (this.editMode && this.orderId !== null) {
            this.purchaseOrderStore.updatePurchaseOrder({ id: this.orderId, purchaseOrder: purchaseOrder });
        } else {
            this.purchaseOrderStore.addPurchaseOrder(purchaseOrder);
        }
    }
    onCecosSelected(selectedCecos: number[]) {
        const cecosArray = this.form.get('cecos') as FormArray;
        cecosArray.clear(); // limpiar los anteriores

        selectedCecos.forEach((cecoId) => {
            cecosArray.push(
                this.fb.group({
                    cecoId: [cecoId],
                    cecoName: this.getCecoLabel(cecoId),
                    participation: [0]
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
                    participation: [ceco.participation]
                })
            );
        });
    }
    cancel(): void {
        this.router.navigate(['/purchases/orders']);
    }
    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
    // Para mostrar el label del centro de costo
    getCecoLabel(id: number | string): string | number {
        const ceco = this.costCenterStore.costCenters().find((c) => c.id === id);
        return ceco ? ceco.name : id;
    }

    // Para sumar el total de participación
    get totalParticipation(): number {
        const cecos = this.form.get('cecos') as FormArray;
        return cecos.controls.reduce((total, group) => {
            return total + (group.get('participation')?.value || 0);
        }, 0);
    }
}
