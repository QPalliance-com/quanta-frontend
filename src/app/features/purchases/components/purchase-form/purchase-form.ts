import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';
import { DatePicker } from 'primeng/datepicker';
import { forkJoin, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Product } from '../../../inventory/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { PurchaseItemsTableComponent } from '../purchase-items-table/purchase-items-table';
import { PurchaseOrderItem } from '../../models/purchase-order-item.model';
import { CompanyService } from '../../../settings/services/company.service';
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { ProductService } from '../../../inventory/services/product.service';
import { CostCenterService } from '../../../settings/services/cost-center.service';
import { CostCenter } from '../../../settings/models/cost-center.model';
@Component({
    selector: 'app-purchase-form',
    templateUrl: './purchase-form.html',
    styleUrls: ['./purchase-form.scss'],
    standalone: true,
    imports: [InputTextModule, InputNumberModule, FileUpload, ToastModule, MultiSelectModule, SelectModule, ButtonModule, DividerModule, CommonModule, ReactiveFormsModule, PanelModule, DatePicker, PurchaseItemsTableComponent], // ← agrega aquí PrimeNG y módulos compartidos si es necesario
    providers: [SupplierService, MessageService]
})
export class PurchaseFormComponent implements OnInit {
    @Input() formData: PurchaseOrder | null = null;
    @Output() submitted = new EventEmitter<PurchaseOrder>();
    @Output() cancelled = new EventEmitter<void>();
    suppliers: Supplier[] = [];
    costCenters: CostCenter[] = [];
    filteredProducts: Product[] = [];
    form!: FormGroup;
    editMode: boolean = false;
    orderId: number | null = null;
    selectedFile?: File; // Variable para almacenar el archivo seleccionado

    statusOptions = Object.values(PurchaseOrderStatus);

    constructor(
        private fb: FormBuilder,
        private orderService: PurchaseOrderService,
        private supplierService: SupplierService,
        private companyService: CompanyService,
        private msg: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private productsService: ProductService,
        private costCenterService: CostCenterService
    ) {}

    ngOnInit(): void {
        forkJoin([this.supplierService.getSuppliersData(), this.costCenterService.getAllCostCenter()]).subscribe({
            next: ([supplierRes, costCenterRes]) => {
                this.suppliers = supplierRes.data;
                this.costCenters = costCenterRes.data;
            },
            error: () => {
                this.msg.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar datos' });
            }
        });
        this.buildForm();
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.editMode = true;
                this.orderId = +id;
                this.loadPurchaseOrder(id);
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
        const company = this.companyService.company;

        this.form = this.fb.group({
            companyId: [company?.id ?? null, Validators.required],
            companyName: [company?.companyName ?? null, Validators.required],
            supplierId: [null, Validators.required],
            receptionDate: [null, Validators.required],
            dueDate: [null, Validators.required],
            deliveryDays: [null, [Validators.required, Validators.min(0)]],
            ceco: [null, Validators.required],
            participation: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
            status: [PurchaseOrderStatus.Solicited, Validators.required],
            items: this.fb.array([])
        });
    }
    get itemsFormArray(): FormArray {
        return this.form.get('items') as FormArray;
    }
    loadSuppliers(): void {
        this.supplierService.getSuppliersData().subscribe({
            next: (res) => (this.suppliers = res.data),
            error: () => (this.suppliers = [])
        });
    }
    loadPurchaseOrder(id: number | string): void {
        this.orderService.getPurchaseOrderById(id).subscribe({
            next: (res) => {
                const data = res.data;
                // Convierte fechas a objetos Date si vienen como string
                data.receptionDate = data.receptionDate ? new Date(data.receptionDate) : null;
                data.dueDate = data.dueDate ? new Date(data.dueDate) : null;
                this.form.patchValue(data);
                this.setItems(data.items);
            },
            error: () => this.msg.add({ severity: 'error', summary: 'Error', detail: 'Orden de compra no encontrada' })
        });
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
        if (this.form.invalid) return;

        const order: PurchaseOrder = this.form.value;

        if (this.editMode && this.orderId !== null) {
            this.orderService.updatePurchaseOrder(this.orderId, order).subscribe(() => {
                this.msg.add({ severity: 'success', summary: 'Actualizado', detail: 'Orden de compra actualizado correctamente', life: 3000 });
                // this.router.navigate(['/purchases/suppliers-list']);
            });
        } else {
            console.log('Creating new order:', order);
            this.orderService.createPurchaseOrder(order).subscribe(() => {
                this.msg.add({ severity: 'success', summary: 'Creado', detail: 'Orden de compra creada exitosamente', life: 3000 });
                // this.router.navigate(['/purchases/suppliers-list']);
            });
        }
    }

    cancel(): void {
        this.router.navigate(['/purchases/orders']);
    }
    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
    // Para mostrar el label del centro de costo
    getCecoLabel(id: number | string): string | number {
        const ceco = this.costCenters.find((c) => c.id === id);
        return ceco ? ceco.name : id;
    }

    // Para sumar el total de participación
    get totalParticipation(): number {
        const cecos = this.form.get('ceco')?.value || [];
        return cecos.map((id: number) => this.form.get(`participation_${id}`)?.value || 0).reduce((a: number, b: number) => a + b, 0);
    }
}
