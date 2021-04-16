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

  inter:any =  {} ;

  constructor(
    private http : HttpClient,
    private router : Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
  }

  aadInter(){
    return this.http.post('http://127.0.0.1:8000/api/addIntervention',this.inter).subscribe(
      data => {
        this.Alert(),this.cancel()
      },
    )}

    cancel(){
      this.router.navigate(['parametres/type-intervention'])


    }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'Type intervention est ajouté !',
          duration: 2000,
          color : "success"
        });
        toast.present();


    }

}

