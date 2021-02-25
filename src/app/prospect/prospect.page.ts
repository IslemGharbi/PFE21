import { Component, OnInit } from '@angular/core';
import {ListsService} from '../services/lists.service';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.page.html',
  styleUrls: ['./prospect.page.scss'],
})
export class ProspectPage implements OnInit {

  constructor(private myService: ListsService) { }

  ngOnInit() {
  }
pays=this.myService.pays
regimes=this.myService.regimes
secteurs=this.myService.secteurs
monnaies=this.myService.monnaies
}
