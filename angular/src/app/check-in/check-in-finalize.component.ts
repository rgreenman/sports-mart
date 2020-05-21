import { Component } from '@angular/core';
import { Seller, Item } from './check-in-dtos';
import { CheckInService } from './check-in.service';

@Component({
  selector: 'app-check-in-finalize',
  templateUrl: './check-in-finalize.component.html',
  styleUrls: ['./check-in-finalize.component.scss']
})
export class CheckInFinalizeComponent {

  constructor(private checkinService: CheckInService) { }

  seller: Seller;
  itemList: Item[];

  ngOnInit() {
  	this.seller = this.checkinService.getSeller();
	this.itemList = this.checkinService.getItems();
  }
}
