import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';
import { Module } from '../models/module.model';

@Injectable({
    providedIn: 'root'
})
export class ModulesService {
    private readonly baseUrl = `${environment.apiUrl}settings/modules`;

    constructor(private http: HttpClient) {}

    getModules(): Observable<ApiResponse<Module[]>> {
        return this.http.get<ApiResponse<Module[]>>(this.baseUrl);
    }

    getModule(id: number): Observable<ApiResponse<Module>> {
        return this.http.get<ApiResponse<Module>>(`${this.baseUrl}/${id}`);
    }

    createModule(module: Partial<Module>): Observable<ApiResponse<Module>> {
        return this.http.post<ApiResponse<Module>>(this.baseUrl, module);
    }

    updateModule(id: number, module: Partial<Module>): Observable<ApiResponse<Module>> {
        return this.http.put<ApiResponse<Module>>(`${this.baseUrl}/${id}`, module);
    }

    deleteModule(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }
}
