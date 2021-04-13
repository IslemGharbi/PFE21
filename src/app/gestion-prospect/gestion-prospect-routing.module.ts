import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProspectPage } from './gestion-prospect.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProspectPage
  },
  {
    path: 'prospect-details/:id',
    loadChildren: () => import('./prospect-details/prospect-details.module').then( m => m.ProspectDetailsPageModule)
  },
  {
    path: 'modifier-prospect/:id',
    loadChildren: () => import('./modifier-prospect/modifier-prospect.module').then( m => m.ModifierProspectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProspectPageRoutingModule {}
