import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PurchaseOrder } from '../../models/purchase-order.model';
import { PurchaseOrderProduct } from '../../models/purchase-order-product.model';
import { PurchaseOrderStatus } from '../../../../core/enums/purchase-order-status.enum';
/** PrimeNG modules */
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { Supplier } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';
import { DatePicker } from 'primeng/datepicker';
import { CompanyService } from '../../../settings/services/company.service';
import { Company } from '../../../settings/models/company.model';
import { forkJoin } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ProductsService } from '../../../inventory/services/products.service';
import { Product } from '../../../inventory/models/product.model';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from '../../services/purchase-order.service';
@Component({
    selector: 'app-purchase-form',
    templateUrl: './purchase-form.component.html',
    styleUrls: ['./purchase-form.component.scss'],
    standalone: true,
    imports: [InputTextModule, InputNumberModule, AutoComplete, SelectModule, ButtonModule, DividerModule, CommonModule, ReactiveFormsModule, PanelModule, DatePicker], // ← agrega aquí PrimeNG y módulos compartidos si es necesario
    providers: [SupplierService, CompanyService, MessageService]
})
export class PurchaseFormComponent implements OnInit {
    @Input() formData: PurchaseOrder | null = null;
    @Output() submitted = new EventEmitter<PurchaseOrder>();
    @Output() cancelled = new EventEmitter<void>();
    suppliers: Supplier[] = [];
    company!: Company;
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
        private productsService: ProductsService,
        private route: ActivatedRoute, // Asegúrate de importar el servicio de productos
        private router: Router
    ) {}

    ngOnInit(): void {
        forkJoin([this.supplierService.getSuppliersData(), this.companyService.getCompany()]).subscribe({
            next: ([supplierRes, companyRes]) => {
                ((this.suppliers = supplierRes.data), (this.company = companyRes.data));
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
                // this.loadSupplier(this.supplierId);
            } else {
                this.editMode = false;
                this.form.patchValue({
                    status: PurchaseOrderStatus.Solicited
                });
            }
        });
    }

    private buildForm(): void {
        this.form = this.fb.group({
            companyName: [this.company ? this.company.companyName : null, Validators.required],
            supplierId: [null, Validators.required],
            receptionDate: [null, Validators.required],
            dueDate: [null, Validators.required],
            deliveryDays: [null, [Validators.required, Validators.min(0)]],
            ceco: [null, Validators.required],
            participation: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
            status: [PurchaseOrderStatus.Solicited, Validators.required],
            products: this.fb.array([])
        });
    }
    loadSuppliers(): void {
        this.supplierService.getSuppliersData().subscribe({
            next: (res) => (this.suppliers = res.data),
            error: () => (this.suppliers = [])
        });
    }

    loadCompany(): void {
        this.companyService.getCompany().subscribe({
            next: (res) => (this.company = res.data)
        });
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
        this.router.navigate(['/purchases/requests']);
    }
}
