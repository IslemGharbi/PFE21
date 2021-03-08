import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterlocuteurPage } from './interlocuteur.page';

const routes: Routes = [
  {
    path: '',
    component: InterlocuteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterlocuteurPageRoutingModule {}
