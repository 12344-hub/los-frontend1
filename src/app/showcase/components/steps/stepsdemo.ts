import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { TicketService } from './ticketservice';
import { Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
    templateUrl: './stepsdemo.html',
    styleUrls: ['stepsdemo.scss'],
    providers: [MessageService]
})
export class StepsDemo implements OnInit {


    items: MenuItem[];

    subscription: Subscription;

    constructor(public messageService: MessageService,  public ticketService: TicketService,
      private http: HttpClient) {

    }

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

            this.messageService.add({severity:'success', summary:'Registration Complete', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your Loan Origination Number ' + personalInformation.id});
        });
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
