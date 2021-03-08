import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichierAssosiePage } from './fichier-assosie.page';

const routes: Routes = [
  {
    path: '',
    component: FichierAssosiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichierAssosiePageRoutingModule {}
