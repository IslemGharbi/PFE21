import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProspectPageRoutingModule } from './gestion-prospect-routing.module';

import { GestionProspectPage } from './gestion-prospect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProspectPageRoutingModule
  ],
  declarations: [GestionProspectPage]
})
export class GestionProspectPageModule {}
