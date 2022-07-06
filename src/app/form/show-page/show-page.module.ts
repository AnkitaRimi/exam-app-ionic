import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPagePageRoutingModule } from './show-page-routing.module';

import { ShowPagePage } from './show-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPagePageRoutingModule
  ],
  declarations: [ShowPagePage]
})
export class ShowPagePageModule {}
