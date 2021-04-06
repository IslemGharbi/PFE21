import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  public pays : string[];
  public regimes  : string[];
  public secteurs : string[];
  public monnaies  :string[];

  constructor(private http: HttpClient)
{





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
  getUtilisateurs(){
    return this.http.get('http://127.0.0.1:8000/api/user');
  }
  deleteUsers(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteUtilisateur/'+id)
  }
  userDetail(id){
    return this.http.get('http://127.0.0.1:8000/api/utilisateur/'+id)

  }
  modifyUser(id,utilisateurs){
    return this.http.put('http://127.0.0.1:8000/api/updateUtilisateur/'+id,utilisateurs)
  }
  login(id){
    return this.http.post('http://127.0.0.1:8000/api/auth/login/',id)
  }
}
