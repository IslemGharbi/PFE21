import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierUsersPageRoutingModule } from './modifier-users-routing.module';

import { ModifierUsersPage } from './modifier-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierUsersPageRoutingModule
  ],
  declarations: [ModifierUsersPage]
})
export class ModifierUsersPageModule {}
