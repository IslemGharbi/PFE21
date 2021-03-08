import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhomePage } from './mainhome.page';

const routes: Routes = [
  {
    path: '',
    component: MainhomePage
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'interlocuteur',
    loadChildren: () => import('./interlocuteur/interlocuteur.module').then( m => m.InterlocuteurPageModule)
  },
  {
    path: 'echange',
    loadChildren: () => import('./echange/echange.module').then( m => m.EchangePageModule)
  },
  {
    path: 'offres',
    loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule)
  },
  {
    path: 'planings',
    loadChildren: () => import('./plannings/plannings.module').then( m => m.PlanningsPageModule)
  },
  {
    path: 'intervensions',
    loadChildren: () => import('./intervensions/intervensions.module').then( m => m.IntervensionsPageModule)
  },
  {
    path: 'fichier-assosie',
    loadChildren: () => import('./fichier-assosie/fichier-assosie.module').then( m => m.FichierAssosiePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainhomePageRoutingModule {}
