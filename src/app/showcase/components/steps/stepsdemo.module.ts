import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SeatDemo } from './seatdemo';
import { ConfirmationDemo } from './confirmationdemo';
import { PersonalDemo } from './personaldemo';
import { PaymentDemo } from './paymentdemo';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService } from './ticketservice';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        StepsDemoRoutingModule,
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
		StepsDemo,
		SeatDemo,
		ConfirmationDemo,
		PersonalDemo,
		PaymentDemo
	],
	providers: [
		TicketService
	]
})
export class StepsDemoModule {}