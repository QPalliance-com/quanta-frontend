import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PurchaseOrder } from '../../models/purchase-order.model';
import { PurchaseOrderStatus } from '../../../../core/enums/purchase-order-status.enum';
/** PrimeNG modules */
import { InputTextModule } from 'primeng/inputtext';
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
import { Product } from '../../../settings/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from '../../services/purchase-order.service';
import { PurchaseItemsTableComponent } from '../purchase-items-table/purchase-items-table';
import { PurchaseOrderItem } from '../../models/purchase-order-item.model';
import { CompanyService } from '../../../settings/services/company.service';

@Component({
    selector: 'app-purchase-form',
    templateUrl: './purchase-form.html',
    styleUrls: ['./purchase-form.scss'],
    standalone: true,
    imports: [InputTextModule, InputNumberModule, ToastModule, SelectModule, ButtonModule, DividerModule, CommonModule, ReactiveFormsModule, PanelModule, DatePicker, PurchaseItemsTableComponent], // ← agrega aquí PrimeNG y módulos compartidos si es necesario
    providers: [SupplierService, MessageService]
})
export class PurchaseFormComponent implements OnInit {
    @Input() formData: PurchaseOrder | null = null;
    @Output() submitted = new EventEmitter<PurchaseOrder>();
    @Output() cancelled = new EventEmitter<void>();
    suppliers: Supplier[] = [];
    filteredProducts: Product[] = [];
    form!: FormGroup;
    editMode: boolean = false;
    orderId: number | null = null;
    // Opciones para dropdowns (mock o traído desde servicio)
    cecoOptions = [
        { label: 'Producción', value: 'PROD' },
        { label: 'Mantenimiento', value: 'MANT' }
    ];

    statusOptions = Object.values(PurchaseOrderStatus);

    constructor(
        private fb: FormBuilder,
        private orderService: PurchaseOrderService,
        private supplierService: SupplierService,
        private companyService: CompanyService,
        private msg: MessageService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        forkJoin([this.supplierService.getSuppliersData()]).subscribe({
            next: ([supplierRes]) => {
                this.suppliers = supplierRes.data;
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
}
