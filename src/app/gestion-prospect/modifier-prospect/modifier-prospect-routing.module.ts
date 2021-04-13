import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierProspectPage } from './modifier-prospect.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierProspectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierProspectPageRoutingModule {}
