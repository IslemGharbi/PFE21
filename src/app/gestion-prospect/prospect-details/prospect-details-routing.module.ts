import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectDetailsPage } from './prospect-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectDetailsPageRoutingModule {}
