import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrder } from '../models/purchase-order.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { CompanyStore } from '@/features/settings/store/company.store';
import { PurchaseOrderStatus } from '@/core/enums/purchase-order-status.enum';
import { OSP } from '../models/osp.model';

@Injectable({ providedIn: 'root' })
export class PurchaseOrderService {
    private readonly baseUrl = `${environment.apiUrl}pur/purchase-orders`;
    companyStore = inject(CompanyStore);
    constructor(private http: HttpClient) {}

    getAllPurchaseOrders(): Observable<ApiResponse<PurchaseOrder[]>> {
        return this.http.get<ApiResponse<PurchaseOrder[]>>(this.baseUrl);
    }
    getPurchaseOrderById(id: number | string): Observable<ApiResponse<PurchaseOrder>> {
        return this.http.get<ApiResponse<PurchaseOrder>>(`${this.baseUrl}/${id}`);
    }
    createPurchaseOrder(order: PurchaseOrder): Observable<ApiResponse<PurchaseOrder>> {
        return this.http.post<ApiResponse<PurchaseOrder>>(this.baseUrl, order);
    }

    updatePurchaseOrder(id: number | string, order: PurchaseOrder): Observable<ApiResponse<PurchaseOrder>> {
        return this.http.put<ApiResponse<PurchaseOrder>>(`${this.baseUrl}/${id}`, order);
    }
    deletePurchaseOrder(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }
    createOrdersFromOSP(ospItems: OSP[]) {
        const grouped = this.groupBySupplier(ospItems);
        const requests = Object.keys(grouped).map((supplierId) => {
            const order = this.mapToPurchaseOrder(grouped[+supplierId]);
            console.log(order);
            return this.createPurchaseOrder(order); // método ya existente en tu store/servicio
        });

        return forkJoin(requests);
    }

    private groupBySupplier(ospItems: any[]) {
        return ospItems.reduce(
            (acc, item) => {
                const supplierId = item.preferredSupplierId;
                if (!acc[supplierId]) acc[supplierId] = [];
                acc[supplierId].push(item);
                return acc;
            },
            {} as Record<number, any[]>
        );
    }

    private mapToPurchaseOrder(items: any[]): PurchaseOrder {
        return {
            id: null,
            companyName: this.companyStore.company()?.companyName || '',
            supplierId: items[0].preferredSupplierId,
            receptionDate: null,
            dueDate: null,
            deliveryDays: null,
            cecos: null,
            participation: null,
            status: PurchaseOrderStatus.Solicited,
            items: items.map((item) => ({
                productId: item.product.id,
                name: item.product.name,
                unit: item.unit || item.product.unit,
                quantity: item.requiredQuantity,
                unitPrice: null,
                observations: null
            }))
        };
    }
}
