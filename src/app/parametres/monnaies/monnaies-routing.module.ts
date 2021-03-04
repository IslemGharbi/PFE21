import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonnaiesPage } from './monnaies.page';

const routes: Routes = [
  {
    path: '',
    component: MonnaiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonnaiesPageRoutingModule {}
