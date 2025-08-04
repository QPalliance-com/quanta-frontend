import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';
import { Module } from '../models/module.model';
import { Permission } from '../models/permission.model';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    private readonly baseUrl = `${environment.apiUrl}settings/permissions`;

    constructor(private http: HttpClient) {}

    getPermissions(): Observable<ApiResponse<Permission[]>> {
        return this.http.get<ApiResponse<Permission[]>>(this.baseUrl);
    }

    getPermission(id: number): Observable<ApiResponse<Permission>> {
        return this.http.get<ApiResponse<Permission>>(`${this.baseUrl}/${id}`);
    }

    createPermission(permission: Partial<Permission>): Observable<ApiResponse<Permission>> {
        return this.http.post<ApiResponse<Permission>>(this.baseUrl, permission);
    }

    updatePermission(id: number, permission: Partial<Permission>): Observable<ApiResponse<Permission>> {
        return this.http.put<ApiResponse<Permission>>(`${this.baseUrl}/${id}`, permission);
    }

    deletePermission(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }
}
