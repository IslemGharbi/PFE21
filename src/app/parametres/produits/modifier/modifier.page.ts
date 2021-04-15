import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {


  id;
  public produit:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailProduit(this.id).subscribe(data =>

      this.produit=data,)
  }

  cancel(){
    this.router.navigate(['parametres/produits'])
  }

  modifyProduit(){
    this.myService.modifyProduit(this.id, this.produit)
    .subscribe( data => {this.produit= data,
     this.Alert(),
    this.router.navigate(['parametres/produits'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Produit  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}
