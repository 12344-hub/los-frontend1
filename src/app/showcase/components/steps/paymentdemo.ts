import {Component,OnInit} from '@angular/core';
import { TicketService } from './ticketservice';
import { Router } from '@angular/router';


@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Employer Information
                </ng-template>
                <ng-template pTemplate="subtitle">
                    Enter your employment details
                </ng-template>
                <ng-template pTemplate="content">
                  <div class="p-fluid">
                     <div class="p-field">
                         <label for="employer">Employer Name</label>
                         <input #employer="ngModel" id="employer" type="text" required pInputText [(ngModel)]="paymentInformation.employerName" [ngClass]="{'ng-dirty': (employer.invalid && submitted) || (employer.dirty && employer.invalid)}">
                         <small *ngIf="(employer.invalid && submitted) || (employer.dirty && employer.invalid)" class="p-error">Employer Name is required.</small>
                     </div>
                     <div class="p-field">
                         <label for="position">Position/Title</label>
                         <input #position="ngModel" id="position" type="text" required pInputText [(ngModel)]="paymentInformation.positionTitle" [ngClass]="{'ng-dirty': (position.invalid && submitted) || (position.dirty && position.invalid)}">
                         <small *ngIf="(position.invalid && submitted) || (position.dirty && position.invalid)" class="p-error">Position or Title description is required.</small>
                     </div>

                     <div class="p-field">
                           <label for="monthlyIncome">Monthly Take-Home</label>
                           <p-inputNumber #monthlyIncome="ngModel" id="monthlyIncome" [(ngModel)]="paymentInformation.monthlyIncome" required [ngClass]="{'ng-dirty': (monthlyIncome.invalid && submitted) || (monthlyIncome.dirty && monthlyIncome.invalid)}" mode="currency" currency="USD" locale="en-US"></p-inputNumber>
                          <small *ngIf="(monthlyIncome.invalid && submitted) || (monthlyIncome.dirty && monthlyIncome.invalid)" class="p-error">Monthly Take-Home is required.</small>
                     </div>

                     <div class="p-field">
                           <label for="startDate">Start Date</label>
                          <input required #startDate="ngModel" id="startDate" [(ngModel)]="paymentInformation.startDate" [ngClass]="{'ng-dirty': (startDate.invalid && submitted) || (startDate.dirty && startDate.invalid)}" type='date' min='1960-01' pInputText inputId="startDate">
                          <small *ngIf="(startDate.invalid && submitted) || (startDate.dirty && startDate.invalid)" class="p-error">Start Date is required.</small>
                     </div>

                     <div class="p-field">
                        <label for="rentOrOwn">Full-time or Part-Time</label>
                        <select id="fullPartTime" required #fullPartTime="ngModel" [(ngModel)]="paymentInformation.fullPartTime" required pInputText>
                                  <option value="Full-Time">Full-Time</option>
                                  <option value="Part-Time">Part-Time</option>
                         </select>
                     </div>

                  </div>

                 </ng-template>
                <ng-template pTemplate="footer">
                    <div class="p-grid p-nogutter p-justify-between">
                        <p-button label="Back" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Next" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    `,
})
export class PaymentDemo implements OnInit {

    paymentInformation: any;

    constructor(public ticketService: TicketService, private router: Router) { }

    ngOnInit() {
        this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
    }

    nextPage() {
        this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
        this.router.navigate(['steps/confirmation']);
    }

    prevPage() {
        this.router.navigate(['steps/seat']);
    }
}
