import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable()
export class HotelSearchService {

  constructor(private http:HttpClient) { }

  public getHotel(): Observable<any> {
    return this.http.get<any>(environment.HOTEL.GET);
  }
  
}