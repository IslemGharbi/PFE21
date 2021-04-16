import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-type-intervention',
  templateUrl: './type-intervention.page.html',
  styleUrls: ['./type-intervention.page.scss'],
})
export class TypeInterventionPage implements OnInit {

  public inters:any =[];
  constructor(
    private listService:ListsService,
    private router : Router,
    public toastController : ToastController
  ) { }

  getDetails(id){
    this.router.navigate(['parametres/type-intervention/details',id]);
  }

  deleteInter(id){
    this.listService.deleteInter(id).subscribe(res=>{this.inters})
      }
      delete(i){
        this.inters.splice(i,1)
      }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Type intervention est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();}

  modify(id){
    this.router.navigate(['parametres/type-intervention/modifier',id])
  }


  ngOnInit() {
    this.listService.getInter().subscribe(data => this.inters = data)
  }

}
