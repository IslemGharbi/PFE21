import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierProspectPageRoutingModule } from './modifier-prospect-routing.module';

import { ModifierProspectPage } from './modifier-prospect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierProspectPageRoutingModule
  ],
  declarations: [ModifierProspectPage]
})
export class ModifierProspectPageModule {}
