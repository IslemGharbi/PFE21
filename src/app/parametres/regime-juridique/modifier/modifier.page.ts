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
  public form:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailForm(this.id).subscribe(data =>

      this.form=data,)
  }

  cancel(){
    this.router.navigate(['parametres/regime-juridique'])
  }

  modifyForm(){
    this.myService.modifyForm(this.id, this.form)
    .subscribe( data => {this.form= data,
     this.Alert(),
    this.router.navigate(['parametres/regime-juridique'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'forme juridique  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }

}
