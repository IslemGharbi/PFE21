import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatInterventionPageRoutingModule } from './etat-intervention-routing.module';

import { EtatInterventionPage } from './etat-intervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatInterventionPageRoutingModule
  ],
  declarations: [EtatInterventionPage]
})
export class EtatInterventionPageModule {}
