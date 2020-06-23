import { Component, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent {

 @ViewChild('scanner', { static: false })

barcodeValue: number = 0;
  constructor(public activeModal: NgbActiveModal,) { }

    dispatchScanSuccess(barcodeValue) {
    	this.activeModal.close(barcodeValue);
    }

    camerasFoundHandler(event) {
    	//Need to test with IOS
    }
}
