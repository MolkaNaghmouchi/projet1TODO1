import { Component, OnInit } from '@angular/core';
import { article } from 'src/core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  search='';
  listeemploi : article[] =[
    { reference : "1", titre:"developeur",entreprise:"vermeg",etat: false},
    { reference : "2", titre:"ingenieur",entreprise:"sofrecome",etat: true},
    { reference : "3", titre:"adminstrateur",entreprise:"esprit",etat: true},
    { reference : "4", titre:"ingénieurInfo",entreprise:"komutel",etat: false}] ;
  constructor() { }

  ngOnInit(): void { }
  bilan() {
    const nonCloturees = this.listeemploi.filter(emploi => emploi.etat === true).length;
    alert(`Il y a ${nonCloturees} offres d'emploi non clôturées.`);
  }

}
