import { Component, OnInit } from '@angular/core';
import { HotelSearchService } from '../hote-search-list.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  hotelList:any[] = [];
  maxRate:number = 10; // max rating of the hotel is set to default value of = 10
  isRatingReadonly: boolean = true; // max rating is bydefault readonly
  currencyTypes:string[] = ["USD","SGD","CNY","KRW"];


  constructor(private hotelSearch : HotelSearchService ) { }

  ngOnInit() {
    this.hotelSearch.getHotel().subscribe(response => {
      console.log(response);
      this.hotelList = response;
    });
  }

}
