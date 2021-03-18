import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailModel } from '../models/carDetailModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'http://localhost:53224/api/Cars/'
  
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + 'getallcarsdetail');
  }
  getCarsByBrand(brandId: number): Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.apiUrl + `getbybrand?id=${brandId}`)
  }

  getCarDetail(carId: number): Observable<CarDetailModel<Car>>{
    return this.httpClient.get<CarDetailModel<Car>>(this.apiUrl + `GetDetailById?id=${carId}`)
  }
}
