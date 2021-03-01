import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonnaiePage } from './monnaie.page';

const routes: Routes = [
  {
    path: '',
    component: MonnaiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonnaiePageRoutingModule {}
