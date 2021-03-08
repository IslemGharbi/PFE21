import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervensionsPageRoutingModule } from './intervensions-routing.module';

import { IntervensionsPage } from './intervensions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervensionsPageRoutingModule
  ],
  declarations: [IntervensionsPage]
})
export class IntervensionsPageModule {}
