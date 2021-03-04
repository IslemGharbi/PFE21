import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleEtOptionPageRoutingModule } from './module-et-option-routing.module';

import { ModuleEtOptionPage } from './module-et-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleEtOptionPageRoutingModule
  ],
  declarations: [ModuleEtOptionPage]
})
export class ModuleEtOptionPageModule {}
