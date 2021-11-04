import {Component,OnInit} from '@angular/core';
import { TicketService1 } from './ticketservice1';
import { Router } from '@angular/router';


@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Confirmation
                </ng-template>
                <ng-template pTemplate="subtitle">
                    Registration Details
                </ng-template>
                <ng-template pTemplate="content">
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
                            <label for="ssn">Social Security Number</label>
                            <input #ssn="ngModel" id="ssn" [(ngModel)]="personalInformation.ssn" type="text"  readonly pInputText>
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
                            <label for="gender">Gender</label>
                            <input #gender="ngModel" id="gender" [(ngModel)]="personalInformation.gender" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="maritalStatus">Martial Status</label>
                            <input #maritalStatus="ngModel" id="maritalStatus" [(ngModel)]="personalInformation.maritalStatus" type="text"  readonly pInputText>
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
                            <label for="address1">Address Line 1</label>
                            <input #address1="ngModel" id="address1" [(ngModel)]="seatInformation.address1" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="address2">Address Line 2</label>
                            <input #address2="ngModel" id="address2" [(ngModel)]="seatInformation.address2" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="city">City</label>
                            <input #city="ngModel" id="city" [(ngModel)]="seatInformation.city" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="state">State</label>
                            <input #state="ngModel" id="state" [(ngModel)]="seatInformation.state" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="zipCode">Zip Code</label>
                            <input #zipCode="ngModel" id="zipCode" [(ngModel)]="seatInformation.zipCode" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="monthlyPayment">Monthly Payment</label>
                            <input #monthlyPayment="ngModel" id="monthlyPayment" [(ngModel)]="seatInformation.monthlyPayment" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="moveinDate">Move-in Date</label>
                            <input #moveinDate="ngModel" id="moveinDate" [(ngModel)]="seatInformation.movedWhen" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="rentOrOwn">Rent or Own</label>
                            <input #rentOrOwn="ngModel" id="rentOrOwn" [(ngModel)]="seatInformation.rentOrOwn" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="employer">Employer Name</label>
                            <input #employer="ngModel" id="employer" [(ngModel)]="paymentInformation.employerName" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="title">Position/Title</label>
                            <input #title="ngModel" id="title" [(ngModel)]="paymentInformation.positionTitle" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="monthly">Monthly Take-Home</label>
                            <input #monthly="ngModel" id="monthly" [(ngModel)]="paymentInformation.monthlyIncome" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="startDate">Employement Start Date</label>
                            <input #startDate="ngModel" id="startDate" [(ngModel)]="paymentInformation.startDate" type="text"  readonly pInputText>
                        </div>

                        <div class="p-field p-col-12 p-md-6">
                            <label for="fulltime">Full-Time</label>
                            <input #fulltime="ngModel" id="fulltime" [(ngModel)]="paymentInformation.fullPartTime" type="text"  readonly pInputText>
                        </div>



                </div>
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
export class ConfirmationDemo1 implements OnInit {

    ticketInformation: any;

    constructor(public ticketService: TicketService1, private router: Router) { }

    ngOnInit() {
        this.ticketInformation = this.ticketService.ticketInformation;
    }

    complete() {
        this.ticketService.complete();
    }

    prevPage() {
        this.router.navigate(['steps1/payment']);
    }
}
