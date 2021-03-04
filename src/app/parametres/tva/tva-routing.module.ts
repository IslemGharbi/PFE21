import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvaPage } from './tva.page';

const routes: Routes = [
  {
    path: '',
    component: TvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvaPageRoutingModule {}
