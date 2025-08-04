import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';
import { Role } from '../models/role.model';

@Injectable({
    providedIn: 'root'
})
export class RolesService {
    private readonly baseUrl = `${environment.apiUrl}settings/roles`;

    constructor(private http: HttpClient) {}

    getAllRoles(): Observable<ApiResponse<Role[]>> {
        return this.http.get<ApiResponse<Role[]>>(this.baseUrl);
    }

    getRoleById(id: number | string): Observable<ApiResponse<Role>> {
        return this.http.get<ApiResponse<Role>>(`${this.baseUrl}/${id}`);
    }

    createRole(role: Partial<Role>): Observable<ApiResponse<Role>> {
        return this.http.post<ApiResponse<Role>>(this.baseUrl, role);
    }

    updateRole(id: number | string | null, role: Partial<Role>): Observable<ApiResponse<Role>> {
        return this.http.put<ApiResponse<Role>>(`${this.baseUrl}/${id}`, role);
    }

    deleteRole(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }
}
