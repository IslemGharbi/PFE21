import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addUser:any =  {} ;
  constructor(private router : Router) {}
  cancel(){
    this.router.navigate(['mainhome'])
  }
aaddUser(){
console.log(this.addUser)
}

}
