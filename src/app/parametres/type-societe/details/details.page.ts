import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public societes:any =[];
  id;
  constructor(
    private route : ActivatedRoute,

    private listservice : ListsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.listservice.detailSociete(this.id).subscribe(
      data=>this.societes=data)
  }

}
