import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { UserMobileReg } from '../objects/usermobilereg';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages:any;
  public data:UserMobileReg;

  
  selectedpath='';

  constructor(private route:ActivatedRoute ,private router:Router) {
    this.pages=[
      {
        title:'Dashboard',
        url:'/menu/landingpage',
        icon:'home'
      },
      {
        title:'Chit Details',
        url:'/menu/chitdetails',
        icon:'home'
      },
      {
        title:'Anjuman Details',
        url:'/menu/anjumandetails',
        icon:'home'
      }
    ]
   
   }

  ngOnInit() {
    
    console.log(this.route);
    this.route.queryParams.subscribe(params =>
    {
      console.log('Params',params);
      if(params && params.special)
      {
        this.data=JSON.parse(params.special);
      }
    })
  }
  
  gotoPage(page)
  {
    
     this.router.navigateByUrl(page.url);
  }

  


}
