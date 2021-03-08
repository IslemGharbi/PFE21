import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EchangePageRoutingModule } from './echange-routing.module';

import { EchangePage } from './echange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EchangePageRoutingModule
  ],
  declarations: [EchangePage]
})
export class EchangePageModule {}
