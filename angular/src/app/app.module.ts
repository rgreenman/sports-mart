import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckoutComponent } from './checkout/checkout.component';

import { CashOutComponent } from './cash-out/cash-out.component';

import { CheckInComponent } from './check-in/check-in.component';
import { CheckInSellerComponent } from './check-in/check-in-seller.component';
import { CheckInItemComponent } from './check-in/check-in-item.component';
import { CheckInFinalizeComponent } from './check-in/check-in-finalize.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BarcodeScannerComponent } from './dialog/barcode-scanner/barcode-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CashOutComponent,
    CheckInComponent,
    CheckInSellerComponent,
    CheckInItemComponent,
    CheckInFinalizeComponent,
    DashboardComponent,
    BarcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ZXingScannerModule
  ],
  entryComponents: [
    BarcodeScannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
