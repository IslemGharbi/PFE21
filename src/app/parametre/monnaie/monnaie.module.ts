import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonnaiePageRoutingModule } from './monnaie-routing.module';

import { MonnaiePage } from './monnaie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonnaiePageRoutingModule
  ],
  declarations: [MonnaiePage]
})
export class MonnaiePageModule {}
