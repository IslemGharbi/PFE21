import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TVAPage } from './tva.page';

const routes: Routes = [
  {
    path: '',
    component: TVAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TVAPageRoutingModule {}
