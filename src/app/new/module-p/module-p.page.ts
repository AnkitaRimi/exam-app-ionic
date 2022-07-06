import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-module-p',
  templateUrl: './module-p.page.html',
  styleUrls: ['./module-p.page.scss'],
})
export class ModulePPage implements OnInit {
  @Input() userName = [];
  @Input() color = [];

  modelId:number;
  name: string;
  interestedSports: string; 
  modelId1:number;
  name1: string;
  interestedSports1: string; 
  modelId2:number;
  name2: string;
  interestedSports2: string; 

  constructor(public modalCtrl: ModalController,public navParams: NavParams) { }

  ngOnInit() {
    console.log("Inside model (users):", this.userName);
    console.log("Inside model (color):", this.color);

    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.name = this.navParams.data.paramNAME;
    this.interestedSports = this.navParams.data.paramINTERESTESSPORTS;
    this.modelId1 = this.navParams.data.paramID1;
    this.name1 = this.navParams.data.paramNAME1;
    this.interestedSports1 = this.navParams.data.paramINTERESTESSPORTS1;
    this.modelId2 = this.navParams.data.paramID2;
    this.name2 = this.navParams.data.paramNAME2;
    this.interestedSports2 = this.navParams.data.paramINTERESTESSPORTS2;

  }
  dismiss(singlePerson) {  
    this.modalCtrl.dismiss({
      'receiver':singlePerson
    }); 
  } 

  selectedUser(singlePerson){
    console.log("get the user",singlePerson);
    this.dismiss(singlePerson)
  }

}
