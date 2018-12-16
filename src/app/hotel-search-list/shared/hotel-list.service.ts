import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
import { Hotel, Price } from './hotel-list.model';

@Injectable()
export class HotelSearchService {

  constructor(private http:HttpClient) { }

  public getHotel(city): Observable<Hotel[]> {
    return this.http.get<any>(environment.HOTEL.GET + city);
  }

  public getPriceByCurrency(currency): Observable<Price[]> {
    return this.http.get<any>(environment.CURRENCY.GET + currency);
  }
  
}
