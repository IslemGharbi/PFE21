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
  public inter:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailInter(this.id).subscribe(data =>

      this.inter=data,)
  }

  cancel(){
    this.router.navigate(['parametres/type-intervention'])
  }

  modifyInter(){
    this.myService.modifyInter(this.id, this.inter)
    .subscribe( data => {this.inter= data,
     this.Alert(),
    this.router.navigate(['parametres/type-intervention'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'type intervention est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }

}
