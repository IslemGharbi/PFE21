import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  inMonnaie(){
    this.router.navigate(['parametres/monnaies'])
  }
inTVA(){
  this.router.navigate(['parametres/tva'])
}
inDelegation(){
  this.router.navigate(['parametres/delegation'])
}
inPays(){
  this.router.navigate(['parametres/pays'])
}
inRegime(){
  this.router.navigate(['parametres/regime'])
}
inRegimeJuridique(){
  this.router.navigate(['parametres/regime-juridique'])
}
inSecteur(){
  this.router.navigate(['parametres/secteur'])
}
inProfil(){
  this.router.navigate(['parametres/profil'])
}
inOffre(){
  this.router.navigate(['parametres/etat-offre'])
}
inEtatCommande(){
  this.router.navigate(['parametres/etat-commande'])
}
inEtatIntervention(){
  this.router.navigate(['parametres/etat-intervention'])
}

inTypeIntervention(){
  this.router.navigate(['parametres/type-intervention'])
}
inPrestation(){
  this.router.navigate(['parametres/prestation'])
}
inProduit(){
  this.router.navigate(['parametres/produits'])
}
inModule(){
  this.router.navigate(['parametres/module-et-option'])
}
inEtatPlanning(){
  this.router.navigate(['parametres/etat-planning'])
}
inTypeSociete(){
  this.router.navigate(['parametres/type-societe'])
}
}
