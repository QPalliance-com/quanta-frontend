import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/models/api-response.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private readonly baseUrl = `${environment.apiUrl}inv/products`;

    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(this.baseUrl);
    }
    searchProducts(query: string): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(`${this.baseUrl}/search`, { params: { q: query } });
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/${id}`);
    }

    updateProduct(id: number, data: Partial<Product>): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}/${id}`, data);
    }

    createProduct(data: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, data);
    }

    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
