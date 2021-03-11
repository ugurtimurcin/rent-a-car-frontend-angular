import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'http://localhost:53224/api/Rentals/getallrentaldetail'
  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<Rental[]>{
    return this.httpClient.get<Rental[]>(this.apiUrl);
  }

}
