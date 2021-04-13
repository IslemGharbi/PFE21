import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectDetailsPageRoutingModule } from './prospect-details-routing.module';

import { ProspectDetailsPage } from './prospect-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectDetailsPageRoutingModule
  ],
  declarations: [ProspectDetailsPage]
})
export class ProspectDetailsPageModule {}
