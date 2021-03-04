import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TVAPageRoutingModule } from './tva-routing.module';

import { TVAPage } from './tva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TVAPageRoutingModule
  ],
  declarations: [TVAPage]
})
export class TVAPageModule {}
