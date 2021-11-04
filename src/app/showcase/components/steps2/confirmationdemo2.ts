import {Component,OnInit} from '@angular/core';
import { TicketService2 } from './ticketservice2';
import { Router } from '@angular/router';
import { DataService, Registration } from './data.service';

@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Apply for Loan
                </ng-template>
                <ng-template pTemplate="subtitle">
                    Loan Confirmation
                </ng-template>

                <ng-template pTemplate="content">
                <p-panel header="Personal Details">
                    <div class="p-fluid p-formgrid p-grid">
                            <div class="p-field p-col-12 p-md-6">
                                <label for="firstname">Firstname</label>
                                <input #firstname="ngModel" id="firstname" [(ngModel)]="personalInformation.firstname" type="text" readonly pInputText>
                            </div>
                            <div class="p-field p-col-12 p-md-6">
                                <label for="mi">MI</label>
                                <input #mi="ngModel" id="mi" type="text" [(ngModel)]="personalInformation.mi" readonly pInputText>
                            </div>
                            <div class="p-field p-col-12 p-md-6">
                                <label for="lastname">Lastname</label>
                                <input #lastname="ngModel" id="lastname" [(ngModel)]="personalInformation.lastname" type="text" readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="dob">Date of Birth</label>
                                <input #dob="ngModel" id="dob" [(ngModel)]="personalInformation.dob" type="text" dateFormat="MM/DD/YYY" readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="mobilePhone">Mobile</label>
                                <input #mobilePhone="ngModel" id="mobilePhone" [(ngModel)]="personalInformation.mobilePhone" type="text"  readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="email">Email</label>
                                <input #email="ngModel" id="email" [(ngModel)]="personalInformation.email" type="text"  readonly pInputText>
                            </div>


                            <div class="p-field p-col-12 p-md-6">
                                <label for="preferredComm">Preferred Communication</label>
                                <input #preferredComm="ngModel" id="preferredComm" [(ngModel)]="personalInformation.contactMethod" type="text"  readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="preferredLang">Preferred Language</label>
                                <input #preferredLang="ngModel" id="preferredLang" [(ngModel)]="personalInformation.preferredLanguage" type="text"  readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="driverLicenseState">Driver License State</label>
                                <input #driverLicenseState="ngModel" id="driverLicenseState" [(ngModel)]="personalInformation.driverLicenseState" type="text"  readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="driverLicenseNumber">Driver License Number</label>
                                <input #driverLicenseNumber="ngModel" id="driverLicenseNumber" [(ngModel)]="personalInformation.driverLicenseNumber" type="text"  readonly pInputText>
                            </div>

                            <div class="p-field p-col-12 p-md-6">
                                <label for="riskIndex">Computed Risk riskIndex</label>
                                <input #riskIndex="ngModel" id="riskIndex" [(ngModel)]="personalInformation.riskindex" type="text"  readonly pInputText>
                            </div>
                          </div>

                      </p-panel>

                      <p-panel header="Enter Loan Details">
                          <div class="p-fluid p-formgrid p-grid">
                              <div class="p-field">
                                    <label for="loanAmount">Loan Amount Requested</label>
                                    <p-inputNumber #loanAmount="ngModel" id="loanAmount" [(ngModel)]="personalInformation.loanAmount" required [ngClass]="{'ng-dirty': (loanAmount.invalid && submitted) || (loanAmount.dirty && loanAmount.invalid)}" mode="currency" currency="USD" locale="en-US"></p-inputNumber>
                                   <small *ngIf="(loanAmount.invalid && submitted) || (loanAmount.dirty && loanAmount.invalid)" class="p-error">Loan Amount is required.</small>
                              </div>

                              <div class="p-field">
                                  <label for="dateRequired">Loan Required Date</label>
                                  <input type='date'  required #dateRequired="ngModel" [(ngModel)]="personalInformation.dateRequired" min="2021-01-01" max="20005-12-31" [ngClass]="{'ng-dirty': (dateRequired.invalid && submitted) || (dateRequired.dirty && dateRequired.invalid)}" pInputText>
                                  <small class="p-error" *ngIf="(dateRequired.invalid && submitted )|| (dateRequired.dirty && dateRequired.invalid)">Loan Required Date</small>
                              </div>

                          </div>
                      </p-panel>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="p-grid p-nogutter p-justify-between">
                        <p-button label="Back" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Complete" (onClick)="complete()" icon="pi pi-angle-right" iconPos="right" styleClass="p-button-success"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
    `,
})
export class ConfirmationDemo2 implements OnInit {

    ticketInformation: any;
    paymentInformation: any;
    seatInformation: any;
    personalInformation: any;
    submitted: boolean = false;

    constructor(private dataService: DataService, public ticketService: TicketService2, private router: Router) { }

    ngOnInit() {
        this.ticketInformation = this.ticketService.ticketInformation;
        this.paymentInformation = this.ticketInformation.paymentInformation;
        this.personalInformation = this.ticketInformation.personalInformation;
        this.seatInformation = this.ticketInformation.seatInformation;
    }

    complete() {

      if (this.personalInformation.dateRequired && this.personalInformation.loanAmount)
      {
        let x = Math.floor(Math.random() * 10);
        if (x > 5)
        {
          this.personalInformation.loanapprovedflag = "Denied";
        }
        else
        {
          this.personalInformation.loanapprovedflag = "Approved";
        }
        let reg = new Registration();

        reg.id = this.personalInformation.id;
        reg.firstname = this.personalInformation.firstname;
        reg.mi = this.personalInformation.mi,
        reg.lastname = this.personalInformation.lastname,
        reg.dob = this.personalInformation.dob,
        reg.gender = this.personalInformation.gender,
        reg.maritalStatus = this.personalInformation.maritalStatus,
        reg.mobilePhone = this.personalInformation.mobilePhone,
        reg.email = this.personalInformation.email,
        reg.contactMethod = this.personalInformation.contactMethod,
        reg.preferredLanguage = this.personalInformation.preferredLanguage,
        reg.ssn = this.personalInformation.ssn,
        reg.driverLicenseState = this.personalInformation.driverLicenseState,
        reg.driverLicenseNumber = this.personalInformation.driverLicenseNumber,
        reg.address1 = this.seatInformation.address1,
        reg.address2 = this.seatInformation.address2,
        reg.city = this.seatInformation.city,
        reg.state = this.seatInformation.state,
        reg.zipCode = this.seatInformation.zipCode,
        reg.monthlyPayment = this.seatInformation.monthlyPayment,
        reg.movedWhen = this.seatInformation.movedWhen,
        reg.rentOrOwn = this.seatInformation.rentOrOwn,
        reg.employerName = this.paymentInformation.employerName,
        reg.positionTitle = this.paymentInformation.positionTitle,
        reg.monthlyIncome = this.paymentInformation.monthlyIncome,
        reg.startDate = this.paymentInformation.startDate,
        reg.fullPartTime = this.paymentInformation.fullPartTime
        this.ticketService.complete();
      }
      this.submitted = true;
    }

    prevPage() {
        this.router.navigate(['steps2/personal']);
    }
}
