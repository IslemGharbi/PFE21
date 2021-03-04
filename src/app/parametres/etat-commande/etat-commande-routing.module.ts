import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatCommandePage } from './etat-commande.page';

const routes: Routes = [
  {
    path: '',
    component: EtatCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatCommandePageRoutingModule {}
