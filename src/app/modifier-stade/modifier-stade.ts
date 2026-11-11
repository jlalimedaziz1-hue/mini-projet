
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StadeService } from '../stade.service';
import { Stade } from '../stade.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-modifier-stade',
  imports: [FormsModule, RouterLink],
  templateUrl: './modifier-stade.html',
  styleUrl: './modifier-stade.css'
})
export class ModifierStade implements OnInit {

  categories!: Categorie[];
  updatedCatId!: number;

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.stadeService.listeCategories();

    const id = Number(this.route.snapshot.paramMap.get('id'));
    const stadeTrouve = this.stadeService.getStade(id);

    if (stadeTrouve) {
      this.stade = { ...stadeTrouve };
      this.updatedCatId = this.stade.typeStade.idCat;
    }
  }

  modifierStade(): void {
    this.stade.typeStade =
      this.stadeService.consulterCategorie(this.updatedCatId);

    this.stadeService.modifierStade(this.stade);
    this.router.navigate(['/stade']);
  }
}
