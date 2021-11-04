import {Component,OnInit} from '@angular/core';
import { TicketService } from './ticketservice';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService, Registration } from './data.service'

@Component({
    template: `
	<div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Personal Information
                </ng-template>
                <ng-template pTemplate="subtitle">
                    Enter your personal information
                </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid">
                        <div class="p-field">
                            <label for="firstname">Firstname</label>
                            <input #firstname="ngModel" id="firstname" type="text" required pInputText [(ngModel)]="personalInformation.firstname" [ngClass]="{'ng-dirty': (firstname.invalid && submitted) || (firstname.dirty && firstname.invalid)}">
                            <small *ngIf="(firstname.invalid && submitted) || (firstname.dirty && firstname.invalid)" class="p-error">Firstname is required.</small>
                        </div>
                        <div class="p-field">
                            <label for="lastname">Middle Initial</label>
                            <input #mi="ngModel" id="mi" type="text" required pInputText [(ngModel)]="personalInformation.mi" >
                        </div>
                        <div class="p-field">
                            <label for="lastname">Lastname</label>
                            <input #lastname="ngModel" id="lastname" type="text" required pInputText [(ngModel)]="personalInformation.lastname" [ngClass]="{'ng-dirty': (lastname.invalid && submitted) || (lastname.dirty && lastname.invalid)}">
                            <small class="p-error" *ngIf="(lastname.invalid && submitted )|| (lastname.dirty && lastname.invalid)">Lastname is required.</small>
                        </div>
                        <div class="p-field">
                            <label for="dob">Date of Birth</label>
                            <input type='date'  required #dob="ngModel" [(ngModel)]="personalInformation.dob" min="1940-01-01" max="20005-12-31" [ngClass]="{'ng-dirty': (dob.invalid && submitted) || (dob.dirty && dob.invalid)}" pInputText>
                            <small class="p-error" *ngIf="(dob.invalid && submitted )|| (dob.dirty && dob.invalid)">Date of Birth is required.</small>
                        </div>
                        <div class="p-field">
                            <label for="ssn">Social Security</label>
                            <p-inputMask  #ssn="ngModel" id="ssn" required [(ngModel)]="personalInformation.ssn" mask="999-99-9999" [ngClass]="{'ng-dirty': (ssn.invalid && submitted) || (ssn.dirty && ssn.invalid)}"></p-inputMask>
                            <small class="p-error" *ngIf="(ssn.invalid && submitted )|| (ssn.dirty && ssn.invalid)">Social Security is required.</small>
                        </div>
                        <div class="p-field">
                            <label for="ssn">Mobile Number</label>
                            <p-inputMask  #mobile="ngModel" id="mobile" required [(ngModel)]="personalInformation.mobilePhone" mask="999-999-9999" [ngClass]="{'ng-dirty': (mobile.invalid && submitted) || (mobile.dirty && mobile.invalid)}"></p-inputMask>
                            <small class="p-error" *ngIf="(mobile.invalid && submitted )|| (mobile.dirty && mobile.invalid)">Mobile Number is required.</small>
                        </div>
                        <div class="p-field">
                            <label for="email">Email</label>
                            <input #email="ngModel" id="email" type="email" required pInputText [(ngModel)]="personalInformation.email" [ngClass]="{'ng-dirty': (email.invalid && submitted) || (email.dirty && email.invalid)}">
                            <small class="p-error" *ngIf="(email.invalid && submitted )|| (email.dirty && email.invalid)">Email is required.</small>
                        </div>

                        <div class="p-field">
                             <label for="licensestate">Driver License State</label>
                              <select id="licensestate" #licensestate="ngModel" [(ngModel)]="personalInformation.driverLicenseState" required pInputText>
                                            	<option value="AL">Alabama</option>
                                            	<option value="AK">Alaska</option>
                                            	<option value="AZ">Arizona</option>
                                            	<option value="AR">Arkansas</option>
                                            	<option value="CA">California</option>
                                            	<option value="CO">Colorado</option>
                                            	<option value="CT">Connecticut</option>
                                            	<option value="DE">Delaware</option>
                                            	<option value="DC">District Of Columbia</option>
                                            	<option value="FL">Florida</option>
                                            	<option value="GA">Georgia</option>
                                            	<option value="HI">Hawaii</option>
                                            	<option value="ID">Idaho</option>
                                            	<option value="IL">Illinois</option>
                                            	<option value="IN">Indiana</option>
                                            	<option value="IA">Iowa</option>
                                            	<option value="KS">Kansas</option>
                                            	<option value="KY">Kentucky</option>
                                            	<option value="LA">Louisiana</option>
                                            	<option value="ME">Maine</option>
                                            	<option value="MD">Maryland</option>
                                            	<option value="MA">Massachusetts</option>
                                            	<option value="MI">Michigan</option>
                                            	<option value="MN">Minnesota</option>
                                            	<option value="MS">Mississippi</option>
                                            	<option value="MO">Missouri</option>
                                            	<option value="MT">Montana</option>
                                            	<option value="NE">Nebraska</option>
                                            	<option value="NV">Nevada</option>
                                            	<option value="NH">New Hampshire</option>
                                            	<option value="NJ">New Jersey</option>
                                            	<option value="NM">New Mexico</option>
                                            	<option value="NY">New York</option>
                                            	<option value="NC">North Carolina</option>
                                            	<option value="ND">North Dakota</option>
                                            	<option value="OH">Ohio</option>
                                            	<option value="OK">Oklahoma</option>
                                            	<option value="OR">Oregon</option>
                                            	<option value="PA">Pennsylvania</option>
                                            	<option value="RI">Rhode Island</option>
                                            	<option value="SC">South Carolina</option>
                                            	<option value="SD">South Dakota</option>
                                            	<option value="TN">Tennessee</option>
                                            	<option value="TX">Texas</option>
                                            	<option value="UT">Utah</option>
                                            	<option value="VT">Vermont</option>
                                            	<option value="VA">Virginia</option>
                                            	<option value="WA">Washington</option>
                                            	<option value="WV">West Virginia</option>
                                            	<option value="WI">Wisconsin</option>
                                            	<option value="WY">Wyoming</option>
                                </select>
                                 <small class="p-error" *ngIf="(licensestate.invalid && submitted )|| (licensestate.dirty && licensestate.invalid)">Driver License State is required</small>   
                            </div>

                            <div class="p-field" >
                              <label for="licenseNumber">Driver License Number</label>
                                <input #licenseNumber="ngModel" id="licenseNumber" [(ngModel)]="personalInformation.driverLicenseNumber" type="text" required pInputText [ngClass]="{'ng-dirty': (licenseNumber.invalid && submitted) || (licenseNumber.dirty && licenseNumber.invalid)}">
                                <small class="p-error" *ngIf="(licenseNumber.invalid && submitted )|| (licenseNumber.dirty && licenseNumber.invalid)">License Number is required.</small>
                            </div>


                            <div class="p-field">
                               <label for="gender">Gender</label>
                               <select id="gender" required #gender="ngModel" [(ngModel)]="personalInformation.gender" required pInputText>
                                         <option value="Male">Male</option>
                                         <option value="Female">Female</option>
                                         <option value="Other">Other</option>
                                </select>
                                <small class="p-error" *ngIf="(gender.invalid && submitted )|| (gender.dirty && gender.invalid)">Gender is required.</small>
                            </div>

                            <div class="p-field">
                               <label for="martialStatus">Marital Status</label>
                               <select id="martialStatus" required #martialStatus="ngModel" [(ngModel)]="personalInformation.maritalStatus" required pInputText>
                                         <option value="Single">Single</option>
                                         <option value="Married">Married</option>
                                         <option value="Divorced">Divorced</option>
                                </select>
                                 <small class="p-error" *ngIf="(martialStatus.invalid && submitted )|| (martialStatus.dirty && martialStatus.invalid)">Marital Status is required.</small>
                            </div>

                            <div class="p-field">
                               <label for="preferredComm">Preferred Communication</label>
                               <select id="preferredComm" required #preferredComm="ngModel" [(ngModel)]="personalInformation.contactMethod" required pInputText>
                                         <option value="Email">Email</option>
                                         <option value="Mobile">Mobile</option>
                                </select>
                                 <small class="p-error" *ngIf="(preferredComm.invalid && submitted )|| (preferredComm.dirty && preferredComm.invalid)">Preferred Communication is required.</small>
                            </div>

                            <div class="p-field">
                               <label for="preferredLang">Preferred Language</label>
                               <select id="preferredLang" required #preferredLang="ngModel" [(ngModel)]="personalInformation.preferredLanguage" required pInputText>
                                         <option value="English">English</option>
                                         <option value="Spanish">Spanish</option>
                                </select>
                                  <small class="p-error" *ngIf="(preferredLang.invalid && submitted )|| (preferredLang.dirty && preferredLang.invalid)">Preferred Language is required.</small>
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



export class PersonalDemo implements OnInit {
    personalInformation: any;
    submitted: boolean = false;

    constructor(private dataService: DataService, public ticketService: TicketService, private router: Router) {
    }

    ngOnInit() {
        this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    }

    nextPage() {
            if (this.personalInformation.firstname && this.personalInformation.lastname &&
              this.personalInformation.dob &&
              this.personalInformation.gender &&
              this.personalInformation.maritalStatus &&
              this.personalInformation.mobilePhone &&
              this.personalInformation.email &&
              this.personalInformation.contactMethod &&
              this.personalInformation.preferredLanguage &&
              this.personalInformation.ssn &&
              this.personalInformation.driverLicenseState &&
              this.personalInformation.driverLicenseNumber) {
                this.ticketService.ticketInformation.personalInformation = this.personalInformation;
                this.router.navigate(['steps/seat']);
                return;
            }
            this.submitted = true;
    }

}
