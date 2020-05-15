import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CashOutComponent } from './cash-out/cash-out.component';



const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'check-in', component: CheckInComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{ path: 'cash-out', component: CashOutComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }
