import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsePasswordResetPageRoutingModule } from './response-password-reset-routing.module';

import { ResponsePasswordResetPage } from './response-password-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsePasswordResetPageRoutingModule
  ],
  declarations: [ResponsePasswordResetPage]
})
export class ResponsePasswordResetPageModule {}
