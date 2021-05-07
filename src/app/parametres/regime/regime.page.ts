import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-regime',
  templateUrl: './regime.page.html',
  styleUrls: ['./regime.page.scss'],
})
export class RegimePage implements OnInit {
  public regimes:any =[];
  user
  constructor(
    private listService:ListsService,
    private router : Router,
    public toastController : ToastController,
    public http : HttpClient
  ) { }

  getDetails(id){
    this.router.navigate(['parametres/regime/details',id]);
  }

  deleteMonnaie(id){
    this.listService.deleteRegime(id).subscribe(res=>{this.regimes})
      }
      delete(i){
        this.regimes.splice(i,1)
      }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'regime est supprimé !',
          duration: 2000,
          color : "danger"
        });
        toast.present();}

  modify(id){
    this.router.navigate(['parametres/regime/modifier',id])
  }


  ngOnInit() {
    this.listService.getRegime().subscribe(data => this.regimes = data)
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )
  }

}
