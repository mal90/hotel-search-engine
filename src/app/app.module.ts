import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelSearchListModule } from './hotel-search-list/hotel-search-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotelSearchListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
