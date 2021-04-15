import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.page.html',
  styleUrls: ['./tva.page.scss'],
})
export class TvaPage implements OnInit {

  public tvas:any =[];
  constructor(
    private listService:ListsService,
     private router : Router,
     public toastController : ToastController
     ) { }


     getDetails(id){
      this.router.navigate(['parametres/tva/details',id]);
    }

    deleteTva(id){
      this.listService.deleteTva(id).subscribe(res=>{this.tvas})
        }
        delete(i){
          this.tvas.splice(i,1)
        }


        async Alert() {
          const toast = await this.toastController.create({
            message: 'Tva est supprimé !',
            duration: 2000,
            color : "danger"
          });
          toast.present();}

    modify(id){
      this.router.navigate(['parametres/tva/modifier',id])
    }


  ngOnInit() {
    this.listService.getTva().subscribe(data => this.tvas = data)
  }

}
