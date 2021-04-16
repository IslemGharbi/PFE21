import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametresPage } from './parametres.page';

const routes: Routes = [
  {
    path: '',
    component: ParametresPage
  },
  {
    path: 'monnaies',
    loadChildren: () => import('./monnaies/monnaies.module').then( m => m.MonnaiesPageModule)
  },
  {
    path: 'tva',
    loadChildren: () => import('./tva/tva.module').then( m => m.TvaPageModule)
  },
  {
    path: 'delegation',
    loadChildren: () => import('./delegation/delegation.module').then( m => m.DelegationPageModule)
  },
  {
    path: 'pays',
    loadChildren: () => import('./pays/pays.module').then( m => m.PaysPageModule)
  },
  {
    path: 'regime',
    loadChildren: () => import('./regime/regime.module').then( m => m.RegimePageModule)
  },
  {
    path: 'regime-juridique',
    loadChildren: () => import('./regime-juridique/regime-juridique.module').then( m => m.RegimeJuridiquePageModule)
  },
  {
    path: 'secteur',
    loadChildren: () => import('./secteur/secteur.module').then( m => m.SecteurPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'etat-offre',
    loadChildren: () => import('./etat-offre/etat-offre.module').then( m => m.EtatOffrePageModule)
  },
  {
    path: 'etat-commande',
    loadChildren: () => import('./etat-commande/etat-commande.module').then( m => m.EtatCommandePageModule)
  },
  {
    path: 'etat-intervention',
    loadChildren: () => import('./etat-intervention/etat-intervention.module').then( m => m.EtatInterventionPageModule)
  },
  {
    path: 'etat-planning',
    loadChildren: () => import('./etat-planning/etat-planning.module').then( m => m.EtatPlanningPageModule)
  },
  {
    path: 'type-intervention',
    loadChildren: () => import('./type-intervention/type-intervention.module').then( m => m.TypeInterventionPageModule)
  },
  {
    path: 'prestation',
    loadChildren: () => import('./prestation/prestation.module').then( m => m.PrestationPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'module-et-option',
    loadChildren: () => import('./module-et-option/module-et-option.module').then( m => m.ModuleEtOptionPageModule)
  },
  {
    path: 'type-societe',
    loadChildren: () => import('./type-societe/type-societe.module').then( m => m.TypeSocietePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametresPageRoutingModule {}
