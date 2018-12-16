import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDescriptionModalComponent } from './hotel-search-list/hotel-list/hotel-description-modal/hotel-description-modal.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [HotelDescriptionModalComponent]
})
export class AppRoutingModule { }
