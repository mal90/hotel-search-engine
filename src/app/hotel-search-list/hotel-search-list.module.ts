import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { HotelSearchService } from './hote-search-list.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelSearchComponent, SearchListComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
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
