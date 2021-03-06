
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-modifier-users',
  templateUrl: './modifier-users.page.html',
  styleUrls: ['./modifier-users.page.scss'],
})
export class ModifierUsersPage implements OnInit {
user:any={}
  id;
  public utilisateurs:any =[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listservice : ListsService,
    public toastController: ToastController,
    public http : HttpClient
    ) { }
    async Alert() {
      const toast = await this.toastController.create({
        message: 'Utilisateur est modifié !',
        duration: 2000,
        color : "tertiary"
      });
      toast.present();
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.userDetail(this.id).subscribe(data =>

      this.utilisateurs=data,
    )

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )

  }
modifyUser(){
  this.listservice.modifyUser(this.id, this.utilisateurs)
  .subscribe( data => {this.utilisateurs= data,
    this.Alert(),
  this.router.navigate(['gestion-users'])})


}



}
