import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  id;
  public secteur:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailSecteur(this.id).subscribe(data =>

      this.secteur=data,)
  }

  cancel(){
    this.router.navigate(['parametres/secteur'])
  }

  modifySecteur(){
    this.myService.modifySecteur(this.id, this.secteur)
    .subscribe( data => {this.secteur= data,
     this.Alert(),
    this.router.navigate(['parametres/secteur'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Secteur  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}

