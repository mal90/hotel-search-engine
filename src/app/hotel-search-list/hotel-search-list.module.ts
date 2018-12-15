import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule , NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortDescription } from '../hotel-search-list/shared/short-description.pipe';
import { HotelSearchService } from './shared/hotel-list.service';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [ShortDescription, HotelListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbRatingModule,
    NgbDropdownModule,
    NgxSpinnerModule
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
