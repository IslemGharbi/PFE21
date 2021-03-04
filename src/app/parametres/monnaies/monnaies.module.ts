import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonnaiesPageRoutingModule } from './monnaies-routing.module';

import { MonnaiesPage } from './monnaies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonnaiesPageRoutingModule
  ],
  declarations: [MonnaiesPage]
})
export class MonnaiesPageModule {}
