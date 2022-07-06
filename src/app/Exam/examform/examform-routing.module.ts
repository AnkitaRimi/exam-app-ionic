import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamformPage } from './examform.page';

const routes: Routes = [
  {
    path: '',
    component: ExamformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamformPageRoutingModule {}
