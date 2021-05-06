import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  user:any={}

  constructor(private route : ActivatedRoute,private router : Router,private listservice : ListsService,private http : HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.prosDetail(this.id).subscribe(
      (data)=>{this.prospects=data;
      console.log(this.prospects);},
      error=> console.log(error),


    )
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )


  }

}
