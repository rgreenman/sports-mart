import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Seller } from './check-in-dtos';
import { CheckInService } from './check-in.service';

@Component({
  selector: 'app-check-in-seller',
  templateUrl: './check-in-seller.component.html',
  styleUrls: ['./check-in-seller.component.scss']
})
export class CheckInSellerComponent {

  constructor(private checkInService: CheckInService,
  	private router: Router, private route: ActivatedRoute) { }

  seller = this.checkInService.getSeller();

  onSellerSubmit() {
  	this.checkInService.setSeller(this.seller);
  	this.router.navigate(['../check-in-item'], { relativeTo: this.route });
  }
}
