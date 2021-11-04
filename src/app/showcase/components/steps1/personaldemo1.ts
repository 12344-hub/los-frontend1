import {Component,OnInit} from '@angular/core';
import { TicketService1 } from './ticketservice1';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Edit Registration
                </ng-template>
                <ng-template pTemplate="subtitle">
                    <div class="p-fluid">
                        <div class="p-field p-grid">
                            <label for="Registration Number" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Registration Number</label>
                            <div class="p-col-12 p-md-10">
                                <input id="firstname" type="text" pInputText>
                            </div>
                        </div>
						<div class="p-pb-4">OR</div>
                        <div class="p-field p-grid">
                                <label for="mi" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Driver License</label>
                                <div class="p-col">
                                    <input id="mi" type="text" pInputText>
                                </div>
                        </div>
					</div>
					<div class="p-pb-6"></div>
                </ng-template>
                <ng-template pTemplate="content">
                    <div class="p-fluid">
                        <div class="p-field p-grid">
                            <label for="firstname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Firstname</label>
                            <div class="p-col-12 p-md-10">
                                <input id="firstname" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                                <label for="mi" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">MI</label>
                                <div class="p-col">
                                    <input id="mi" type="text" pInputText>
                                </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Lastname</label>
                            <div class="p-col-12 p-md-10">
                                <input id="lastname" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="dob" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Date of Birth</label>
                            <p-calendar id="dob" [(ngModel)]="dob" [showIcon]="true" monthNavigator="true" yearNavigator = "true" yearRange="1920:2015" dateFormat="mm/dd/yy" inputId="dob"></p-calendar>
                        </div>
                        <div class="p-field p-grid">
                            <label for="ssn" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">SSN</label>
                            <p-inputMask id="ssn" [(ngModel)]="ssn" mask="999-999-9999"></p-inputMask>
                        </div>
                        <div class="p-field p-grid">
                            <label for="mobile" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Mobile</label>
                            <p-inputMask id="mobile" [(ngModel)]="mobile" mask="(999) 999-9999"></p-inputMask>
                        </div>
                        <div class="p-field p-grid">
                            <label for="email" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Email</label>
                            <p-inputMask id="email" [(ngModel)]="email" mask="*a@*a.*a"></p-inputMask>
                        </div>

                        <div class="p-formgroup-inline">
                            <label style="width:110px">Driver License</label>
                            <div class="p-field">
                                <p-dropdown inputId="state" [options]="states" [(ngModel)]="selectedState" placeholder="Select" optionLabel="name"></p-dropdown>
                            </div>
                            <div class="p-field" >
                                <input id="licenseNumber" [(ngModel)]="licenseNumber" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Gender</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="male" value="Male" [(ngModel)]="gender" inputId="male"></p-radioButton>
                                <label for="male">Male</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="female" value="Female" [(ngModel)]="gender" inputId="female"></p-radioButton>
                                <label for="female">Female</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="other" value="Other" [(ngModel)]="gender" inputId="other"></p-radioButton>
                                <label for="other">Other</label>
                            </div>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Marital Status</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="married" value="Married" [(ngModel)]="maritalStatus" inputId="married"></p-radioButton>
                                <label for="married">Married</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="single" value="Single" [(ngModel)]="maritalStatus" inputId="single"></p-radioButton>
                                <label for="single">Single</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="divorced" value="Divorced" [(ngModel)]="maritalStatus" inputId="divorced"></p-radioButton>
                                <label for="divorced">Divorced</label>
                            </div>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Preferred Communication</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="email" value="Email" [(ngModel)]="preferredComm" inputId="email"></p-radioButton>
                                <label for="email">Email</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="mobile" value="Mobile" [(ngModel)]="preferredComm" inputId="mobile"></p-radioButton>
                                <label for="mobile">Mobile</label>
                            </div>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Preferred Language</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="english" value="English" [(ngModel)]="preferredLanguage" inputId="english"></p-radioButton>
                                <label for="english">English</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="spanish" value="Spanish" [(ngModel)]="preferredLanguage" inputId="spanish"></p-radioButton>
                                <label for="spanish">Spanish</label>
                            </div>
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



export class PersonalDemo1 implements OnInit {
    personalInformation: any;
    licenseNumber: any;
    gender: string;
    maritalStatus: string;
    dob: Date;
    ssn: string;
    mobile: string;
    email: string;
    preferredComm: string;
    preferredLanguage: string;
    submitted: boolean = false;
    selectedState: any = null;
    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];
    constructor(public ticketService: TicketService1, private router: Router) {
    }

    ngOnInit() {
        this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    }

    nextPage() {
        this.submitted = true;
        if (this.submitted ) {
            this.ticketService.ticketInformation.personalInformation = this.personalInformation;
            this.router.navigate(['steps1/seat']);

            return;
        }


    }
}
