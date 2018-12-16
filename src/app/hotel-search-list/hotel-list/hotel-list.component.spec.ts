import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule, NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HotelShortDescription } from '../shared/hotel-short-description.pipe';
import { HotelSearchService } from '../shared/hotel-list.service';
import { FormsModule } from '@angular/forms';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelShortDescription, HotelListComponent],
      imports: [
        CommonModule,
        FormsModule,
        NgbRatingModule,
        NgbDropdownModule,
        NgbModalModule,
        NgxSpinnerModule,
        HttpClientTestingModule
      ],
      providers: [
        HotelSearchService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
