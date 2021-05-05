import {tva} from '../model/tva'


export class prospect {


constructor(
  public id: number,
  public codeP: string,
  public raisonsocialeP:string,
  public typeP:string,
  public   etatP:string,
  public  adresseP:string,
  public  codepostalP:string,
  public  villeP:string,
  public  matriculefiscaleP:string,
  public  registrecommerceP:string,
  public  activiteP:string,
  public  responsableP:string,
  public  telephonefixeP:number,
  public  telephonemobileP:number,
  public  telecopieP:string,
  public  sitewebP:string,
  public  adresseelectroniqueP:string,

  public  monnaie_id:number,
  public  pay_id:number,
  public  societe_id:number,
  public  regime_id:number,
  public  tva:tva,
  public  formejuridique_id:number,
  public  secteur_id:number,
  public  delegation_id:number,

  public  created_at
){

}

}

