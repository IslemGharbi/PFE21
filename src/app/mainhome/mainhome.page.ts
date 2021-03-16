import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.page.html',
  styleUrls: ['./mainhome.page.scss'],
})
export class MainhomePage implements OnInit {
  select ='Produit';
  constructor(private router : Router) { }

  ngOnInit() {
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


}
