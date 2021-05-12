import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffresPage } from './offres.page';

const routes: Routes = [
  {
    path: '',
    component: OffresPage
  },
  {
    path: 'template/:id',
    loadChildren: () => import('./template/template.module').then( m => m.TemplatePageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresPageRoutingModule {}
