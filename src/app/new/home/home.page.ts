import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModulePPage } from '../module-p/module-p.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modalCtrl: ModalController) {}  
  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: ModulePPage  
    });  
    return await modal.present();  
  }  
  ngOnInit() {
  }

}
