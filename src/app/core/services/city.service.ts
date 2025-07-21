import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CityService {
    constructor(private httpClient: HttpClient) {}

    getCitiesByDepartment(idDepartment: number) {
        return this.httpClient.get<any[]>(`https://api-colombia.com/api/v1/Department/${idDepartment}/cities`);
    }
    getAllCities() {
        return this.httpClient.get<any[]>('https://api-colombia.com/api/v1/City');
    }
}
