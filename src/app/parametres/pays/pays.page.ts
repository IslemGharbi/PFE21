import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.page.html',
  styleUrls: ['./pays.page.scss'],
})
export class PaysPage implements OnInit {
user:any={}
  public pays:any =[];
  constructor(
    private listService:ListsService,
     private router : Router,
     public toastController : ToastController,
     public http : HttpClient) { }


     getDetails(id){
      this.router.navigate(['parametres/pays/details',id]);
    }

    deletePays(id){
      this.listService.deletePays(id).subscribe(res=>{this.pays})
        }
        delete(i){
          this.pays.splice(i,1)
        }


        async Alert() {
          const toast = await this.toastController.create({
            message: 'Pays est supprimé !',
            duration: 2000,
            color : "danger"
          });
          toast.present();}

    modify(id){
      this.router.navigate(['parametres/pays/modifier',id])
    }


  ngOnInit() {
    this.listService.getPays().subscribe(data => this.pays = data)
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )
  }

}
