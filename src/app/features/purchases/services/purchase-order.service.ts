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
    private products: any[] = [
        {
            id: 1,
            name: 'Toner HP 85A',
            description: 'Cartucho de tóner negro compatible con impresoras HP',
            code: 'HP85A',
            unitPrice: 95000
        },
        {
            id: 2,
            name: 'Resma Papel Carta 75gr',
            description: 'Papel blanco tamaño carta 500 hojas',
            code: 'PPC75C',
            unitPrice: 17500
        },
        {
            id: 3,
            name: 'Mouse Logitech M190',
            description: 'Mouse inalámbrico óptico de alta precisión',
            code: 'LOGM190',
            unitPrice: 38000
        }
    ];

    constructor(private http: HttpClient) {}

    getPurchaseOrdersData(): Observable<ApiResponse<PurchaseOrder[]>> {
        return this.http.get<ApiResponse<PurchaseOrder[]>>(this.baseUrl);
    }
    getPurchaseOrderById(id: number | string): Observable<ApiResponse<PurchaseOrder>> {
        return this.http.get<ApiResponse<PurchaseOrder>>(`${this.baseUrl}/${id}`);
    }
    createPurchaseOrder(order: PurchaseOrder): Observable<ApiResponse<PurchaseOrder>> {
        return this.http.post<ApiResponse<PurchaseOrder>>(this.baseUrl, order);
    }

    updatePurchaseOrder(id: number, order: PurchaseOrder): Observable<ApiResponse<PurchaseOrder>> {
        return this.http.put<ApiResponse<PurchaseOrder>>(`${this.baseUrl}/${id}`, order);
    }
    deletePurchaseOrder(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }

    search(query: string): Observable<any[]> {
        const lower = query.toLowerCase();
        const result = this.products.filter((p) => p.name.toLowerCase().includes(lower) || p.code.toLowerCase().includes(lower) || p.description.toLowerCase().includes(lower));
        return of(result).pipe(delay(200)); // simula tiempo de red
    }
}
