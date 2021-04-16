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
  public societes:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailSociete(this.id).subscribe(data =>

      this.societes=data,)
  }

  cancel(){
    this.router.navigate(['parametres/type-societe'])
  }

  modifySociete(){
    this.myService.modifySociete(this.id, this.societes)
    .subscribe( data => {this.societes= data,
     this.Alert(),
    this.router.navigate(['parametres/type-societe'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Type societé  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}
