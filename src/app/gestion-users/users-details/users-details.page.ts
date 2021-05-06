
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.page.html',
  styleUrls: ['./users-details.page.scss'],
})
export class UsersDetailsPage implements OnInit {
  public utilisateurs:any =[];
  user:any={}
  id;

  constructor(private route : ActivatedRoute,private router : Router,private listservice : ListsService,private http: HttpClient) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.userDetail(this.id).subscribe(
      data=>this.utilisateurs=data
    )
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem( 'token')}`
    })

    this.http.get('http://127.0.0.1:8000/api/currentUser',{headers}).subscribe(
      result=> this.user = result
    )



  }


}
