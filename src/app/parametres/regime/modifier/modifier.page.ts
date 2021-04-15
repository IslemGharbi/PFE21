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
  public regime:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailRegime(this.id).subscribe(data =>

      this.regime=data,)
  }

  cancel(){
    this.router.navigate(['parametres/regime'])
  }

  modifyRegime(){
    this.myService.modifyRegime(this.id, this.regime)
    .subscribe( data => {this.regime= data,
     this.Alert(),
    this.router.navigate(['parametres/regime'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Regime  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }

}
