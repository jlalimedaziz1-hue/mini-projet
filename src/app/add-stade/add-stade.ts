
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StadeService } from '../stade.service';
import { Stade } from '../stade.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-stade',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-stade.html',
  styleUrl: './add-stade.css'
})
export class AddStade implements OnInit {

  categories!: Categorie[];
  newIdCat!: number;
  newTypeStade!: Categorie;

  stade: Stade = {
    idStade: 0,
    nomStade: '',
    ville: '',
    capacite: 0,
    dateCreation: '',
    typeStade: { idCat: 1, nomCat: 'Olympique' }
  };

  constructor(
    private stadeService: StadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.stadeService.listeCategories();
    this.newIdCat = 1;
  }

  ajouterStade(): void {
    this.newTypeStade =
      this.stadeService.consulterCategorie(this.newIdCat);

    this.stade.typeStade = this.newTypeStade;

    this.stadeService.ajouterStade(this.stade);
    this.router.navigate(['/stade']);
  }
}
