import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
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

  constructor(private toastController : ToastController,private auth : AuthService ,private router : Router,private http : HttpClient,private ListsService : ListsService,private token : TokenService) { }
  login(){
   this.ListsService.login(this.loginn).subscribe(
     data =>{ this.dataHandle(data),
      this.router.navigateByUrl("mainhome"),this.Alert()},

     error => this.errorHandle(error)

   )
  }
  errorHandle(error){
     this.error=error.error.error;
  }

  dataHandle(data){
    localStorage.setItem('token',data.access_token)

this.token.handle(data.access_token)
this.auth.changeAuthStatus(true);
  }

  async Alert() {
    const toast = await this.toastController.create({
      message: 'login avec succès !',
      duration: 2000,
      color : "success"
    });
    toast.present();}


  ngOnInit() {
  }

}
