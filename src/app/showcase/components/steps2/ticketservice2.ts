import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TicketService2 {

  ticketInformation = {
      personalInformation: {
          id: '',
          riskId: '',
          firstname: '',
          mi: '',
          lastname: '',
          dob: null,
          gender: '',
          maritalStatus: '',
          mobilePhone: '',
          email: '',
          contactMethod: '',
          preferredLanguage: '',
          ssn: '',
          driverLicenseState: '',
          driverLicenseNumber: '',
          loanapprovedflag: '',
          riskindex: null,
          loanAmount: null,
          dateRequired: null
      },
      seatInformation: {
          address1: '',
          address2:'',
          city:'',
          state:'',
          zipCode:'',
          monthlyPayment:null,
          movedWhen:null,
          rentOrOwn:'',
          forHowLong:''
      },
      paymentInformation: {
          employerName:'',
          positionTitle:'',
          monthlyIncome:null,
          startDate:null,
          fullPartTime:'',
          lessThanThreeYears:''
      }
  };



    private paymentComplete = new Subject<any>();

    paymentComplete$ = this.paymentComplete.asObservable();

    getTicketInformation() {
        return this.ticketInformation;
    }

    setTicketInformation(ticketInformation) {
        this.ticketInformation = ticketInformation;
    }

    complete() {
        this.paymentComplete.next(this.ticketInformation.personalInformation);
    }
}
