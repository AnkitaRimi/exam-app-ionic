import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XyzPageRoutingModule } from './xyz-routing.module';

import { XyzPage } from './xyz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XyzPageRoutingModule
  ],
  declarations: [XyzPage]
})
export class XyzPageModule {}
