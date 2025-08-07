import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/models/api-response.model';

@Injectable({ providedIn: 'root' })
export class CompanyService {
    private readonly baseUrl = `${environment.apiUrl}settings/companies`;

    constructor(private http: HttpClient) {}

    private extractSubdomain(): string {
        const host = window.location.hostname;
        const parts = host.split('.');
        // Manejo de dominio local o sin subdominio
        if (parts.length < 3) return 'dev';

        return parts[0]; // empresa1
    }

    loadCompany() {
        const subdomain = this.extractSubdomain();
        return this.http.get<ApiResponse<Company>>(`${this.baseUrl}/${subdomain}`);
    }
}
