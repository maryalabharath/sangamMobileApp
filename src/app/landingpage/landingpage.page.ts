import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

   private firstname:string;
  constructor(private route:ActivatedRoute,router:Router) {   
   }

  ngOnInit() {
    console.log(this.route);
    this.route.queryParams.subscribe(params =>
    {
      console.log('Params',params);
      if(params && params.special)
      {
        this.firstname=params.special;
      }
    })
    console.log('firstname',this.firstname);

  }

}
