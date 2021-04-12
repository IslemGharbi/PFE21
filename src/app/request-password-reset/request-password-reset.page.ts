import { Component, OnInit } from '@angular/core';
import { SnotifyModule, SnotifyService } from 'ng-snotify';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.page.html',
  styleUrls: ['./request-password-reset.page.scss'],
})
export class RequestPasswordResetPage implements OnInit {
  loginn:any ={};
  constructor(
    private listService : ListsService,
    private notify : SnotifyService
    ) { }

  ngOnInit() {
  }

  password(){
    this.listService.SendPasswordResetLink(this.loginn).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    )
  }

  handleResponse(res){
    console.log(res)
    this.loginn.email= null
  }

}
