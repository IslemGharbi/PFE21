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
  public pays:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailPays(this.id).subscribe(data =>

      this.pays=data,)
  }

  cancel(){
    this.router.navigate(['parametres/pays'])
  }

  modifyPays(){
    this.myService.modifyPays(this.id, this.pays)
    .subscribe( data => {this.pays= data,
     this.Alert(),
    this.router.navigate(['parametres/pays'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Pays  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}

