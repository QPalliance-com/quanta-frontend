import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../../environments/environment';
import { ApiResponse } from '../../../../core/models/api-response.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private readonly baseUrl = `${environment.apiUrl}sys/menu`;
    getMenu(): Observable<ApiResponse<[]>> {
        return this.http.get<ApiResponse<[]>>(this.baseUrl);
    }
    constructor(private http: HttpClient) {}
}
