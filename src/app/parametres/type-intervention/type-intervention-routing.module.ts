import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeInterventionPage } from './type-intervention.page';

const routes: Routes = [
  {
    path: '',
    component: TypeInterventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeInterventionPageRoutingModule {}
