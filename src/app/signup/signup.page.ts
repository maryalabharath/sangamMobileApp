import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  data:any;

  constructor(private route:ActivatedRoute ,private router:Router) {
    this.route.queryParams.subscribe(params =>
      {
        console.log('Params',params);
        if(params && params.special)
        {
          this.data=JSON.parse(params.special);
        }
      })
   }

  ngOnInit() {
  }

}
