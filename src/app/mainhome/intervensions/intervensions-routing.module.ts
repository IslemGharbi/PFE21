import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntervensionsPage } from './intervensions.page';

const routes: Routes = [
  {
    path: '',
    component: IntervensionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntervensionsPageRoutingModule {}
