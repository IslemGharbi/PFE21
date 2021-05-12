import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addUser:any ={} ;
  public error:any =[];
  user:any={}
  constructor(private router : Router,private http :HttpClient,private toastController : ToastController) {}




  cancel(){
    this.router.navigate(['gestion-users'])
  }
aaddUser(){
  return this.http.post('http://127.0.0.1:8000/api/auth/signup',this.addUser).subscribe(
    data => {
      this.Alert(),this.cancel()
    },
    error => this.handleError(error)

  );
}



handleError(error){
  this.error= error.error.errors;
}

async Alert() {
  const toast = await this.toastController.create({
    message: 'Utilisateur est ajouté !',
    duration: 2000,
    color : "success"
  });
  toast.present();}
  ngOnInit(){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )

  }

}
