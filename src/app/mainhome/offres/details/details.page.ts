import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id
  offres:any={}

  constructor(private route : ActivatedRoute,private router : Router,private listservice : ListsService,private http: HttpClient) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.detailOffre(this.id).subscribe(
      data=>this.offres=data
    )
  }

}
