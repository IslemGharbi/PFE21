import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  inMonnaie(){
    this.router.navigate(['monnaies'])
  }
inTVA(){
  this.router.navigate(['tva'])
}
}
