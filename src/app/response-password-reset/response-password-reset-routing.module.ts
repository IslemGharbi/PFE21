import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsePasswordResetPage } from './response-password-reset.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsePasswordResetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsePasswordResetPageRoutingModule {}
