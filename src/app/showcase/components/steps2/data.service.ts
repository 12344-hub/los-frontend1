import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers= new HttpHeaders()
   .set('content-type', 'application/json')
   .set('access-control-allow-origin', '*');

  constructor(private http: HttpClient) { }

//  getRegs() : Observable<Registration[]> {
//    return this.http.get<Registration[]>("/registration")
//  }

  //getReg(id: number): Observable<Registration> {
  //  return this.http.get<Registration>(`/registration/${id}`)
  //}

  getReg1(id: string): Observable<any> {
    return this.http.get<any>(`https://qoh98vlv8g.execute-api.us-east-2.amazonaws.com/items/${id}`, {'headers': this.headers})
  }

//  deleteReg(id: number): Observable<any> {
//    return this.http.delete(`/registration/${id}`)
//  }

  addReg1(reg: Registration): Observable<any> {
    return this.http.put(`https://qoh98vlv8g.execute-api.us-east-2.amazonaws.com/items`, reg, {'headers': this.headers} )
  }

  //addReg(reg: Registration): Observable<any> {
  //  return this.http.post(`/registration`, reg)
  //}

  //saveReg(reg: Registration): Observable<any> {
  //  return this.http.put(`/registration/${reg.id}`, reg)
  //}

}


export class Registration {
  id: string;
  firstname: string;
  mi?: string;
  lastname: string;
  dob: Date;
  gender: string;
  maritalstatus: string;
  mobilephone: string;
  email: string;
  contactmethod: string;
  preferredlanguage: string;
  ssn: string;
  driverlicensestate: string;
  driverlicensenumber: string;
  address1: string;
  address2?:string;
  city:string;
  state:string;
  zipcode:string;
  monthlypayment:number;
  movedwhen:Date;
  rentorown:string;
  employername:string;
  positiontitle:string;
  monthlyincome:number;
  startdate:Date;
  fullparttime:string;
  loanprocessingflag: string;
  loanamount: number;
  daterequired: Date;
  risksystemid: string;
  riskindexvalue: number;
  loanapprovedflag: string;


  constructor() {
    this.id = '';
    this.firstname = '';
    this.mi = '';
    this.lastname = '';
    this.dob = null;
    this.gender = '';
    this.maritalstatus = '';
    this.mobilephone = '';
    this.email = '';
    this.contactmethod = '';
    this.preferredlanguage = '';
    this.ssn = '';
    this.driverlicensestate = '';
    this.driverlicensenumber = '';
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zipcode = '';
    this.monthlypayment = null;
    this.movedwhen = null;
    this.rentorown = '';
    this.employername = '';
    this.positiontitle = '';
    this.monthlyincome = null;
    this.startdate = null;
    this.fullparttime = '';
    this.loanprocessingflag = '';
    this.loanamount = null;
    this.daterequired = null;
    this.risksystemid = '';
    this.riskindexvalue = null;
    this.loanapprovedflag = '';
    }

}

export class Book {
  id: number
  isbn: string
  title: string
  price: number
}
