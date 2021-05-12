
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListsService {


  constructor(private http : HttpClient)
{










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

  // monnaies
  getMonnaie(){
    return this.http.get('http://127.0.0.1:8000/api/getMonnaie')
  }
  deleteMonnaie(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteMonnaie/'+id)
  }
  detailMonnaie(id){
    return this.http.get('http://127.0.0.1:8000/api/getMonnaieById/'+id)

  }
  modifyMonnaie(id,monnaie){
    return this.http.put('http://127.0.0.1:8000/api/updateMonnaie/'+id,monnaie)
  }

//regime


  getRegime(){
    return this.http.get('http://127.0.0.1:8000/api/getRegime')
  }
  deleteRegime(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteRegime/'+id)
  }
  detailRegime(id){
    return this.http.get('http://127.0.0.1:8000/api/getRegimeById/'+id)

  }
  modifyRegime(id,regime){
    return this.http.put('http://127.0.0.1:8000/api/updateRegime/'+id,regime)
  }

  //secteur

  getSecteur(){
    return this.http.get('http://127.0.0.1:8000/api/getSecteur')
  }
  deleteSecteur(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteSecteur/'+id)
  }
  detailSecteur(id){
    return this.http.get('http://127.0.0.1:8000/api/getSecteurById/'+id)

  }
  modifySecteur(id,secteur){
    return this.http.put('http://127.0.0.1:8000/api/updateSecteur/'+id,secteur)
  }

//produit

  getProduit(){
    return this.http.get('http://127.0.0.1:8000/api/getProduit')
  }
  deleteProduit(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteProduit/'+id)
  }
  detailProduit(id){
    return this.http.get('http://127.0.0.1:8000/api/getProduitById/'+id)

  }
  modifyProduit(id,produit){
    return this.http.put('http://127.0.0.1:8000/api/updateProduit/'+id,produit)
  }

//TVA

getTva(){
  return this.http.get('http://127.0.0.1:8000/api/getTva')
}
deleteTva(id){
  return this.http.delete('http://127.0.0.1:8000/api/deleteTva/'+id)
}
detailTva(id){
  return this.http.get('http://127.0.0.1:8000/api/getTvaById/'+id)

}
modifyTva(id,Tva){
  return this.http.put('http://127.0.0.1:8000/api/updateTva/'+id,Tva)
}

//pays

getPays(){
  return this.http.get('http://127.0.0.1:8000/api/getPays')
}
deletePays(id){
  return this.http.delete('http://127.0.0.1:8000/api/deletePays/'+id)
}
detailPays(id){
  return this.http.get('http://127.0.0.1:8000/api/getPaysById/'+id)

}
modifyPays(id,Pays){
  return this.http.put('http://127.0.0.1:8000/api/updatePays/'+id,Pays)
}


//delegation

getDelegation(){
  return this.http.get('http://127.0.0.1:8000/api/getDelegation')
}
deleteDelegation(id){
  return this.http.delete('http://127.0.0.1:8000/api/deleteDelegation/'+id)
}
detailDelegation(id){
  return this.http.get('http://127.0.0.1:8000/api/getDelegationById/'+id)

}
modifyDelegation(id,Delegation){
  return this.http.put('http://127.0.0.1:8000/api/updateDelegation/'+id,Delegation)
}



//Formjuridique

getForm(){
  return this.http.get('http://127.0.0.1:8000/api/getFormejuridique')
}
deleteForm(id){
  return this.http.delete('http://127.0.0.1:8000/api/deleteFormejuridique/'+id)
}
detailForm(id){
  return this.http.get('http://127.0.0.1:8000/api/getFormejuridiqueById/'+id)

}
modifyForm(id,Formjuridique){
  return this.http.put('http://127.0.0.1:8000/api/updateFormejuridique/'+id,Formjuridique)
}



//type societe


getSociete(){
  return this.http.get('http://127.0.0.1:8000/api/getSociete')
}
deleteSociete(id){
  return this.http.delete('http://127.0.0.1:8000/api/deleteSociete/'+id)
}
detailSociete(id){
  return this.http.get('http://127.0.0.1:8000/api/getSocieteById/'+id)

}
modifySociete(id,Societ){
  return this.http.put('http://127.0.0.1:8000/api/updateSociete/'+id,Societ)
}

//intervention



getInter(){
  return this.http.get('http://127.0.0.1:8000/api/getIntervention')
}
deleteInter(id){
  return this.http.delete('http://127.0.0.1:8000/api/deleteIntervention/'+id)
}
detailInter(id){
  return this.http.get('http://127.0.0.1:8000/api/getInterventionById/'+id)

}
modifyInter(id,Societ){
  return this.http.put('http://127.0.0.1:8000/api/updateIntervention/'+id,Societ)
}


//index

indexMonnaie(){
  return this.http.get('http://127.0.0.1:8000/api/indexMonnaie')

}

indexTva(){
  return this.http.get('http://127.0.0.1:8000/api/indexTva')
}

indexPays(){
  return this.http.get('http://127.0.0.1:8000/api/indexPays')
}
indexRegime(){
  return this.http.get('http://127.0.0.1:8000/api/indexRegime')
}

indexSecteur(){
  return this.http.get('http://127.0.0.1:8000/api/indexSecteur')
}

indexForm(){
  return this.http.get('http://127.0.0.1:8000/api/indexFormejuridique')
}

 //offre

 detailOffre(id){
  return this.http.get('http://127.0.0.1:8000/api/getOffreById/'+id)

}
deleteOffre(id){
  return this.http.delete('http://127.0.0.1:8000/api/deleteOffre/'+id)
}

getOffre(){
  return this.http.get('http://127.0.0.1:8000/api/getOffre')
}
ajouterOffre(id){
  return this.http.post('http://127.0.0.1:8000/api/addOffre',id)
}

}
