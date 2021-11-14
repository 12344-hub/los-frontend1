import {Component,OnInit} from '@angular/core';
import { TicketService } from './ticketservice';
import { Router } from '@angular/router';


@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title">
                    Address Information
                </ng-template>
                <ng-template pTemplate="subtitle">
                    Enter Address and Landlord Details
                </ng-template>
                <ng-template pTemplate="content">

                    <div class="p-fluid">

                       <div class="p-field">
                           <label for="address1">Address Line 1</label>
                           <input #address1="ngModel" id="address1" type="text" required pInputText [(ngModel)]="seatInformation.address1" [ngClass]="{'ng-dirty': (address1.invalid && submitted) || (address1.dirty && address1.invalid)}">
                           <small *ngIf="(address1.invalid && submitted) || (address1.dirty && address1.invalid)" class="p-error">Address Line1 is required</small>
                       </div>

                       <div class="p-field">
                           <label for="address2">Address Line 2</label>
                           <input #address2="ngModel" id="address2" type="text" pInputText [(ngModel)]="seatInformation.address2" >
                       </div>

                       <div class="p-field">
                           <label for="city">City</label>
                           <input #city="ngModel" id="city" type="text" required pInputText [(ngModel)]="seatInformation.city" [ngClass]="{'ng-dirty': (city.invalid && submitted) || (city.dirty && city.invalid)}">
                           <small *ngIf="(city.invalid && submitted) || (city.dirty && city.invalid)" class="p-error">City is required</small>
                       </div>


                       <div class="p-field">
                         <label for="state">State</label>
                         <select inputId="state"  #state="ngModel" [(ngModel)]="seatInformation.state" required pInputText>
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
                           <small *ngIf="(state.invalid && submitted) || (state.dirty && state.invalid)" class="p-error">State is required</small>
                      </div>

                       <div class="p-field">
                           <label for="zipCode">Zip Code</label>
                             <p-inputMask  #zipCode="ngModel" id="zipCode" mask="99999" required pInputText [(ngModel)]="seatInformation.zipCode" [ngClass]="{'ng-dirty': (zipCode.invalid && submitted) || (zipCode.dirty && zipCode.invalid)}">
                             </p-inputMask>
                           <small *ngIf="(zipCode.invalid && submitted) || (zipCode.dirty && zipCode.invalid)" class="p-error">Zip Code is required</small>
                       </div>


                       <div class="p-field">
                             <label for="monthlyPayment">Monthly Payment</label>
                             <p-inputNumber #monthlyPayment="ngModel" id="monthlyPayment" [(ngModel)]="seatInformation.monthlyPayment" required [ngClass]="{'ng-dirty': (monthlyPayment.invalid && submitted) || (monthlyPayment.dirty && monthlyPayment.invalid)}" mode="currency" currency="USD" locale="en-US"></p-inputNumber>
                            <small *ngIf="(monthlyPayment.invalid && submitted) || (monthlyPayment.dirty && monthlyPayment.invalid)" class="p-error">Monthly Payment is required.</small>
                       </div>

                       <div class="p-field">

                            <label for="movedWhen">Move-in Date</label>
                            <input required #movedWhen="ngModel" id="movedWhen" [(ngModel)]="seatInformation.movedWhen" [ngClass]="{'ng-dirty': (movedWhen.invalid && submitted) || (movedWhen.dirty && movedWhen.invalid)}" type='date' min='1960-01' pInputText inputId="movedWhen">
                            <small *ngIf="(movedWhen.invalid && submitted) || (movedWhen.dirty && movedWhen.invalid)" class="p-error">Move-in Date is required.</small>
                       </div>

                       <div class="p-field">
                          <label for="rentOrOwn">Rent or Own</label>
                          <select inputId="rentOrOwn" required #rentOrOwn="ngModel" [(ngModel)]="seatInformation.rentOrOwn" required pInputText>
                                    <option value="Rent">Rent</option>
                                    <option value="Own">Own</option>
                           </select>
                           <small *ngIf="(rentOrOwn.invalid && submitted) || (rentOrOwn.dirty && rentOrOwn.invalid)" class="p-error">Rent or Own is required.</small>
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
export class SeatDemo implements OnInit {

    constructor(public ticketService: TicketService, private router: Router) { }

    seatInformation: any;
    submitted: boolean = false;
    ngOnInit() {
        this.seatInformation = this.ticketService.ticketInformation.seatInformation;

    }


    nextPage() {
      if (
        this.seatInformation.address1 &&
        this.seatInformation.city &&
        this.seatInformation.state &&
        this.seatInformation.zipCode &&
        this.seatInformation.monthlyPayment &&
        this.seatInformation.movedWhen &&
        this.seatInformation.rentOrOwn) {
          this.ticketService.ticketInformation.seatInformation = this.seatInformation;
          this.router.navigate(['steps/payment']);
          return;
        }
        this.submitted = true;
    }

    prevPage() {
        this.router.navigate(['steps/personal']);
    }
}
