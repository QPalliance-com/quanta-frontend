import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSPRequest } from '../models/osp-request.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OspService {
    private readonly baseUrl = `${environment.apiUrl}pur/osp`;
    constructor(private http: HttpClient) {}

    getAllOsp(): Observable<ApiResponse<OSPRequest[]>> {
        return this.http.get<ApiResponse<OSPRequest[]>>(this.baseUrl);
    }
    getOspById(id: number | string): Observable<ApiResponse<OSPRequest>> {
        return this.http.get<ApiResponse<OSPRequest>>(`${this.baseUrl}/${id}`);
    }
}
