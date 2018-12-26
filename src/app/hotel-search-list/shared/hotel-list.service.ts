import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
import { Hotel, Price } from './hotel-list.model';

@Injectable()
export class HotelSearchService {

  constructor(private http:HttpClient) { }

  public getHotel(city): Observable<Hotel[]> {
    //return this.http.get<any>(environment.HOTEL.GET + city);
    return new Observable(obs => {
      this.http.get(environment.HOTEL.GET + city).subscribe((res: any[]) => {
        obs.next(res);
        obs.complete();
      }, error => {
        obs.error(error);
        obs.complete();
      });
    });
  }

  public getPriceByCurrency(currency): Observable<Price[]> {
    return new Observable(obs => {
      this.http.get(environment.CURRENCY.GET + currency).subscribe((res: any[]) => {
        obs.next(res);
        obs.complete();
      }, error => {
        obs.error(error);
        obs.complete();
      });
    });
  }

  public getHotelsByLocale(locale): Observable<Hotel[]>{
    return new Observable(obs => {
      this.http.get(environment.LOCALE.GET+locale).subscribe((res: any[]) => {
        obs.next(res);
        obs.complete();
      }, error => {
        obs.error(error);
        obs.complete();
      });
    });
  }
  
}
