import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatPlanningPageRoutingModule } from './etat-planning-routing.module';

import { EtatPlanningPage } from './etat-planning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatPlanningPageRoutingModule
  ],
  declarations: [EtatPlanningPage]
})
export class EtatPlanningPageModule {}
