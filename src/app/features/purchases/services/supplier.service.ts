import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/models/api-response.model';
@Injectable({
    providedIn: 'root'
})
export class SupplierService {
    private readonly baseUrl = `${environment.apiUrl}pur/suppliers`;

    // Fetching suppliers data
    // This method retrieves a list of suppliers from the API.
    getAllSuppliers(): Observable<ApiResponse<Supplier[]>> {
        return this.http.get<ApiResponse<Supplier[]>>(this.baseUrl);
    }
    // Fetching a single supplier by ID
    // This method retrieves a specific supplier's details by its ID.
    getSupplierById(id: number | string): Observable<ApiResponse<Supplier>> {
        return this.http.get<ApiResponse<Supplier>>(`${this.baseUrl}/${id}`);
    }
    // Creating, updating, and deleting suppliers
    // These methods handle the creation, updating, and deletion of suppliers in the system.
    createSupplier(supplier: Supplier): Observable<ApiResponse<Supplier>> {
        return this.http.post<ApiResponse<Supplier>>(this.baseUrl, supplier);
    }
    updateSupplier(id: number | string, supplier: Supplier): Observable<ApiResponse<Supplier>> {
        return this.http.put<ApiResponse<Supplier>>(`${this.baseUrl}/${id}`, supplier);
    }
    deleteSupplier(supplier: Supplier): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${supplier.id}`);
    }
    constructor(private http: HttpClient) {}
}
