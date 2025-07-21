import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    constructor(private httpClient: HttpClient) {}

    getDepartments() {
        return this.httpClient.get<any[]>('https://api-colombia.com/api/v1/Department');
    }
}
