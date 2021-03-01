import { Component } from '@angular/core';
import { LoginPage } from './login/login.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router : Router) {}
  openLog(){
    this.router.navigate(['login'])
  }
  add(){
    this.router.navigate(['home'])
  }
  addpros(){
    this.router.navigate(['prospect'])
  }
}
