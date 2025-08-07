import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/models/api-response.model';
import { CostCenter } from '../models/cost-center.model';

@Injectable({
    providedIn: 'root'
})
export class CostCenterService {
    private readonly baseUrl = `${environment.apiUrl}settings/cost-center`;

    constructor(private http: HttpClient) {}

    getAllCostCenter(): Observable<ApiResponse<CostCenter[]>> {
        return this.http.get<ApiResponse<CostCenter[]>>(this.baseUrl);
    }

    getCostCenter(id: number | string): Observable<ApiResponse<CostCenter>> {
        return this.http.get<ApiResponse<CostCenter>>(`${this.baseUrl}/${id}`);
    }

    createCostCenter(costcenter: CostCenter): Observable<ApiResponse<CostCenter>> {
        return this.http.post<ApiResponse<CostCenter>>(this.baseUrl, costcenter);
    }

    updateCostCenter(id: number | string | null, costcenter: Partial<CostCenter>): Observable<ApiResponse<CostCenter>> {
        return this.http.put<ApiResponse<CostCenter>>(`${this.baseUrl}/${id}`, costcenter);
    }

    deleteCostCenter(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }
}
