import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { StepsDemo1 } from './stepsdemo1';
import { ConfirmationDemo1 } from './confirmationdemo1';
import { SeatDemo1 } from './seatdemo1';
import { PaymentDemo1 } from './paymentdemo1';
import { PersonalDemo1} from './personaldemo1';


@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: StepsDemo1, children:[
				{path:'', redirectTo: 'personal', pathMatch: 'full'},
				{path: 'personal', component: PersonalDemo1},
				{path: 'confirmation', component: ConfirmationDemo1},
				{path: 'seat', component: SeatDemo1},
				{path: 'payment', component: PaymentDemo1}
			]}
		])
	],
	exports: [
		RouterModule
	]
})
export class StepsDemoRoutingModule1 {}
