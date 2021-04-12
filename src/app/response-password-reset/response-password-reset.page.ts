import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-response-password-reset',
  templateUrl: './response-password-reset.page.html',
  styleUrls: ['./response-password-reset.page.scss'],
})
export class ResponsePasswordResetPage implements OnInit {
   error:any=[];
  loginn:any ={};

  constructor(
    private route : ActivatedRoute,
    private list : ListsService,
    private router :Router,
    private toastController : ToastController

  ) {
route.queryParams.subscribe(params =>{
  this.loginn.resetToken = params['token']
});

   }

   submit(){
this.list.changePassword(this.loginn).subscribe(
  data => this.handleResponse(data),
  error => this.handleError(error)
)
   }


   handleResponse(data){

     this.Alert()



   }

   handleError(error){
     this.error=error.error.errors


   }





  ngOnInit() {}


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Fini ! maintenant connectez-vous avec votre nouveau mot de passe !',

      color : "success",
      buttons: [
        {
          side: 'start',

          text: 'Okay',
          handler: () => {this.router.navigate(['login'])

        }}]
      })
    toast.present();

  }}
