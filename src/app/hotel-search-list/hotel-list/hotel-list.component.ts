import { Component, OnInit } from '@angular/core';
import { HotelSearchService } from '../shared/hotel-list.service';
import { Hotel, Price } from '../shared/hotel-list.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotelList: Hotel[] = [];
  maxRate: number = 10; // max rating of the hotel is set to default value of = 10
  isRatingReadonly: boolean = true; // max rating is bydefault readonly
  currencyTypes: string[] = ["USD", "SGD", "CNY", "KRW"];
  selectedCurrency: string;


  constructor(private hotelSearchService: HotelSearchService) { }

  ngOnInit() {
    let savedCurrency = localStorage.getItem('currency');
    this.selectedCurrency = savedCurrency ? savedCurrency : this.currencyTypes[0];
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
      this.refreshResults(priceList, newCurrency);
    });
  }

  refreshResults(priceList:Price[], newCurrency:string) {
    let hotelWithPrice : Hotel[] = [];
    let hotelWithoutPrice : Hotel[] = [];
    this.hotelList.forEach(hotel => {
      hotel.currency = newCurrency;
      let matchedPriceObj = priceList.filter(price => price.id == hotel.id)[0];
      if (matchedPriceObj) {
        hotel.price = this.roundPrice(newCurrency , matchedPriceObj.price);
        hotel.currency = newCurrency;
        hotelWithPrice.push(hotel);
      }
      else {
        hotel.price = undefined;
        hotel.currency = undefined;
        hotelWithoutPrice.push(hotel);
      }
    });

    this.sortHotelResults(hotelWithPrice,hotelWithoutPrice);
  }

  sortHotelResults(hotelWithPrice,hotelWithoutPrice){
    this.hotelList = []
    this.hotelList.push(...hotelWithPrice, ...hotelWithoutPrice);
  }

  roundPrice(currency:string,price:number){
    if(currency === 'USD' || currency === 'SGD' || currency === 'CNY'){
      return Math.round(price);
    }
    else{
      return Math.round(price/100) * 100 ;
    }
  }

}
