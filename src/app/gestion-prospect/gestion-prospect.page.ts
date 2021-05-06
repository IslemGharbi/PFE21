import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.page.html',
  styleUrls: ['./gestion-prospect.page.scss'],
})
export class GestionProspectPage implements OnInit {

  public prospects:any =[];
  textBus='';
  user:any={}
  constructor(private listService:ListsService, private http : HttpClient,private router : Router,public toastController : ToastController, private alertController : AlertController) { }

  getDetailsPros(id){
    this.router.navigate(['gestion-prospect/prospect-details',id]);

}

modify(id){
  this.router.navigate(['gestion-prospect/modifier-prospect',id])
}

  delete(i){
    this.prospects.splice(i,1)
  }


  searsh(event:any){

    this.textBus = event.detail.value;
     }




  ngOnInit() {

    this.listService.getProspect().subscribe(data => this.prospects = data)
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )

  }


  deletePros(id){
    this.listService.deletePros(id).subscribe(res=>{this.prospects})
      }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Prospect est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();}


        async presentAlertConfirm(id,i) {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Attention !',
            message: 'Etes vous sur de suprimer ce Prospect ?!',
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
                  this.deletePros(id),this.delete(i),this.Alert()

                }
              }
            ]
          });
          await alert.present();




        }


}
