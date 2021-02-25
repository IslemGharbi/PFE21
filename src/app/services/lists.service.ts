import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  public pays : string[];
  public regimes  : string[];
  public secteurs : string[];
  public monnaies  :string[];

  constructor() {
    this.pays=[
      'tunisia'
    ]
    this.regimes=[
      '40',
      '48'
    ]
    this.secteurs=[
      'agroalimentaire ',
      'services',
      'mecanique'
    ]
    this.monnaies=[
      'TND',
      '€',
      '$'

    ]



  }
}
