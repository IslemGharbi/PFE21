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


  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.prosDetail(this.id).subscribe(data =>

      this.addPros=data,
    )
  }

  pays=this.myService.pays
regimes=this.myService.regimes
secteurs=this.myService.secteurs
monnaies=this.myService.monnaies


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
