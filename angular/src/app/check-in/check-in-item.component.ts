import { Component } from '@angular/core';
import { Item } from './check-in-dtos';

@Component({
  selector: 'app-check-in-item',
  templateUrl: './check-in-item.component.html',
  styleUrls: ['./check-in-item.component.scss']
})
export class CheckInItemComponent {

  constructor() { }

  categories = ['Baseball', 'Boots', 'Football','Soccer', 'Golf', 'Hockey',
   'Wrestling', 'Clothing', 'Skiing', 'Snowboarding', 'Other'];

  item = new Item('', undefined, '', '', undefined, 0, false);
  itemList: Item[] = [];

  onItemSubmit() {
  	console.log(this.item);
  	this.itemList.push(this.item);
  	this.item = new Item('', undefined, '', '', undefined, 0, false);
  }

  scanBarcode() {
  	console.log("Take picture of barcode");
  }
}
