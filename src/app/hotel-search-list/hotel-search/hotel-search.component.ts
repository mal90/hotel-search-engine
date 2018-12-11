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
  selectedCurrency = this.currencyTypes[0];


  constructor(private hotelSearchService : HotelSearchService ) { }

  ngOnInit() {
    let currentHotel = "tokyo";
    this.hotelSearchService.getHotel(currentHotel).subscribe(hotelList => {
      console.log(hotelList);
      this.hotelList = hotelList;
      this.changeCurrency(this.selectedCurrency);
    });
  }

  changeCurrency(newCurrency: string) { 
    this.selectedCurrency = newCurrency;
    this.hotelSearchService.getPriceByCurrency(newCurrency).subscribe(priceList => {
      console.log(priceList);
      this.hotelList.forEach(hotel => {
        hotel.currency = newCurrency;
        hotel.price = priceList.filter(price => price.id == hotel.id)[0].price;
      });
    });
  }

  sortHotelResults(){
    //TO DO
  }

}
