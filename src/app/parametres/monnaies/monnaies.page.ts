import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-monnaies',
  templateUrl: './monnaies.page.html',
  styleUrls: ['./monnaies.page.scss'],
})
export class MonnaiesPage implements OnInit {
  public monnaies:any =[];
  constructor(
    private listService:ListsService,
     private router : Router,
     public toastController : ToastController) { }


     getDetails(id){
      this.router.navigate(['parametres/monnaies/details',id]);
    }

    deleteMonnaie(id){
      this.listService.deleteMonnaie(id).subscribe(res=>{this.monnaies})
        }
        delete(i){
          this.monnaies.splice(i,1)
        }


        async Alert() {
          const toast = await this.toastController.create({
            message: 'Monnaie est supprimé !',
            duration: 2000,
            color : "danger"
          });
          toast.present();}

    modify(id){
      this.router.navigate(['parametres/monnaies/modifier',id])
    }


  ngOnInit() {
    this.listService.getMonnaie().subscribe(data => this.monnaies = data)
  }

}
