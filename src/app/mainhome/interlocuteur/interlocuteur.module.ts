import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterlocuteurPageRoutingModule } from './interlocuteur-routing.module';

import { InterlocuteurPage } from './interlocuteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterlocuteurPageRoutingModule
  ],
  declarations: [InterlocuteurPage]
})
export class InterlocuteurPageModule {}
