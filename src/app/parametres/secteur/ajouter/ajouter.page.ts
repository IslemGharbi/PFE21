import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  secteur:any =  {} ;

  constructor(
    private http : HttpClient,
    private router : Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
  }

  aadSecteur(){
    return this.http.post('http://127.0.0.1:8000/api/addSecteur',this.secteur).subscribe(
      data => {
        this.Alert(),this.cancel()
      },
    )}

    cancel(){
      this.router.navigate(['parametres/secteur'])


    }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Secteur est ajouté !',
          duration: 2000,
          color : "success"
        });
        toast.present();


    }


}
