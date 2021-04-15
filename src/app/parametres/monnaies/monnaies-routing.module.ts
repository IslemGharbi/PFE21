import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonnaiesPage } from './monnaies.page';

const routes: Routes = [
  {
    path: '',
    component: MonnaiesPage
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'modifier/:id',
    loadChildren: () => import('./modifier/modifier.module').then( m => m.ModifierPageModule)
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then( m => m.AjouterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonnaiesPageRoutingModule {}
