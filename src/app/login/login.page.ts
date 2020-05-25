import { Component, OnInit } from '@angular/core';
import { UserMobileReg } from '../objects/usermobilereg';
import { UserregistrationService } from '../services/userregistration.service';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userMobileSignin:UserMobileReg= {} as UserMobileReg;
  public userDetailsArray:UserMobileReg[]=[];

  constructor(private usermobileRegservice:UserregistrationService,private routes:Router
    ,private storage: Storage) { }
  

  ngOnInit() {
  }


  authorizeUserDetais()
  {
    console.log('request data',this.userMobileSignin);
    try{
      this.usermobileRegservice.getUserDetails().subscribe(data => {
        console.log(data);
        this.userDetailsArray=data;
        let authorizeduser =  this.userDetailsArray.find(userdetails => userdetails.email === this.userMobileSignin.email && userdetails.password===this.userMobileSignin.password);
       //  let navigationExtras:NavigationExtras=
       //  {
       //    queryParams:{
       //     //special:JSON.stringify(authorizeduser)
       //     special:authorizeduser.firstname
       //    }
       //  }
       if(authorizeduser!=undefined && authorizeduser!=null)
       {
         this.storage.set('userdetails', JSON.stringify(authorizeduser));
         this.routes.navigateByUrl('landingpage');
       }
 
      }
       )

    }
    catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
     
  }


}
