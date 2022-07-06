import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulePPageRoutingModule } from './module-p-routing.module';

import { ModulePPage } from './module-p.page';
import { Routes } from '@angular/router';

const routes: Routes = [  
  {  
    path: '',  
    component: ModulePPage  
  }  
];  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulePPageRoutingModule
  ],
  declarations: [ModulePPage]
})
export class ModulePPageModule {}
