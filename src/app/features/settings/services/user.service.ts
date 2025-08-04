import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly baseUrl = `${environment.apiUrl}settings/users`;

    constructor(private http: HttpClient) {}

    getUsers(): Observable<ApiResponse<User[]>> {
        return this.http.get<ApiResponse<User[]>>(this.baseUrl);
    }

    getUser(id: number): Observable<ApiResponse<User>> {
        return this.http.get<ApiResponse<User>>(`${this.baseUrl}/${id}`);
    }

    createUser(user: Partial<User>): Observable<ApiResponse<User>> {
        return this.http.post<ApiResponse<User>>(this.baseUrl, user);
    }

    updateUser(id: number, user: Partial<User>): Observable<ApiResponse<User>> {
        return this.http.put<ApiResponse<User>>(`${this.baseUrl}/${id}`, user);
    }

    deleteUser(id: number): Observable<ApiResponse<void>> {
        return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
    }
}
