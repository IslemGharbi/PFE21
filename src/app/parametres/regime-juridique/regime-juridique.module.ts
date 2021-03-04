import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegimeJuridiquePageRoutingModule } from './regime-juridique-routing.module';

import { RegimeJuridiquePage } from './regime-juridique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegimeJuridiquePageRoutingModule
  ],
  declarations: [RegimeJuridiquePage]
})
export class RegimeJuridiquePageModule {}
