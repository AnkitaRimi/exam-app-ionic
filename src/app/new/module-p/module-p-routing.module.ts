import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePPage } from './module-p.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePPageRoutingModule {}
