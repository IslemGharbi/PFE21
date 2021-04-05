import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from '../services/lists.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginn:any ={};
  public error = null

  constructor(private router : Router,private http : HttpClient,private ListsService : ListsService,private token : TokenService) { }
  login(){
   this.ListsService.login(this.loginn).subscribe(
     data => this.dataHandle(data),
     error => this.errorHandle(error)

   )
  }
  errorHandle(error){
     this.error=error.error.error;
  }

  dataHandle(data){
this.token.handle(data.access_token)
  }

  ngOnInit() {
  }

}
