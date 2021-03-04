import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatCommandePageRoutingModule } from './etat-commande-routing.module';

import { EtatCommandePage } from './etat-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatCommandePageRoutingModule
  ],
  declarations: [EtatCommandePage]
})
export class EtatCommandePageModule {}
