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
      'tunisie',
      'france'
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
      'EURO',
      'DOLLAR'

    ]




  }
  getUtilisateurs(){
    return this.http.get('http://127.0.0.1:8000/api/getUser');
  }
  deleteUsers(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteUtilisateur/'+id)
  }
  userDetail(id){
    return this.http.get('http://127.0.0.1:8000/api/getUtilisateurById/'+id)

  }
  modifyUser(id,utilisateurs){
    return this.http.put('http://127.0.0.1:8000/api/updateUtilisateur/'+id,utilisateurs)
  }
  login(id){
    return this.http.post('http://127.0.0.1:8000/api/auth/login/',id)
  }
  SendPasswordResetLink(data){
    return this.http.post('http://127.0.0.1:8000/api/auth/sendPasswordResetLink',data)
  }

  changePassword(data){
    return this.http.post('http://127.0.0.1:8000/api/auth/resetPassword',data)
  }





  // prospect

  getProspect(){
    return this.http.get('http://127.0.0.1:8000/api/getProspect')
  }

  prosDetail(id){
    return this.http.get('http://127.0.0.1:8000/api/getProspectById/'+id)

  }

  deletePros(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteProspect/'+id)
  }

  modifyPros(id,prospects){
    return this.http.put('http://127.0.0.1:8000/api/updateProspect/'+id,prospects)
  }

}
