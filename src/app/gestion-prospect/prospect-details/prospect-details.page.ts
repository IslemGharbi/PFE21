import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';
import {prospect} from '../../model/prospect'
@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.page.html',
  styleUrls: ['./prospect-details.page.scss'],
})
export class ProspectDetailsPage implements OnInit {
   prospects : any ={}
  ;
  id;

  constructor(private route : ActivatedRoute,private router : Router,private listservice : ListsService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.prosDetail(this.id).subscribe(
      (data)=>{this.prospects=data;},
      error=> console.log(error),

    )

  }

}
