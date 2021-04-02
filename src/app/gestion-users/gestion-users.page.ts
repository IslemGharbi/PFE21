import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.page.html',
  styleUrls: ['./gestion-users.page.scss'],
})
export class GestionUsersPage implements OnInit {
  public utilisateurs:any =[];

  constructor(private listService:ListsService, private router : Router,public alertController : AlertController ) { }

getDetails(id){
  this.router.navigate(['gestion-users/users-details',id]);


}

modify(id){
  this.router.navigate(['gestion-users/modifier-users',id])
}



async alert(){
  const alert =await this.alertController.create({
header : 'alert',
message : ' Utilisateur est suprimé ',

  });
  await alert.present();
}














  ngOnInit() {this.listService.getUtilisateurs().subscribe(data => this.utilisateurs = data)

  }
  deleteData(id){
this.listService.deleteUsers(id).subscribe(res=>{this.utilisateurs})
  }

  detailUser(id){
    this.listService.userDetail(id).subscribe(res=>{this.utilisateurs})
  }

  delete(i){
    this.utilisateurs.splice(i,1)
  }


}
