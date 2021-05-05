import { Component, OnInit } from '@angular/core';
import {ListsService} from '../services/lists.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.page.html',
  styleUrls: ['./prospect.page.scss'],
})
export class ProspectPage implements OnInit {

  addPros:any = {}
  constructor(private myService: ListsService,private router:Router ,private http : HttpClient, private toastController : ToastController) { }
  aadPros(){
    return this.http.post('http://127.0.0.1:8000/api/addProspect',this.addPros).subscribe(
      data => {
        this.Alert(),this.cancel()
      },
      error => console.log(error)

    );
  }

  ngOnInit() {

    this.myService.getMonnaie().subscribe(data => this.monnaies = data)
    this.myService.getPays().subscribe(data=> this.pays=data)
    this.myService.getSecteur().subscribe(data=> this.secteurs=data)
    this.myService.getRegime().subscribe(data=> this.regimes=data)
    this.myService.getTva().subscribe(data=> this.TVAs=data)
    this.myService.getForm().subscribe(data=> this.form=data)
  }
pays
regimes
secteurs
monnaies
TVAs
form
cancel(){
  this.router.navigate(['gestion-prospect'])
}
aaddPros(){
  console.log(this.addPros)
}
async Alert() {
  const toast = await this.toastController.create({
    message: 'Prospect est ajouté !',
    duration: 2000,
    color : "success"
  });
  toast.present();
}}
