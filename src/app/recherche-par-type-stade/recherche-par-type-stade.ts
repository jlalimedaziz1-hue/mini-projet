import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stade } from '../stade.model';
import { Categorie } from '../model/categorie.model';
import { StadeService } from '../stade.service';

@Component({
  selector: 'app-recherche-par-type-stade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-type-stade.html'
})
export class RechercheParTypeStadeComponent implements OnInit {
  stades: Stade[] = [];
  typesStade: Categorie[] = [];
  idTypeStade = 0;

  constructor(private stadeService: StadeService) {}

  ngOnInit(): void {
    this.typesStade = this.stadeService.listeCategories();
    this.stades = this.stadeService.getStades();
  }

  onChange(): void {
    this.stades = this.idTypeStade
      ? this.stadeService.rechercherParTypeStade(this.idTypeStade)
      : this.stadeService.getStades();
  }
}
