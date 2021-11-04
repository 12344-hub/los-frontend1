import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRegs() : Observable<Registration[]> {
    return this.http.get<Registration[]>("/registrations")
  }

  getReg(id: number): Observable<Registration> {
    return this.http.get<Registration>(`/registrations/${id}`)
  }

  deleteReg(id: number): Observable<any> {
    return this.http.delete(`/registrations/${id}`)
  }

  addReg(reg: Registration): Observable<any> {
    return this.http.post(`/registrations`, reg)
  }

  saveReg(reg: Registration): Observable<any> {
	  let url:string = `/registrations/${reg.id}`
    return this.http.put(url, reg)
  }

}


export class Registration {
  id: number;
  firstname: string;
  mi?: string;
  lastname: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  mobilePhone: string;
  email: string;
  contactMethod: string;
  preferredLanguage: string;
  ssn: string;
  driverLicenseState: string;
  driverLicenseNumber: string;
  address1: string;
  address2?:string;
  city:string;
  state:string;
  zipCode:string;
  monthlyPayment:string;
  movedWhen:string;
  rentOrOwn:string;
  employerName:string;
  positionTitle:string;
  monthlyIncome:string;
  startDate:string;
  fullPartTime:string;
  loanapprovedflag: string;
  riskindex: string;
  loanAmount: string;
  dateRequired: string;

  constructor() {
    this.id = 0;
    this.firstname = '';
    this.mi = '';
    this.lastname = '';
    this.dob = '';
    this.gender = '';
    this.maritalStatus = '';
    this.mobilePhone = '';
    this.email = '';
    this.contactMethod = '';
    this.preferredLanguage = '';
    this.ssn = '';
    this.driverLicenseState = '';
    this.driverLicenseNumber = '';
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
    this.monthlyPayment = '';
    this.movedWhen = '';
    this.rentOrOwn = '';
    this.employerName = '';
    this.positionTitle = '';
    this.monthlyIncome = '';
    this.startDate = '';
    this.fullPartTime = '';
    loanapprovedflag = '';
    riskindex = '';
    loanAmount = '';
    dateRequired = '';
    }
}

export class Book {
  id: number
  isbn: string
  title: string
  price: number
}
