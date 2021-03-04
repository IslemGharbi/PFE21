import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeInterventionPageRoutingModule } from './type-intervention-routing.module';

import { TypeInterventionPage } from './type-intervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeInterventionPageRoutingModule
  ],
  declarations: [TypeInterventionPage]
})
export class TypeInterventionPageModule {}
