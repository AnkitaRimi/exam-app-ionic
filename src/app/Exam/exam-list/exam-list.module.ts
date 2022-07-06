import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamListPageRoutingModule } from './exam-list-routing.module';

import { ExamListPage } from './exam-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamListPageRoutingModule
  ],
  declarations: [ExamListPage]
})
export class ExamListPageModule {}
