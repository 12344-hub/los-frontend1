import {Component,OnInit} from '@angular/core';
import { TicketService2 } from './ticketservice2';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService, Registration } from './data.service'

@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Loan Application
                </ng-template>
                <ng-template pTemplate="subtitle">
                    Enter Loan Registration and Risk System Number
                </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid">
                       <div class="p-field">
                          <label for="key1">Registration Number</label>
                            <input  #key1="ngModel" id="key1" type="text" required pInputText [(ngModel)]="personalInformation.id" [ngClass]="{'ng-dirty': (key1.invalid && submitted) || (key1.dirty && key1.invalid)}">

                          <small *ngIf="(key1.invalid && submitted) || (key1.dirty && key1.invalid)" class="p-error">Enter your Registration Number</small>
                        </div>

                        <div class="p-field">
                           <label for="key2">Risk Identification Number</label>
                             <p-inputMask  #key2="ngModel" id="key2" mask="999999999" required pInputText [(ngModel)]="personalInformation.riskId" [ngClass]="{'ng-dirty': (key2.invalid && submitted) || (key2.dirty && key2.invalid)}">
                             </p-inputMask>
                           <small *ngIf="(key2.invalid && submitted) || (key2.dirty && key2.invalid)" class="p-error">Enter your Risk Identification Number</small>
                         </div>


                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="p-grid p-nogutter p-justify-end">
                        <p-button label="Next" (onClick)="nextPage()" icon="pi pi-angle-right" iconPos="right"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    `,
})



export class PersonalDemo2 implements OnInit {
    personalInformation: any;
    submitted: boolean = false;
    reg:Registration;
    reg1:Registration;

    constructor(private dataService: DataService, public ticketService: TicketService2, private router: Router) {
    }

    ngOnInit() {

        this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    }

    nextPage() {
      if (this.personalInformation.id && this.personalInformation.riskId )
      {

            this.dataService.getReg(this.personalInformation.id).subscribe(reg => {
                    this.reg = reg;
                  });
                  this.dataService.getReg(0).subscribe(reg1 => {
                          this.reg1 = reg1;
                        });
           this.ticketService.getTicketInformation().personalInformation.firstname = this.reg.firstname;
           this.ticketService.getTicketInformation().personalInformation.id = this.reg.id;
           this.ticketService.getTicketInformation().personalInformation.mi = this.reg.mi;
           this.ticketService.getTicketInformation().personalInformation.lastname = this.reg.lastname;
           this.ticketService.getTicketInformation().personalInformation.dob = this.reg.dob;
           this.ticketService.getTicketInformation().personalInformation.gender = this.reg.gender;
           this.ticketService.getTicketInformation().personalInformation.maritalStatus = this.reg.maritalStatus;
           this.ticketService.getTicketInformation().personalInformation.mobilePhone = this.reg.mobilePhone;
           this.ticketService.getTicketInformation().personalInformation.email =  this.reg.email;
           this.ticketService.getTicketInformation().personalInformation.contactMethod = this.reg.contactMethod;
           this.ticketService.getTicketInformation().personalInformation.preferredLanguage = this.reg.preferredLanguage;
           this.ticketService.getTicketInformation().personalInformation.ssn = this.reg.ssn;
           this.ticketService.getTicketInformation().personalInformation.driverLicenseState = this.reg.driverLicenseState;
           this.ticketService.getTicketInformation().personalInformation.driverLicenseNumber = this.reg.driverLicenseNumber;
           this.ticketService.getTicketInformation().seatInformation.address1 = this.reg.address1;
           this.ticketService.getTicketInformation().seatInformation.address2 = this.reg.address2;
           this.ticketService.getTicketInformation().seatInformation.city = this.reg.city;
           this.ticketService.getTicketInformation().seatInformation.state = this.reg.state;
           this.ticketService.getTicketInformation().seatInformation.zipCode = this.reg.zipCode;
           this.ticketService.getTicketInformation().seatInformation.monthlyPayment = this.reg.monthlyPayment;
           this.ticketService.getTicketInformation().seatInformation.movedWhen = this.reg.movedWhen;
           this.ticketService.getTicketInformation().seatInformation.rentOrOwn = this.reg.rentOrOwn;
           this.ticketService.getTicketInformation().paymentInformation.employerName =  this.reg.employerName;
           this.ticketService.getTicketInformation().paymentInformation.positionTitle = this.reg.positionTitle;
           this.ticketService.getTicketInformation().paymentInformation.monthlyIncome = this.reg.monthlyIncome;
           this.ticketService.getTicketInformation().paymentInformation.startDate = this.reg.startDate;
           this.ticketService.getTicketInformation().paymentInformation.fullPartTime = this.reg.fullPartTime;
            this.ticketService.getTicketInformation().personalInformation.riskindex = this.reg1.monthlyIncome;
           this.router.navigate(['steps2/confirmation']);
           return;
        }

          this.submitted = true;
    }
}
