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
          dob: '',
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
          riskindex: '',
          loanAmount: '',
          dateRequired: ''
      },
      seatInformation: {
          address1: '',
          address2:'',
          city:'',
          state:'',
          zipCode:'',
          monthlyPayment:'',
          movedWhen:'',
          rentOrOwn:'',
          forHowLong:''
      },
      paymentInformation: {
          employerName:'',
          positionTitle:'',
          monthlyIncome:'',
          startDate:'',
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
