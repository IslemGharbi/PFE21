import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addUser:any =  {} ;
  constructor(private router : Router,private http :HttpClient) {}
  cancel(){
    this.router.navigate(['mainhome'])
  }
aaddUser(){
  return this.http.post('http://127.0.0.1:8000/api/addUtilisateur?',this.addUser).subscribe(
    data => console.log(data),
    error => console.log(error)

  )
}

}
