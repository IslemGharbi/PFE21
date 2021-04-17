import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionUsersPageRoutingModule } from './gestion-users-routing.module';

import { GestionUsersPage } from './gestion-users.page';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionUsersPageRoutingModule,
    PipesModule

  ],
  declarations: [GestionUsersPage]
})
export class GestionUsersPageModule {}
