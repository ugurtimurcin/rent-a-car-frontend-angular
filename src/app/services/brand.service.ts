import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'http://localhost:53224/api/Brands/getall';

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
}
