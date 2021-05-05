import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {
prospects
textBus='';
value=0;
  constructor(
    private listService : ListsService,
    private router : Router
  ) { }

  ngOnInit() {
    this.listService.getProspect().subscribe(data => this.prospects = data)
  }

  modify(id){
    this.router.navigate(['mainhome/offres/template',id])
  }




  searsh(event:any){

    this.textBus = event.detail.value;
     }

}
