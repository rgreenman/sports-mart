import { Component, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent {

@ViewChild(ZXingScannerModule)
barecodeScanner: ZXingScannerModule;

barcodeValue: number = 0;
  constructor(public activeModal: NgbActiveModal,) { }

    dispatchScanSuccess(barcodeValue) {
    	this.activeModal.close(barcodeValue);
    }
}
