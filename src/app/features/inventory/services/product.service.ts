import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/models/api-response.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly baseUrl = `${environment.apiUrl}inv/products`;

    constructor(private http: HttpClient) {}

    getAllProductsCatalogItem(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(`${this.baseUrl}`);
    }

    getProductById(id: number | string | null): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${this.baseUrl}/${id}`);
    }
    searchProducts(query: string, limit: number = 10): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(`${this.baseUrl}/search?q=${query}&limit=${limit}`);
    }
    createProduct(item: Product): Observable<ApiResponse<Product>> {
        return this.http.post<ApiResponse<Product>>(`${this.baseUrl}`, item);
    }

    updateProduct(id: number | string | null, product: Partial<Product>): Observable<ApiResponse<Product>> {
        return this.http.put<ApiResponse<Product>>(`${this.baseUrl}/${id}`, product);
    }

    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    getInputs(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(`${this.baseUrl}?type=input`);
    }

    getFinalProducts(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(`${this.baseUrl}?type=final_product`);
    }
}
