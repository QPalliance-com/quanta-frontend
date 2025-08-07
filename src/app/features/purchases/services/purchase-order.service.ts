import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrder } from '../models/purchase-order.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PurchaseOrderService {
    private readonly baseUrl = `${environment.apiUrl}pur/purchase-orders`;

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
}
