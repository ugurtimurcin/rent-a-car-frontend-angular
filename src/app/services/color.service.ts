import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'http://localhost:53224/api/Colors/getall'
  
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<Color[]>{
    return this.httpClient.get<Color[]>(this.apiUrl);
  }
}
