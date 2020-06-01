import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserMobileReg } from '../objects/usermobilereg';
import { ChitdetailsService } from '../services/chitdetails.service';
import { MemberPaymentDetails } from '../objects/memberpaymentdetails';
import { PaymentHistory } from '../objects/paymenthistory';
import { HelperService } from '../services/helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chitdetails',
  templateUrl: './chitdetails.page.html',
  styleUrls: ['./chitdetails.page.scss'],
})
export class ChitdetailsPage implements OnInit {

  public loggedinUserDetails:UserMobileReg= {} as UserMobileReg;
  public memberchitdetailsArr:MemberPaymentDetails[]=[];
  public selectedgroup:MemberPaymentDetails;
  public paymenthistory:PaymentHistory= {} as PaymentHistory;
  public paymentHistoryreponseArray:PaymentHistory[]=[];

  constructor(private storage:Storage,private chitdetails:ChitdetailsService,private helperService:HelperService,private routes:Router) { }

  ngOnInit() {
    this.storage.get('userdetails').then((val) => {
      console.log('UserDetails', val);
      this.loggedinUserDetails=JSON.parse(val);
      this.getMemberPaymentDetails();
    });
   
  }

  getMemberPaymentDetails()
  {
    try{
      let firstname=this.loggedinUserDetails.firstname;
    console.log('firstname',firstname);
    this.chitdetails.getMemberPaymentDetails(firstname).subscribe(data => {
    this.memberchitdetailsArr=data;
    console.log('MemberDetails',this.memberchitdetailsArr);
    },
    );
    }
    catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
    
  }

//   getPaymentDetailsByGrpMember()
//  {
//    this.paymenthistory.chitnumber=this.selectedgroup.chitNumber;
//    this.paymenthistory.membernumber=this.selectedgroup.membernumber;
//    this.chitdetails.getPaymentDetailsByGrpandmember(this.paymenthistory).subscribe(data =>{
//      this.paymentHistoryreponseArray=data;
//      console.log('PaymentDetails',this.paymentHistoryreponseArray)
//    })

 //}
   getPaymentDetailsByGrpMember(memberpaymentdetails:MemberPaymentDetails)
  {
   this.paymenthistory.chitnumber=memberpaymentdetails.chitNumber;
   this.paymenthistory.membernumber=memberpaymentdetails.membernumber;
   this.chitdetails.getPaymentDetailsByGrpandmember(this.paymenthistory).subscribe(data =>{
     this.paymentHistoryreponseArray=data;
     console.log('PaymentDetails',this.paymentHistoryreponseArray)
     this.helperService.myParam = {locs:this.paymentHistoryreponseArray};
     this.routes.navigateByUrl('chitpaymentdetails');
   })

}


 public optionsFn(): void { //here item is an object 
  console.log(this.selectedgroup);
  let item = this.selectedgroup; // Just did this in order to avoid changing the next lines of code :P
  console.log('ChitNumber',item.chitNumber);
  console.log('MemberNumber',item.membernumber);
  console.log('MemberName',item.firstname);
}


}
