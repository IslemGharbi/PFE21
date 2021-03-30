import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionUsersPageRoutingModule } from './gestion-users-routing.module';

import { GestionUsersPage } from './gestion-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionUsersPageRoutingModule
  ],
  declarations: [GestionUsersPage]
})
export class GestionUsersPageModule {}
