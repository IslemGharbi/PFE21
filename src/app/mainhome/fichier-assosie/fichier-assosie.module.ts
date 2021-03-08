import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichierAssosiePageRoutingModule } from './fichier-assosie-routing.module';

import { FichierAssosiePage } from './fichier-assosie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichierAssosiePageRoutingModule
  ],
  declarations: [FichierAssosiePage]
})
export class FichierAssosiePageModule {}
