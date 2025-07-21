import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { environment } from '../../../../environments/environment';

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    traceId?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private readonly baseUrl = `${environment.apiUrl}settings/companies`;

    constructor(private http: HttpClient) {
        this.getCompany();
    }

    getCompany(): Observable<ApiResponse<Company>> {
        return this.http.get<ApiResponse<Company>>(this.baseUrl);
    }
}
