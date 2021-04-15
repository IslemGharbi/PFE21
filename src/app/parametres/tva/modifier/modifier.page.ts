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
  public tvas:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailTva(this.id).subscribe(data =>

      this.tvas=data,)
  }

  cancel(){
    this.router.navigate(['parametres/tva'])
  }

  modifyTva(){
    this.myService.modifyTva(this.id, this.tvas)
    .subscribe( data => {this.tvas= data,
     this.Alert(),
    this.router.navigate(['parametres/tva'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'TVA  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}
