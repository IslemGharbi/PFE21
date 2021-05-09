import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.page.html',
  styleUrls: ['./template.page.scss'],
})
export class TemplatePage implements OnInit {
  id;
  value
  produit
  prix:number
  public addPros:any =[];
  constructor(
    private route :ActivatedRoute,
    private myService : ListsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.myService.prosDetail(this.id).subscribe(data =>

      this.addPros=data,
    )

    this.myService.getProduit().subscribe(
      data => this.produit= data
    )
    console.log(this.prix)
  }
  calculer(){

  }

}
