import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModulePPage } from '../module-p/module-p.page';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  date = null;
  text = null;
  select = null;
  multiple = null;
  email = null;
  dataReturned: any;
  users = [{
      "paramID": 123, "paramNAME": "Ankita", "paramINTERESTEDSPORTs": "Cricket",
    },
    {
      "paramID": 123, "paramNAME": "Ank", "paramINTERESTEDSPORTs": "Football",
    },
    {
      "paramID": 123, "paramNAME": "An", "paramINTERESTEDSPORTs": "Ludo"
    }]
  constructor(public modalCtrl: ModalController,
    public nav: NavController,
    public alertController: AlertController,
    private toast: ToastController,
    private router: Router,) { }

  goTonextP() {
    let params: any = {
      date: this.date,
      text: this.text,
      select: this.select,
      multiple: this.multiple,
      email: this.email
    }
    //this.nav.navigateForward('/next-p', { state: params }); // params to pass object/array
    //to send Data to the next-P page
    this.router.navigate(['/next-p'], { state: params });
    //this.router.navigate(['/identity']);
  }
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModulePPage,
      // componentProps: [{
      //   "paramID": 123, "paramNAME": "Ankita", "paramINTERESTEDSPORTs": "Cricket",
      // },
      // {
      //   "paramID": 123, "paramNAME": "Ank", "paramINTERESTEDSPORTs": "Football",
      // },
      // {
      //   "paramID": 123, "paramNAME": "An", "paramINTERESTEDSPORTs": "Ludo"
      // }]
      componentProps :{
        "userName":this.users,
        "color": ['green','red','yellow']
      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data['receiver'];
        console.log("Parent Receiver:",dataReturned.data)
        console.log(this.dataReturned.paramID)
        console.log(this.dataReturned.paramNAME)
        console.log(this.dataReturned.paramINTERESTEDSPORTs)
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }


  ngOnInit() {
  }

}

