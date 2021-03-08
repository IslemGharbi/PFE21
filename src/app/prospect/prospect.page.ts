import { Component, OnInit } from '@angular/core';
import {ListsService} from '../services/lists.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.page.html',
  styleUrls: ['./prospect.page.scss'],
})
export class ProspectPage implements OnInit {

  addPros:any = {}
  constructor(private myService: ListsService,private router:Router ) { }

  ngOnInit() {
  }
pays=this.myService.pays
regimes=this.myService.regimes
secteurs=this.myService.secteurs
monnaies=this.myService.monnaies
cansel(){
  this.router.navigate(['mainhome'])
}
aaddPros(){
  console.log(this.addPros)
}
}
