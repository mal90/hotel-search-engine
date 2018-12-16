import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule , NgbDropdownModule , NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortDescription } from '../hotel-search-list/shared/short-description.pipe';
import { HotelSearchService } from './shared/hotel-list.service';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HotelDescriptionModalComponent } from './hotel-list/hotel-description-modal/hotel-description-modal.component';



@NgModule({
  declarations: [ShortDescription, HotelListComponent, HotelDescriptionModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbRatingModule,
    NgbDropdownModule,
    NgbModalModule,
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
