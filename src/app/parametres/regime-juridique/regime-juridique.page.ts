import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-regime-juridique',
  templateUrl: './regime-juridique.page.html',
  styleUrls: ['./regime-juridique.page.scss'],
})
export class RegimeJuridiquePage implements OnInit {

  public forms:any =[];
  constructor(
    private listService:ListsService,
    private router : Router,
    public toastController : ToastController
  ) { }

  getDetails(id){
    this.router.navigate(['parametres/regime-juridique/details',id]);
  }

  deleteForm(id){
    this.listService.deleteForm(id).subscribe(res=>{this.forms})
      }
      delete(i){
        this.forms.splice(i,1)
      }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Form juridique est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();}

  modify(id){
    this.router.navigate(['parametres/regime-juridique/modifier',id])
  }


  ngOnInit() {
    this.listService.getForm().subscribe(data => this.forms = data)
  }

}
