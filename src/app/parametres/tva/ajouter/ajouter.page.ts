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

  tva:any =  {} ;

  constructor(
    private http : HttpClient,
    private router : Router,
    private toastController : ToastController

  ) { }

  ngOnInit() {
  }


  aadTva(){
    return this.http.post('http://127.0.0.1:8000/api/addTva',this.tva).subscribe(
      data => {
        this.Alert(),this.cancel()
      },
    )}

    cancel(){
      this.router.navigate(['parametres/tva'])


    }


      async Alert() {
        const toast = await this.toastController.create({
          message: 'TVA est ajouté !',
          duration: 2000,
          color : "success"
        });
        toast.present();


    }
}
