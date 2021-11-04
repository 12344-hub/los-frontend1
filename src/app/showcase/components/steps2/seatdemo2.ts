import {Component,OnInit} from '@angular/core';
import { TicketService2 } from './ticketservice2';
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
                        <div class="p-field p-grid">
                            <label for="firstname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Address Line 1</label>
                            <div class="p-col-12 p-md-10">
                                <input id="firstname" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Address Line 2</label>
                            <div class="p-col-12 p-md-10">
                                <input id="lastname" type="text" pInputText>
                            </div>
                        </div>
                        <div  class="p-field p-grid">
                            <label for="city" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">City</label>
                            <div class="p-col-12 p-md-10">
                                <input id="city" type="text" pInputText>
                            </div>
                        </div>
                        <div  class="p-field p-grid">
                            <label for="state" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">State</label>
                            <p-dropdown inputId="state" [options]="states" [(ngModel)]="selectedState" placeholder="Select" optionLabel="name"></p-dropdown>
                        </div>
                        <div  class="p-field p-grid">
                            <label for="zip" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Zip</label>
                            <div class="p-col-12 p-md-10">
                                <input id="zip" type="text" pInputText>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="moved" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Moved When?</label>
                            <div class="p-col-12 p-md-10">
                                <p-inputMask id="moved" [(ngModel)]="movedWhen" mask="99/99"></p-inputMask>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="monthlyPayment" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Monthly Payment</label>
                            <div class="p-col-12 p-md-10">
                                <p-inputNumber [(ngModel)]="value2" mode="currency" currency="USD" locale="en-US"></p-inputNumber>
                            </div>
                        </div>
                        <div class="p-formgroup-inline">
                            <label style="width:110px">Rent or Own</label>
                            <div class="p-field-checkbox">
                                <p-radioButton name="male" value="Male" [(ngModel)]="gender" inputId="male"></p-radioButton>
                                <label for="male">Rent</label>
                            </div>
                            <div class="p-field-checkbox">
                                <p-radioButton name="female" value="Female" [(ngModel)]="gender" inputId="female"></p-radioButton>
                                <label for="female">Own</label>
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
export class SeatDemo2 implements OnInit {

    constructor(public ticketService: TicketService2, private router: Router) { }

    selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    classes: any[];

    vagons: any[];

    seats: any[];

    seatInformation: any;

    ngOnInit() {
        this.seatInformation = this.ticketService.ticketInformation.seatInformation;

        this.classes = [
            {name: 'First Class', code: 'A', factor: 1},
            {name: 'Second Class', code: 'B', factor: 2},
            {name: 'Third Class', code: 'C', factor: 3}
        ];
    }

    setVagons(event) {
        if (this.seatInformation.class && event.value) {
            this.vagons = [];
            this.seats = [];
            for (let i = 1; i < 3 * event.value.factor; i++) {
                this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
            }
        }
    }

    setSeats(event) {
        if (this.seatInformation.wagon && event.value) {
            this.seats = [];
            for (let i = 1; i < 10 * event.value.factor; i++) {
                this.seats.push({seat: i, type: event.value.type});
            }
        }
    }

    nextPage() {
        this.ticketService.ticketInformation.seatInformation = this.seatInformation;
        this.router.navigate(['steps2/payment']);
    }

    prevPage() {
        this.router.navigate(['steps2/personal']);
    }
}
