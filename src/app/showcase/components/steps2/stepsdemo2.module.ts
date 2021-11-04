import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo2} from './stepsdemo2';
import { StepsDemoRoutingModule2 } from './stepsdemo-routing2.module';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SeatDemo2 } from './seatdemo2';
import { ConfirmationDemo2 } from './confirmationdemo2';
import { PersonalDemo2 } from './personaldemo2';
import { PaymentDemo2 } from './paymentdemo2';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService2 } from './ticketservice2';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        StepsDemoRoutingModule2,
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
        InputNumberModule,
        FieldsetModule,
        PanelModule
    ],
	declarations: [
    StepsDemo2,
		SeatDemo2,
		ConfirmationDemo2,
		PersonalDemo2,
		PaymentDemo2
	],
	providers: [
		TicketService2
	]
})

export class StepsDemoModule2 {}
