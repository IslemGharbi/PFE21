import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.page.html',
  styleUrls: ['./template.page.scss'],
})
export class TemplatePage implements OnInit {
  id;
  value
  produit
  prix
  pack
  remise
  offre:any={}
  public addPros:any =[];
  constructor(
    private route :ActivatedRoute,
    private myService : ListsService,
    private toastController : ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.prosDetail(this.id).subscribe(data =>

      this.addPros=data,
    )

    this.myService.getProduit().subscribe(
      data => this.produit= data
    )

  }
  calculer(){

  }
  add(x,y){
    return (parseFloat(x)+parseFloat(y))
  }


  addOffre(){
    console.log(this.offre)
    return this.myService.ajouterOffre(this.offre).subscribe(
      data =>{
        this.alert(),this.router.navigate(['mainhome'])

      }

    )

  }
  async alert() {
    const toast = await this.toastController.create({
      message: 'Offre est ajouté !',
      duration: 2000,
      color : "success"
    });
    toast.present();}
}
