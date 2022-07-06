import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { AlertController, IonRouterOutlet, ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fname = null;
  email = null;
  select = null;
  date = null;
  dataReturned: any;
  paramInterestedS=[];
  sport=[];

  interestedSports = [
  { "paramInterestedS": "Cricket","isChecked":false },
  { "paramInterestedS": "Football","isChecked":false },
  { "paramInterestedS": "Hockey","isChecked":false },
]

  constructor(public modalCtrl: ModalController,
    public nav: NavController,
    public alertController: AlertController,
    private toast: ToastController,
    private router: Router,public alertCtrl: AlertController,private platform: Platform,
    private routerOutlet: IonRouterOutlet) {
      this.platform.backButton.subscribeWithPriority(-1, () => {
        if (!this.routerOutlet.canGoBack()) {
          App.exitApp();
        }
      });
     }


    
    
    goToNxtP() {
    let params: any = {
      fname: this.fname,
      email: this.email,
      select: this.select,
      date: this.date,
      sport:this.dataReturned,
    }
    console.log("submit data",params)
    //to send Data to the show-page page
    this.router.navigate(['/show-page'], { state: params });

  }
  async goToshowP() {  
    const confirm = await this.alertCtrl.create({  
      header: 'Confirm!',  
      message: 'Are You Sure to process this Form?',  
      buttons: [  
        {  
          text: 'Cancel',  
          role: 'cancel',  
          handler: () => {  
            //console.log('Confirm Cancel');  
          }  
        },  
        {  
          text: 'Okay',  
          handler: () => {  
            this.goToNxtP();
            console.log('Confirm Okay.');  
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }  
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPagePage,
      componentProps: {
        "sports": this.interestedSports,

      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log("Data from Model",dataReturned)
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        console.log("Parent Receiver:",dataReturned.data)
        console.log(this.dataReturned.paramInterestedS)
        //alert('Modal Sent Data :'+ dataReturned);
      }else{
        this.dataReturned = [];
      }
    });
    return await modal.present();
  }
  
  ngOnInit() {
  }
}


