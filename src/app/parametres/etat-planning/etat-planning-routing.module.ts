import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatPlanningPage } from './etat-planning.page';

const routes: Routes = [
  {
    path: '',
    component: EtatPlanningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatPlanningPageRoutingModule {}
