import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPagePage } from './show-page.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPagePageRoutingModule {}
