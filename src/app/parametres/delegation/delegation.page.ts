import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-delegation',
  templateUrl: './delegation.page.html',
  styleUrls: ['./delegation.page.scss'],
})
export class DelegationPage implements OnInit {
user:any={}
  public delegations:any =[];
  constructor(
    private listService:ListsService,
     private router : Router,
     public toastController : ToastController,
     public http : HttpClient) { }


     getDetails(id){
      this.router.navigate(['parametres/delegation/details',id]);
    }

    deleteDelegation(id){
      this.listService.deleteDelegation(id).subscribe(res=>{this.delegations})
        }
        delete(i){
          this.delegations.splice(i,1)
        }


        async Alert() {
          const toast = await this.toastController.create({
            message: 'Delegation est supprimé !',
            duration: 2000,
            color : "danger"
          });
          toast.present();}

    modify(id){
      this.router.navigate(['parametres/delegation/modifier',id])
    }


  ngOnInit() {
    this.listService.getDelegation().subscribe(data => this.delegations = data)
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )
  }

}

