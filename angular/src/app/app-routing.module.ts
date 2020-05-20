import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckInSellerComponent } from './check-in/check-in-seller.component';
import { CheckInItemComponent } from './check-in/check-in-item.component';
import { CheckInFinalizeComponent } from './check-in/check-in-finalize.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CashOutComponent } from './cash-out/cash-out.component';



const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	// { path: 'check-in', component: CheckInComponent },
	{
    path: 'check-in',
    component: CheckInComponent,
    children: [
      {path: '', redirectTo: 'check-in-seller', pathMatch: 'full'},
      {path: 'check-in-seller', component: CheckInSellerComponent},
      {path: 'check-in-item', component: CheckInItemComponent },
      {path: 'check-in-finalize', component: CheckInFinalizeComponent },
    ]
  },
	// { path: 'check-in-seller', component: CheckInSellerComponent },
	// { path: 'check-in-item', component: CheckInItemComponent },
	// { path: 'check-in-finalize', component: CheckInFinalizeComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{ path: 'cash-out', component: CashOutComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }
