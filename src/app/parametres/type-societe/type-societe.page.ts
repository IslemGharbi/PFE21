import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-type-societe',
  templateUrl: './type-societe.page.html',
  styleUrls: ['./type-societe.page.scss'],
})
export class TypeSocietePage implements OnInit {

  public societes:any =[];
  constructor(
    private listService:ListsService,
     private router : Router,
     public toastController : ToastController
     ) { }


     getDetails(id){
      this.router.navigate(['parametres/type-societe/details',id]);
    }

    deleteSociete(id){
      this.listService.deleteSociete(id).subscribe(res=>{this.societes})
        }
        delete(i){
          this.societes.splice(i,1)
        }


        async Alert() {
          const toast = await this.toastController.create({
            message: 'Type Societe est supprimé !',
            duration: 2000,
            color : "danger"
          });
          toast.present();}

    modify(id){
      this.router.navigate(['parametres/type-societe/modifier',id])
    }


  ngOnInit() {
    this.listService.getSociete().subscribe(data => this.societes = data)
  }

}
