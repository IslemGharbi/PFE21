import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // canActivate : [AfterLoginService]
  },
  {
    path: '',
    redirectTo: 'mainhome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [BeforeLoginService]
  },
  {
    path: 'prospect',
    loadChildren: () => import('./prospect/prospect.module').then( m => m.ProspectPageModule),
    canActivate : [AfterLoginService]
  },
  {
    path: 'mainhome',
    loadChildren: () => import('./mainhome/mainhome.module').then( m => m.MainhomePageModule)
  },


  {


    path: 'parametres',
    loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule),
    canActivate : [AfterLoginService]
  },
  {
    path: 'gestion-prospect',
    loadChildren: () => import('./gestion-prospect/gestion-prospect.module').then( m => m.GestionProspectPageModule),
    canActivate : [AfterLoginService]
  },
  {
    path: 'gestion-users',
    loadChildren: () => import('./gestion-users/gestion-users.module').then( m => m.GestionUsersPageModule),
    canActivate : [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    loadChildren: () => import('./request-password-reset/request-password-reset.module').then( m => m.RequestPasswordResetPageModule)
  },
  {
    path: 'response-password-reset',
    loadChildren: () => import('./response-password-reset/response-password-reset.module').then( m => m.ResponsePasswordResetPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
