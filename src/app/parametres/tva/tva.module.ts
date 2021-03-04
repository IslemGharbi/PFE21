import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvaPageRoutingModule } from './tva-routing.module';

import { TvaPage } from './tva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvaPageRoutingModule
  ],
  declarations: [TvaPage]
})
export class TvaPageModule {}
