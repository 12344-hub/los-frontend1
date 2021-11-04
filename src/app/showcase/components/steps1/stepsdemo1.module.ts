import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo1} from './stepsdemo1';
import { StepsDemoRoutingModule1 } from './stepsdemo1-routing.module';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SeatDemo1 } from './seatdemo1';
import { ConfirmationDemo1 } from './confirmationdemo1';
import { PersonalDemo1 } from './personaldemo1';
import { PaymentDemo1 } from './paymentdemo1';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService1 } from './ticketservice1';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
    imports: [
        CommonModule,
        StepsDemoRoutingModule1,
        StepsModule,
        TabViewModule,
        AppCodeModule,
        AppDemoActionsModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        InputMaskModule,
        CheckboxModule,
        ToastModule,
        FormsModule,
        RadioButtonModule,
        CalendarModule,
        ListboxModule,
        InputNumberModule
    ],
	declarations: [
		StepsDemo1,
		SeatDemo1,
		ConfirmationDemo1,
		PersonalDemo1,
		PaymentDemo1
	],
	providers: [
		TicketService1
	]
})
export class StepsDemoModule1 {}
