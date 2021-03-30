import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addUser:any =  {} ;
  constructor(private router : Router,private http :HttpClient,private alertController : AlertController) {}
  cancel(){
    this.router.navigate(['gestion-users'])
  }
aaddUser(){
  return this.http.post('http://127.0.0.1:8000/api/addUtilisateur',this.addUser).subscribe(
    data => console.log(data),
    error => console.log(error)

  )
}
async alerts(){
  const alert =await this.alertController.create({
header : 'alert',
message : ' Utilisateur est ajouté ',

  });
  await alert.present();}

}
