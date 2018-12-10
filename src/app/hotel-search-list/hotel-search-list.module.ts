import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { HotelSearchService } from './hote-search-list.service';

@NgModule({
  declarations: [HotelSearchComponent, SearchListComponent],
  imports: [
    CommonModule
  ],
  exports : [
    HotelSearchComponent,
    SearchListComponent
  ],
  providers : [
    HotelSearchService
  ]
})
export class HotelSearchListModule { }
