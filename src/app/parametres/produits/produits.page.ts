import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {
user:any={}
  public produits:any =[];
  constructor(
    private listService:ListsService,
    private router : Router,
    public toastController : ToastController,
    public http : HttpClient
  ) { }

  getDetails(id){
    this.router.navigate(['parametres/produits/details',id]);
  }

  deleteProduit(id){
    this.listService.deleteProduit(id).subscribe(res=>{this.produits})
      }
      delete(i){
        this.produits.splice(i,1)
      }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Produit est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();}

  modify(id){
    this.router.navigate(['parametres/produits/modifier',id])
  }


  ngOnInit() {
    this.listService.getProduit().subscribe(data => this.produits = data)
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )
  }
}
