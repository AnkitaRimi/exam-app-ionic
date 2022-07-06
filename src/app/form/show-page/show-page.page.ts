import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.page.html',
  styleUrls: ['./show-page.page.scss'],
})
export class ShowPagePage implements OnInit {
  params=null;
    fname= null;
    email=null;
    select= null;
    date= null;
    //y=null;

    constructor(public router: Router) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.params = this.router.getCurrentNavigation().extras.state;
        console.log(this.params.fname)
        console.log(this.params.email)
        console.log(this.params.select)
        console.log(this.params.date)
        console.log(this.params.sports)
       
      }
    }

  ngOnInit() {
  }

}
