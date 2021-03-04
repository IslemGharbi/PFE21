import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleEtOptionPage } from './module-et-option.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleEtOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleEtOptionPageRoutingModule {}
