import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel-description-modal',
  templateUrl: './hotel-description-modal.component.html',
  styleUrls: ['./hotel-description-modal.component.css']
})
export class HotelDescriptionModalComponent implements OnInit {
  @Input() decription;


  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.decription);
  }

}
