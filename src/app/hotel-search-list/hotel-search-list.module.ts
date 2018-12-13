import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule , NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortDescription } from '../hotel-search-list/shared/short-description.pipe';
import { HotelSearchService } from '../hotel-search-list/shared/hotel-search-list.service';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';


@NgModule({
  declarations: [ShortDescription, HotelListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbRatingModule,
    NgbDropdownModule
  ],
  exports : [
    HotelListComponent,
    ShortDescription
  ],
  providers : [
    HotelSearchService
  ]
})
export class HotelSearchListModule { }
