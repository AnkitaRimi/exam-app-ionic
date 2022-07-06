import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamformPageRoutingModule } from './examform-routing.module';

import { ExamformPage } from './examform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamformPageRoutingModule
  ],
  declarations: [ExamformPage]
})
export class ExamformPageModule {}
