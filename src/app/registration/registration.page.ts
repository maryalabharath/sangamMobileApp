import { Component, OnInit } from '@angular/core';
import { UserMobileReg } from '../objects/usermobilereg';
import { UserregistrationService } from '../services/userregistration.service';
import { Routes, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public userMobileReg:UserMobileReg= {} as UserMobileReg;

  constructor(private usermobileRegservice:UserregistrationService,private routes:Router) { }
  
  ngOnInit() {
  }

  saveMobileUserDetais()
  {
    console.log('request data',this.usermobileRegservice);
     this.usermobileRegservice.saveuserDetails(this.userMobileReg).subscribe(data => {
       console.log(data);
       let navigationExtras:NavigationExtras=
       {
         queryParams:{
          special:JSON.stringify(data)
         }
       }
       this.routes.navigateByUrl('/menu');
     })
  }

}
