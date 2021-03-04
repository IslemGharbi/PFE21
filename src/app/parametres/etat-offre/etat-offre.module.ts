import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatOffrePageRoutingModule } from './etat-offre-routing.module';

import { EtatOffrePage } from './etat-offre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatOffrePageRoutingModule
  ],
  declarations: [EtatOffrePage]
})
export class EtatOffrePageModule {}
