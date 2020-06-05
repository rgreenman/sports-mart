import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './check-in-dtos';
import { CheckInService } from './check-in.service';
import { BarcodeScannerComponent } from '../dialog/barcode-scanner/barcode-scanner.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-check-in-item',
  templateUrl: './check-in-item.component.html',
  styleUrls: ['./check-in-item.component.scss']
})
export class CheckInItemComponent {

  constructor(private checkInService: CheckInService,
    private router: Router, private route: ActivatedRoute,
    private modalService: NgbModal,) { }

  categories = ['Baseball', 'Boots', 'Football','Soccer', 'Golf', 'Hockey',
   'Wrestling', 'Clothing', 'Skiing', 'Snowboarding', 'Other'];

   item = this.checkInService.getItem();

  onItemSubmit() {
    this.checkInService.addItem(this.item);
    this.item = new Item('', undefined, '', '', undefined, undefined, false);
  }

  scanBarcode() {
  	console.log("Take picture of barcode");
    const modalRef = this.modalService.open(BarcodeScannerComponent);

    modalRef.result.then((barcode) => {

    }, (reject) => {

    }); 
  }
}
