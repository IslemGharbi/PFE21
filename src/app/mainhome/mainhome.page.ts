import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';
import { ListsService } from '../services/lists.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.page.html',
  styleUrls: ['./mainhome.page.scss'],
})
export class MainhomePage implements OnInit {
  public loggedIn : boolean;
  select ='Home';
  offres:any={}
  produits:any={}
  prospects:any={}
textBus=''
user : any = {}



  constructor(
    private router : Router,
    private auth : AuthService,
    private Token : TokenService,
    private toastController : ToastController,
    private listService : ListsService,
    private alertController : AlertController,
    private http : HttpClient
    ) { }

  ngOnInit() {
this.auth.authStatus.subscribe(value => this.loggedIn=value);

const headers = new HttpHeaders({
  'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
})

this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
  result=> this.user = result
)
this.listService.getOffre().subscribe(data => this.offres = data)
this.listService.getProduit().subscribe(data => this.produits=data)
this.listService.getProspect().subscribe(data => this.prospects=data)
  }

inLogin(){
  this.router.navigate(['login'])
}


logout(event:MouseEvent){
  this.Token.remove();
  event.preventDefault();
  this.auth.changeAuthStatus(false);

}

async Alert() {
  const toast = await this.toastController.create({
    message: 'Logged out!',
    duration: 2000,
    color : "danger"
  });
  toast.present()}


  getDetails(id){
    this.router.navigate(['mainhome/offres/details',id]);

  }
  async alert() {
    const toast = await this.toastController.create({
      message: 'Utilisateur est supprimé !',
      duration: 2000,
      color : "danger"
    });
    toast.present();
  }


  deleteData(id){
    this.listService.deleteOffre(id).subscribe(res=>{this.offres})
      }
      delete(i){
        this.offres.splice(i,1)
      }
      searsh(event:any){

        this.textBus = event.detail.value;
         }

         async presentAlertConfirm(id,i) {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Attention !',
            message: 'Etes vous sur de suprimer cette offre ?!',
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
                  this.deleteData(id),this.delete(i),this.alert()

                }
              }
            ]
          });
          await alert.present();




        }
}


