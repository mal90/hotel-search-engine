import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HotelSearchListModule } from './hotel-search-list/hotel-search-list.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HotelSearchListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
