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
  public monnaies:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailMonnaie(this.id).subscribe(data =>

      this.monnaies=data,)
  }

  cancel(){
    this.router.navigate(['parametres/monnaies'])
  }

  modifyMonnaie(){
    this.myService.modifyMonnaie(this.id, this.monnaies)
    .subscribe( data => {this.monnaies= data,
     this.Alert(),
    this.router.navigate(['parametres/monnaies'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Monnaie  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}

