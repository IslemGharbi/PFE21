import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrePage } from './parametre.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrePage
  },
  {
    path: 'monnaie',
    loadChildren: () => import('./monnaie/monnaie.module').then( m => m.MonnaiePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrePageRoutingModule {}
