import {Component,OnInit} from '@angular/core';
import { TicketService1 } from './ticketservice1';
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
                        <div class="p-field p-grid">
                            <label for="firstname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Employer Name</label>
                            <div class="p-col-12 p-md-10">
                                <input id="firstname" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="firstname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Position/Title</label>
                            <div class="p-col-12 p-md-10">
                                <input id="firstname" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="monthlyPayment" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Monthly Take-Home</label>
                            <div class="p-col-12 p-md-10">
                                <p-inputNumber [(ngModel)]="value2" mode="currency" currency="USD" locale="en-US"></p-inputNumber>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="dob" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Start Date</label>
                            <p-calendar id="dob" [(ngModel)]="dob" [showIcon]="true" monthNavigator="true" yearNavigator = "true" yearRange="1920:2015" dateFormat="mm/dd/yy" inputId="dob"></p-calendar>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Full-Time Or Part-Time</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="male" value="Male" [(ngModel)]="gender" inputId="male"></p-radioButton>
                                <label for="male">Full-Time</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="female" value="Female" [(ngModel)]="gender" inputId="female"></p-radioButton>
                                <label for="female">Part-Time</label>
                            </div>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Less than 3 Years</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="married" value="Married" [(ngModel)]="maritalStatus" inputId="married"></p-radioButton>
                                <label for="married">Yes</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="single" value="Single" [(ngModel)]="maritalStatus" inputId="single"></p-radioButton>
                                <label for="single">No</label>
                            </div>
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
export class PaymentDemo1 implements OnInit {

    paymentInformation: any;

    constructor(public ticketService: TicketService1, private router: Router) { }

    ngOnInit() {
        this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
    }

    nextPage() {
        this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
        this.router.navigate(['steps1/confirmation']);
    }

    prevPage() {
        this.router.navigate(['steps1/seat']);
    }
}
