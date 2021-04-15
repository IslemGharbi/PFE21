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
  public delegation:any =[];
  constructor(
    private myService : ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.detailDelegation(this.id).subscribe(data =>

      this.delegation=data,)
  }

  cancel(){
    this.router.navigate(['parametres/delegation'])
  }

  modifyDelegation(){
    this.myService.modifyDelegation(this.id, this.delegation)
    .subscribe( data => {this.delegation= data,
     this.Alert(),
    this.router.navigate(['parametres/delegation'])})


  }


  async Alert() {
    const toast = await this.toastController.create({
      message: 'Delegation  est modifié !',
      duration: 2000,
      color : "tertiary"
    });
    toast.present();
  }}
