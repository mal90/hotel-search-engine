import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [HotelSearchComponent, SearchListComponent],
  imports: [
    CommonModule
  ],
  exports : [
    HotelSearchComponent,
    SearchListComponent
  ]
})
export class HotelSearchListModule { }
