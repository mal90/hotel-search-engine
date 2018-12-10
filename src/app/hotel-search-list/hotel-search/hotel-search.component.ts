import { Component, OnInit } from '@angular/core';
import { HotelSearchService } from '../hote-search-list.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  hotelList:any[] = [];

  constructor(private hotelSearch : HotelSearchService ) { }

  ngOnInit() {
    this.hotelSearch.getHotel().subscribe(response => {
      console.log(response);
      this.hotelList = response;
    });
  }

}
