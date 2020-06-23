import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  categories = ['DH SKI', 'DH BOOT', 'XC SKI', 'XC SHOE', 'SKI POLE', 'SKI MISC', 'SNOWBOARD',
  'SNOWBOARD BOOT', 'SNOWBOARD MISC', 'FIGURE SKATES', 'HOCKEY SKATES',
  'HOCKEY MISC', 'ROLLER SKATES/BLADES', 'HELMETS', 'CAMPING', 'BIKING',
  'GOLF', 'BASEBALL', 'LACROSSE', 'SOCCER', 'EXERCISE EQUIPMENT',
  'CLOTHING', 'GLOVES', 'SHOES', 'MISC'];

  item = this.checkInService.getItem();
  seller = this.checkInService.getSeller();

  selectItemCode(code, name) {
    this.item.itemCode = code;
    this.item.category = name;
  }

  onItemSubmit() {
    this.checkInService.addItem(this.item);
    this.item = new Item(undefined, undefined, undefined, '', undefined, undefined, false);
  }

  scanBarcode() {
    console.log("Take picture of barcode");
    const modalRef = this.modalService.open(BarcodeScannerComponent);

    modalRef.result.then((barcode) => {
      this.item.barcode = barcode;
    }, (reject) => {

    }); 
  }
}
