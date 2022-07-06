import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextPPageRoutingModule } from './next-p-routing.module';

import { NextPPage } from './next-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextPPageRoutingModule
  ],
  declarations: [NextPPage]
})
export class NextPPageModule {}
