import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { TicketService2 } from './ticketservice2';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './stepsdemo2.html',
    styleUrls: ['stepsdemo2.scss'],
    providers: [MessageService]
})
export class StepsDemo2 implements OnInit {

    items: MenuItem[];

    subscription: Subscription;

    constructor(public messageService: MessageService, public ticketService: TicketService2) {}

    ngOnInit() {
        this.items = [{
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
        ];

        this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
            this.messageService.add({severity:'success', summary:'Loan Application Complete', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname +
            ' your Loan Application ' + personalInformation.id + ' has been ' + personalInformation.loanapprovedflag + "."});
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
