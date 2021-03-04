import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecteurPageRoutingModule } from './secteur-routing.module';

import { SecteurPage } from './secteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecteurPageRoutingModule
  ],
  declarations: [SecteurPage]
})
export class SecteurPageModule {}
