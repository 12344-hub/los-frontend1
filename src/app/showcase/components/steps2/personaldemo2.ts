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
                          <label for="key1">Email Address</label>
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
    reg1:any;

    constructor(private dataService: DataService, public ticketService: TicketService2, private router: Router) {
    }

    ngOnInit() {

        this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    }

    nextPage() {
      if (this.personalInformation.id && this.personalInformation.riskId )
      {

          this.dataService.getReg1(this.personalInformation.id).subscribe(reg => {
                this.reg = reg.Item;
                this.ticketService.getTicketInformation().personalInformation.riskindex = 52;
                this.ticketService.getTicketInformation().personalInformation.firstname = this.reg.firstname;
                this.ticketService.getTicketInformation().personalInformation.id = this.reg.id;
                this.ticketService.getTicketInformation().personalInformation.mi = this.reg.mi;
                this.ticketService.getTicketInformation().personalInformation.lastname = this.reg.lastname;
                this.ticketService.getTicketInformation().personalInformation.dob = this.reg.dob;
                this.ticketService.getTicketInformation().personalInformation.gender = this.reg.gender;
                this.ticketService.getTicketInformation().personalInformation.maritalStatus = this.reg.maritalstatus;
                this.ticketService.getTicketInformation().personalInformation.mobilePhone = this.reg.mobilephone;
                this.ticketService.getTicketInformation().personalInformation.email =  this.reg.email;
                this.ticketService.getTicketInformation().personalInformation.contactMethod = this.reg.contactmethod;
                this.ticketService.getTicketInformation().personalInformation.preferredLanguage = this.reg.preferredlanguage;
                this.ticketService.getTicketInformation().personalInformation.ssn = this.reg.ssn;
                this.ticketService.getTicketInformation().personalInformation.driverLicenseState = this.reg.driverlicensestate;
                this.ticketService.getTicketInformation().personalInformation.driverLicenseNumber = this.reg.driverlicensenumber;
                this.ticketService.getTicketInformation().personalInformation.riskId = this.personalInformation.riskId;
                this.router.navigate(['steps2/confirmation']);

              });

             this.submitted = true;
             return;

           }

        }



}
