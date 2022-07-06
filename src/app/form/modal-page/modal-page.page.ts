import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  @Input() sports = [];

  interestedSports: string;

  constructor(public modalCtrl: ModalController,public navParams: NavParams) { }

  ngOnInit() {
    this.interestedSports = this.navParams.data.paraminterestedS;

  }
  interestedOn(p){
    this.sports=p.target.value
  }
  funcFilter(singlePerson) {
     singlePerson.isChecked = !singlePerson.isChecked
     console.log(this.sports)
   }
   dismiss() { 
    let y = this.sports.filter(c=>this.checking(c));
    this.sports= y;
    console.log(y)  
    this.modalCtrl.dismiss(this.sports); 
    
    
  }  
  checking(arr) {
    return arr.isChecked == true
}

}
  


