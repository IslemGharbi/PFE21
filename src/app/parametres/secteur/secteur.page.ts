import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-secteur',
  templateUrl: './secteur.page.html',
  styleUrls: ['./secteur.page.scss'],
})
export class SecteurPage implements OnInit {

  public secteurs:any =[];
  constructor(
    private listService:ListsService,
    private router : Router,
    public toastController : ToastController
  ) { }

  getDetails(id){
    this.router.navigate(['parametres/secteur/details',id]);
  }

  deleteSecteur(id){
    this.listService.deleteSecteur(id).subscribe(res=>{this.secteurs})
      }
      delete(i){
        this.secteurs.splice(i,1)
      }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Secteur est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();}

  modify(id){
    this.router.navigate(['parametres/secteur/modifier',id])
  }


  ngOnInit() {
    this.listService.getSecteur().subscribe(data => this.secteurs = data)
  }

}
