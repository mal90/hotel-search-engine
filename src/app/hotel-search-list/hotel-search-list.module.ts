import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ShortDescription } from './short-description.pipe';
import { HotelSearchService } from './hote-search-list.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HotelSearchComponent, SearchListComponent, ShortDescription],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    HotelSearchComponent,
    SearchListComponent,
    ShortDescription
  ],
  providers : [
    HotelSearchService
  ]
})
export class HotelSearchListModule { }
