import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'mainhome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'prospect',
    loadChildren: () => import('./prospect/prospect.module').then( m => m.ProspectPageModule)
  },
  {
    path: 'mainhome',
    loadChildren: () => import('./mainhome/mainhome.module').then( m => m.MainhomePageModule)
  },


  {


    path: 'parametres',
    loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
