import { Component, OnInit } from '@angular/core';
import {ListsService} from '../services/lists.service';

@Component({
  selector: 'app-monnaies',
  templateUrl: './monnaies.page.html',
  styleUrls: ['./monnaies.page.scss'],
})
export class MonnaiesPage implements OnInit {

  constructor(private myService: ListsService) { }

  ngOnInit() {
  }
monnaies=this.myService.monnaies
delete(i){
  this.monnaies.splice(i,1)


}
}
