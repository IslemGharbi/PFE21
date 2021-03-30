import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProspectPage } from './gestion-prospect.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProspectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProspectPageRoutingModule {}
