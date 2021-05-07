import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-modifier-prospect',
  templateUrl: './modifier-prospect.page.html',
  styleUrls: ['./modifier-prospect.page.scss'],
})
export class ModifierProspectPage implements OnInit {
  id;
  public addPros:any =[];
user:any={}
pays
regimes
secteurs
monnaies
TVAs
form

  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController,
    private http : HttpClient
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.prosDetail(this.id).subscribe(data =>

      this.addPros=data,
    )
    this.myService.getMonnaie().subscribe(data => this.monnaies = data)
    this.myService.getPays().subscribe(data=> this.pays=data)
    this.myService.getSecteur().subscribe(data=> this.secteurs=data)
    this.myService.getRegime().subscribe(data=> this.regimes=data)
    this.myService.getTva().subscribe(data=> this.TVAs=data)
    this.myService.getForm().subscribe(data=> this.form=data)


    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )

  }




cancel(){
  this.router.navigate(['gestion-prospect'])
}

modifyPros(){
  this.myService.modifyPros(this.id, this.addPros)
  .subscribe( data => {this.addPros= data,
   this.Alert(),
  this.router.navigate(['gestion-prospect'])})


}


async Alert() {
  const toast = await this.toastController.create({
    message: 'Prospect  est modifié !',
    duration: 2000,
    color : "tertiary"
  });
  toast.present();
}}
