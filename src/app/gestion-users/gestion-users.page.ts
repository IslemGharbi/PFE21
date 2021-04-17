import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AlertController, ToastController } from '@ionic/angular';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.page.html',
  styleUrls: ['./gestion-users.page.scss'],
})
export class GestionUsersPage implements OnInit {
  public utilisateurs:any =[];
textBus = '';


  constructor(
    private listService:ListsService, private router : Router,public toastController : ToastController,private alertController : AlertController
    ) {

    }

getDetails(id){
  this.router.navigate(['gestion-users/users-details',id]);


}

modify(id){
  this.router.navigate(['gestion-users/modifier-users',id])
}



async Alert() {
  const toast = await this.toastController.create({
    message: 'Utilisateur est supprimé !',
    duration: 2000,
    color : "danger"
  });
  toast.present();
}


  ngOnInit() {
      this.get()
  }


get(){
  this.listService.getUtilisateurs().subscribe(data => this.utilisateurs = data)
}





  deleteData(id){
this.listService.deleteUsers(id).subscribe(res=>{this.utilisateurs})
  }



  delete(i){
    this.utilisateurs.splice(i,1)
  }


  searsh(event:any){

this.textBus = event.detail.value;
 }


 async presentAlertConfirm(id,i) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Attention !',
    message: 'Etes vous sur de suprimer cet utilisateur !',
    buttons: [
      {
        text: 'Non',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
         ;
        }
      }, {
        text: 'Oui',
        handler: () => {
          this.deleteData(id),this.delete(i),this.Alert()

        }
      }
    ]
  });
  await alert.present();




}

}

