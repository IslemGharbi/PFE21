import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatOffrePage } from './etat-offre.page';

const routes: Routes = [
  {
    path: '',
    component: EtatOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatOffrePageRoutingModule {}
