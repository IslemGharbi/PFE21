import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.page.html',
  styleUrls: ['./gestion-prospect.page.scss'],
})
export class GestionProspectPage implements OnInit {

  constructor(private listService:ListsService, private router : Router,public toastController : ToastController) { }

  ngOnInit() {
  }

}
