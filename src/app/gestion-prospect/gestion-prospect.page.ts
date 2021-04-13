import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.page.html',
  styleUrls: ['./gestion-prospect.page.scss'],
})
export class GestionProspectPage implements OnInit {

  public prospects:any =[];
  constructor(private listService:ListsService, private router : Router,public toastController : ToastController) { }

  getDetailsPros(id){
    this.router.navigate(['gestion-prospect/prospect-details',id]);

}

modify(id){
  this.router.navigate(['gestion-prospect/modifier-prospect',id])
}

  delete(i){
    this.prospects.splice(i,1)
  }







  ngOnInit() {

    this.listService.getProspect().subscribe(data => this.prospects = data)
  }
  deletePros(id){
    this.listService.deletePros(id).subscribe(res=>{this.prospects})
      }
      async Alert() {
        const toast = await this.toastController.create({
          message: 'Prospect est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();





  // detailPros(id){
  //   this.listService.prosDetail(id).subscribe(res=>{this.prospects})
  // }

}}
