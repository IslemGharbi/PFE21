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
  pros: any = [];


  constructor(private router : Router,private auth : AuthService,private token : TokenService,private toastController : ToastController,private listService : ListsService) { }

  ngOnInit() {
this.auth.authStatus.subscribe(value => this.loggedIn=value);
this.listService.getProspect().subscribe(data => this.pros=data)

  }
inCommande(){
this.router.navigate(['mainhome/commandes'])
}
inContact(){
  this.router.navigate(['mainhome/contacts'])
}
inEchange(){
  this.router.navigate(['mainhome/echange'])
}
inFich(){
  this.router.navigate(['mainhome/fichier-assosie'])
}
inInterlocuteur(){
  this.router.navigate(['mainhome/interlocuteur'])
}
inIntervension(){
  this.router.navigate(['mainhome/intervensions'])
}
inOffre(){
  this.router.navigate(['mainhome/offres'])
}
inPlaning(){
  this.router.navigate(['mainhome/planings'])
}
inProduit(){
  this.router.navigate(['mainhome/produits'])
}
inLogin(){
  this.router.navigate(['login'])
}


logout(event:MouseEvent){
  this.token.remove();
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







}
