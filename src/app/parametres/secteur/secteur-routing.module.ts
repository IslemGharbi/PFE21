import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecteurPage } from './secteur.page';

const routes: Routes = [
  {
    path: '',
    component: SecteurPage
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then( m => m.AjouterPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'modifier/:id',
    loadChildren: () => import('./modifier/modifier.module').then( m => m.ModifierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecteurPageRoutingModule {}
