import { Component } from '@angular/core';
import { Seller } from './check-in-dtos';

@Component({
  selector: 'app-check-in-seller',
  templateUrl: './check-in-seller.component.html',
  styleUrls: ['./check-in-seller.component.scss']
})
export class CheckInSellerComponent {

  constructor() { }

  seller = new Seller('', '', '', '', '', '');

  onSellerSubmit() {
  	console.log(this.seller);
  }
}
