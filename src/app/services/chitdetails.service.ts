import { Injectable } from '@angular/core';
import { HttpInterceptor } from '../http.interceptor';
import { Observable } from 'rxjs';
import { MemberPaymentDetails } from '../objects/memberpaymentdetails';
import { PaymentHistory } from '../objects/paymenthistory';

@Injectable({
  providedIn: 'root'
})
export class ChitdetailsService {

  public MemberPaymenturl:string='finance/Payment/getMemberPaymentDetails';
  public paymentDetailByGrpurl:string='finance/Payment/paymentDetailsByGrpidandMemid';

  constructor(private http:HttpInterceptor) { }

  getMemberPaymentDetails(firstname:string):Observable<MemberPaymentDetails[]>
  {
    let encodefirstname=encodeURI(firstname)
    return this.http.get(this.MemberPaymenturl+'?firstName='+encodefirstname);
  }

  getPaymentDetailsByGrpandmember(memberpaymentdetails:PaymentHistory):Observable<PaymentHistory[]>
  {
    const body=JSON.stringify(memberpaymentdetails);
    return this.http.post(this.paymentDetailByGrpurl,body,null);
  }


}
