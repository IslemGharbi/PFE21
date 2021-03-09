import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginn:any ={}

  constructor(private router : Router,private http : HttpClient) { }
  login(){
    console.log(this.loginn)
  }

  ngOnInit() {
  }

}
