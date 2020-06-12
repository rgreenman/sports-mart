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

  selectItemCode(code) {
    console.log('Hit');
    this.item.itemCode = code;
    console.log(this.item.itemCode);
  }

  //getItemCode(){
    //return this.item.itemCode;
  //}

  onItemSubmit() {
    this.checkInService.addItem(this.item);
    this.item = new Item('', undefined, undefined, '', undefined, undefined, false);
  }



  scanBarcode() {
    console.log("Take picture of barcode");
    const modalRef = this.modalService.open(BarcodeScannerComponent);

    modalRef.result.then((barcode) => {
      this.item.barcode = barcode;
    }, (reject) => {

    }); 
  }
  /*
  Cannot get this to work. Trying to make the click input into the description.
  Check first row in table on HTML
  Inserting that call makes the website time out
  */
  //@Output() descript = new EventEmitter();

  //onDescript() {
      //window.alert('Button selected correctly -- #FIXME push this info into the description box');
  //}
}
