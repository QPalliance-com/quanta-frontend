import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Warehouse } from '../models/warehouse.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WarehousesService {
    private readonly baseUrl = `${environment.apiUrl}inv/warehouses`;

    constructor(private http: HttpClient) {}

    getAllWarehouses(): Observable<Warehouse[]> {
        return this.http.get<Warehouse[]>(this.baseUrl);
    }

    getWarehouseById(id: number): Observable<Warehouse> {
        return this.http.get<Warehouse>(`${this.baseUrl}/${id}`);
    }

    createWarehouse(data: Warehouse): Observable<Warehouse> {
        return this.http.post<Warehouse>(this.baseUrl, data);
    }

    updateWarehouse(id: number, data: Partial<Warehouse>): Observable<Warehouse> {
        return this.http.put<Warehouse>(`${this.baseUrl}/${id}`, data);
    }

    deleteWarehouse(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
