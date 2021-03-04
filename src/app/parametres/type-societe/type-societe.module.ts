import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeSocietePageRoutingModule } from './type-societe-routing.module';

import { TypeSocietePage } from './type-societe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeSocietePageRoutingModule
  ],
  declarations: [TypeSocietePage]
})
export class TypeSocietePageModule {}
