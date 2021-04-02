import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierUsersPage } from './modifier-users.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierUsersPageRoutingModule {}
