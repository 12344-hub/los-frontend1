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
                                <label for="riskIndex">Computed Risk Index</label>
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
    reg1:any;

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
      //  let reg1 = new Registration();
        this.dataService.getReg1(this.personalInformation.id).subscribe(reg => {
              this.reg1 = reg.Item;
              this.reg1.loanamount = this.personalInformation.loanAmount;
              this.reg1.daterequired = this.personalInformation.dateRequired;
              this.reg1.risksystemid = this.personalInformation.riskId;
              this.reg1.riskindexvalue = this.personalInformation.riskindex;
              this.reg1.loanapprovedflag =   this.personalInformation.loanapprovedflag;
              this.dataService.addReg1(this.reg1).subscribe(_ => {});
              this.ticketService.complete();
      });
      this.submitted = true;
    }
  }

    prevPage() {
        this.router.navigate(['steps2/personal']);
    }
}
