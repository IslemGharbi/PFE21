import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.page.html',
  styleUrls: ['./mainhome.page.scss'],
})
export class MainhomePage implements OnInit {
  public loggedIn : boolean;
  select ='Home';
  constructor(private router : Router,private auth : AuthService,private token : TokenService,private alertController : AlertController) { }

  ngOnInit() {
this.auth.authStatus.subscribe(value => this.loggedIn=value);

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

async alerts(){
  const alert =await this.alertController.create({
header : 'alert',
message: 'logged out'

  });
  await alert.present();}
}
