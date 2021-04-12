import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.page.html',
  styleUrls: ['./request-password-reset.page.scss'],
})
export class RequestPasswordResetPage implements OnInit {
  loginn:any ={};
  constructor(
    private listService : ListsService,
    private toastController : ToastController,
    private loadingController : LoadingController

    ) { }

  ngOnInit() {
  }

  password(){
    this.Loading()
    this.listService.SendPasswordResetLink(this.loginn).subscribe(
      data => this.handleResponse(data),
      error => (error.error.error)
    )
  }

  handleResponse(res){

    this.Alert(res)
    this.loginn.email= null
  }

  async Alert(res) {
    const toast = await this.toastController.create({
      message: res.data,
      duration: 5000,
      color : "success"
    });
    toast.present();

}



async Loading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 3000
  });
  await loading.present()}}
