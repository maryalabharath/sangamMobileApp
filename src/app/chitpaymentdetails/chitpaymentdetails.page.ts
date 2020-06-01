import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { PaymentHistory } from '../objects/paymenthistory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chitpaymentdetails',
  templateUrl: './chitpaymentdetails.page.html',
  styleUrls: ['./chitpaymentdetails.page.scss'],
})
export class ChitpaymentdetailsPage implements OnInit {

  public TotalInterest:number;
  public TotalPayment:number;
  public paymentHistoryreponseArray:PaymentHistory[]=[];

  constructor(private helperservice:HelperService) { }

  ngOnInit() {
    this.paymentHistoryreponseArray = this.helperservice.myParam.locs;
    console.log('paymentDetails in Chitpayment Details Page',this.paymentHistoryreponseArray);
    this.TotalInterest=this.paymentHistoryreponseArray.reduce((a:number, b) => a + b.interestamount, 0);
    this.TotalPayment=this.paymentHistoryreponseArray.reduce((a:number,b)=>a + b.paidamount,0);
  }


}
