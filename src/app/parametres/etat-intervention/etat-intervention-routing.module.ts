import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatInterventionPage } from './etat-intervention.page';

const routes: Routes = [
  {
    path: '',
    component: EtatInterventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatInterventionPageRoutingModule {}
