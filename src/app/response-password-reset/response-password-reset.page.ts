import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  SnotifyService } from 'ng-snotify';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-response-password-reset',
  templateUrl: './response-password-reset.page.html',
  styleUrls: ['./response-password-reset.page.scss'],
})
export class ResponsePasswordResetPage implements OnInit {
   error:any=[];
  loginn:any ={};

  constructor(
    private route : ActivatedRoute,
    private list : ListsService,
    private router :Router,
    private notify : SnotifyService
  ) {
route.queryParams.subscribe(params =>{
  this.loginn.resetToken = params['token']
});

   }

   submit(){
this.list.changePassword(this.loginn).subscribe(
  data => this.handleResponse(data),
  error => console.log(error)
)
   }


   handleResponse(data){
     let _router = this.router;
     this.notify.confirm('Fini ! maintenant connectez-vous avec votre nouveau mot de passe !',{
       buttons:[
         {text: 'okay',
         action : toster  =>{_router.navigate(['login']) ,
        this.notify.remove(toster.id)
      }
    }
       ]
     })


   }

   handleError(error){
     this.error=error.error.errors


   }



  ngOnInit() {
  }

}
