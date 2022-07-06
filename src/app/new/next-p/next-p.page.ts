import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-p',
  templateUrl: './next-p.page.html',
  styleUrls: ['./next-p.page.scss'],
})
export class NextPPage implements OnInit {

  date=null;
  text=null;
  select=null;
  multiple=null;
  email=null;
  params=null;
  constructor(public router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.params = this.router.getCurrentNavigation().extras.state;
      console.log(this.params.date)
      console.log(this.params.text)
      console.log(this.params.select)
      console.log(this.params.multiple)
      console.log(this.params.email)
    }
  }

  ngOnInit() {
  }

}

