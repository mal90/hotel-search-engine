import { Component, OnInit } from '@angular/core';
import { HotelSearchService } from '../shared/hotel-list.service';
import { Hotel, Price } from '../shared/hotel-list.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotelDescriptionModalComponent } from './hotel-description-modal/hotel-description-modal.component';



@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotelList: Hotel[] = [];
  maxRate: number = 10; // max rating of the hotel is set to default value of = 10
  isRatingReadonly: boolean = true; // max rating is bydefault readonly
  currencyTypes: string[] = ["USD", "SGD", "CNY", "KRW"];//Currency type initialization
  localeTypes: string[] = ["en", "zh" , "ja"];
  selectedCurrency: string;
  selectedLocale: string = "en";


  constructor(private hotelSearchService: HotelSearchService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal) { }

  ngOnInit() {
    //this.initializeHotels(); // No need to call this method now.
    this.getCurrency();
    this.changeHotelLocale(this.getLocale());
  }

  initializeHotels(){
    /**
     * savedCurrency is last selected currency
     * if savedCurrency cannot be found , use USD as default currency
     */
    let savedCurrency = localStorage.getItem('currency');
    this.selectedCurrency = savedCurrency ? savedCurrency : this.currencyTypes[0];
    let currentHotel = "tokyo";

    /**
     * retrive hotel list form hotelSearchService by currentHotel
     * and save in the hotelList global variable
     */
    this.hotelSearchService.getHotel(currentHotel).subscribe(hotelList => {
      this.hotelList = hotelList;
      this.changeCurrency(this.selectedCurrency);
      },
      error => {
          console.log("Error occurred while retrieving results of hotels")
      }
    );
  }

  getCurrency(){
    let savedCurrency = localStorage.getItem('currency');
    this.selectedCurrency = savedCurrency ? savedCurrency : this.currencyTypes[0];
  }

  getLocale(){
    let savedLocale = localStorage.getItem('locale');
    this.selectedLocale = savedLocale ? savedLocale : this.localeTypes[0];
    return this.selectedLocale;
  }

  changeCurrency(newCurrency: string) {
    /**
     * When user change currency type , get the price list of the currency
     * Refresh results will be called everytime user change the currency type
     */
    this.spinner.show();
    localStorage.setItem("currency",newCurrency)
    this.selectedCurrency = newCurrency;
    this.hotelSearchService.getPriceByCurrency(newCurrency).subscribe(priceList => {
      this.refreshResults(priceList, newCurrency);
      this.spinner.hide();
    },
    error => {
        console.log("Error occurred while retrieving results of prices")
    });
  }

  refreshResults(priceList:Price[], newCurrency:string) {
    /**
     * Create 2 temporary arrays hotelWithPrice , hotelWithoutPrice.
     * loop through hotelList and match the id in the hotel object
     * and the price object.
     * If price found with the matching ids , assign that price
     * and currency type and push it to the hotelWithPrice array.
     * If not assign to the hotelWithoutPrice array.
     */
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

  sortHotelResults(hotelWithPrice:Hotel[],hotelWithoutPrice:Hotel[]){
    /**
     * Add withPrice , withoutPrice arrays to the main hotelList array
     * after emptying it.
     */
    this.hotelList = []
    this.hotelList.push(...hotelWithPrice, ...hotelWithoutPrice);
  }

  roundPrice(currency:string,price:number){
    /**
     * Round the price to nearest 10 if the currency is USD , SGD  or CNY
     * If not round it to nearest 100 dollers
     */
    if(currency === 'USD' || currency === 'SGD' || currency === 'CNY'){
      return Math.round(price);
    }
    else{
      return Math.round(price/100) * 100 ;
    }
  }

  showMoreDescription(decription){
    /**
     * Use hotel-description modal component to show more description
     */
    const modalRef = this.modalService.open(HotelDescriptionModalComponent);
    modalRef.componentInstance.decription = decription;
  }

  changeHotelLocale(newLocale){
    /**
     * This method will fetch the hotel information according
     * to the language/locale selected by the user
     */

    localStorage.setItem("locale",newLocale);
    this.selectedLocale = newLocale;
    this.hotelSearchService.getHotelsByLocale(newLocale).subscribe(hotelList => {
      this.hotelList = hotelList;
      this.changeCurrency(this.selectedCurrency);
      console.log(hotelList);
    },
    error => {
        console.log("Error occurred while retrieving hotels by locale")
    });
  }

}
