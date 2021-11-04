import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { TicketService1 } from './ticketservice1';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './stepsdemo1.html',
    styleUrls: ['stepsdemo1.scss'],
    providers: [MessageService]
})
export class StepsDemo1 implements OnInit {

    items: MenuItem[];

    subscription: Subscription;

    constructor(public messageService: MessageService, public ticketService: TicketService1) {}

    ngOnInit() {
        this.items = [{
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Address',
                routerLink: 'seat'
            },
            {
                label: 'Employer',
                routerLink: 'payment'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
        ];

        this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
            this.messageService.add({severity:'success', summary:'Registration Complete', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your Loan Origination Number is 1234.'});
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
