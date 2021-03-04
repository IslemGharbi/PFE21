import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeSocietePage } from './type-societe.page';

const routes: Routes = [
  {
    path: '',
    component: TypeSocietePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeSocietePageRoutingModule {}
