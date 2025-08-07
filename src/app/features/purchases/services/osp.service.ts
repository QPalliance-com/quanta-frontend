import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OSP } from '../models/osp.model';
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

    getAllOsp(): Observable<ApiResponse<OSP[]>> {
        return this.http.get<ApiResponse<OSP[]>>(this.baseUrl);
    }
    getOspById(id: number | string): Observable<ApiResponse<OSP>> {
        return this.http.get<ApiResponse<OSP>>(`${this.baseUrl}/${id}`);
    }
}
