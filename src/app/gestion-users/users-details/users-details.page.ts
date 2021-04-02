
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
  id;

  constructor(private route : ActivatedRoute,private router : Router,private listservice : ListsService) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.userDetail(this.id).subscribe(
      data=>this.utilisateurs=data
    )


  }


}