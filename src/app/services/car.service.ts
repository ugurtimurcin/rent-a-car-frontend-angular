import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'http://localhost:53224/api/Cars/'
  
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.apiUrl + 'getallcarsdetail');
  }
  getCarsByBrand(brandId: number): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.apiUrl + `getbybrand?id=${brandId}`)
  }
}
