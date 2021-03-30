import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionUsersPage } from './gestion-users.page';

const routes: Routes = [
  {
    path: '',
    component: GestionUsersPage
  },
  {
    path: 'users-details/:id',
    loadChildren: () => import('./users-details/users-details.module').then( m => m.UsersDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionUsersPageRoutingModule {}
