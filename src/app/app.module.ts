import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {​​ HttpClientModule }​​ from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, SnotifyModule,FormsModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [  { provide: 'SnotifyToastConfig', useValue: ToastDefaults},SnotifyService,{ provide: RouteReuseStrategy,   useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
