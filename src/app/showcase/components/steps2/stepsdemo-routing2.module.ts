import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import { StepsDemo2 } from './stepsdemo2';
import { ConfirmationDemo2 } from './confirmationdemo2';
import { SeatDemo2 } from './seatdemo2';
import { PaymentDemo2 } from './paymentdemo2';
import { PersonalDemo2 } from './personaldemo2';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: StepsDemo2, children:[
				{path:'', redirectTo: 'personal', pathMatch: 'full'},
				{path: 'personal', component: PersonalDemo2},
				{path: 'confirmation', component: ConfirmationDemo2}

			]}
		])
	],
	exports: [
		RouterModule
	]
})
export class StepsDemoRoutingModule2 {}
