import { Component, OnInit } from '@angular/core';
import { ws } from 'src/core/model/article';
import { article } from 'src/core/model/emploi';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  titre: string = "Les articles du jour" ;
  infrOuegal: number = 4;
  filtredArticles: ws[] = []
  listeArticles: ws[] = [
    {titre:'joueur du monde',contenu:'Le joueur du monde de cette année est',auteur:'gamoudi',date:'15/01/2015',categorie:'Sport'},
    {titre:'Les nouveaux parents',contenu:'Les nouveaux parents.' ,auteur:'ouseema mallouli',date:'12/01/2022',categorie:'Education'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Molka naghmouchi ',date:'02/04/2017',categorie:'Travail'}
  ];
  constructor() { }

  ngOnInit(): void {
    this.filtredArticles = this.listeArticles
  }
  changeTheArray() {

    this.filtredArticles = this.listeArticles.filter((_, index) => index < this.infrOuegal);
    console.log(this.filtredArticles)
  }
  protected readonly article = article;
}

