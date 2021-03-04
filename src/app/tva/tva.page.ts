import { Component, OnInit } from '@angular/core';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.page.html',
  styleUrls: ['./tva.page.scss'],
})
export class TVAPage implements OnInit {

  constructor(private myService: ListsService) { }

  ngOnInit() {

}}
