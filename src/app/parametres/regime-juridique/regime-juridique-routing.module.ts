import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegimeJuridiquePage } from './regime-juridique.page';

const routes: Routes = [
  {
    path: '',
    component: RegimeJuridiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegimeJuridiquePageRoutingModule {}
