
import { Injectable } from '@angular/core';
import { Stade } from './stade.model';
import { Categorie } from './model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class StadeService {

  categories: Categorie[] = [
    { idCat: 1, nomCat: 'Olympique' },
    { idCat: 2, nomCat: 'Municipal' },
    { idCat: 3, nomCat: 'Régional' }
  ];

  stades: Stade[] = [
    {
      idStade: 1,
      nomStade: 'Stade Olympique',
      ville: 'Nabeul',
      capacite: 10000,
      dateCreation: '2020-01-01',
      typeStade: { idCat: 1, nomCat: 'Olympique' }
    },
    {
      idStade: 2,
      nomStade: 'Stade 7 Novembre',
      ville: 'Tunis',
      capacite: 45000,
      dateCreation: '2001-01-01',
      typeStade: { idCat: 2, nomCat: 'Municipal' }
    },
    {
      idStade: 3,
      nomStade: 'Stade Municipal',
      ville: 'Sousse',
      capacite: 20000,
      dateCreation: '2010-01-01',
      typeStade: { idCat: 3, nomCat: 'Régional' }
    }
  ];

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }

  ajouterStade(stade: Stade): void {
    this.stades.push(stade);
  }

  getStades(): Stade[] {
    return this.stades;
  }

  supprimerStade(idStade: number): void {
    this.stades = this.stades.filter(
      stade => stade.idStade !== idStade
    );
  }

  getStade(idStade: number): Stade | undefined {
    return this.stades.find(
      stade => stade.idStade === idStade
    );
  }

  modifierStade(stadeModifie: Stade): void {
    const index = this.stades.findIndex(
      stade => stade.idStade === stadeModifie.idStade
    );

    if (index !== -1) {
      this.stades[index] = stadeModifie;
    }
  }

  rechercherParTypeStade(idType: number): Stade[] {
    return this.stades.filter(stade => stade.typeStade.idCat === Number(idType));
  }

  rechercherParNom(nom: string): Stade[] {
    const recherche = (nom ?? '').trim().toLocaleLowerCase();
    if (!recherche) {
      return this.getStades();
    }
    return this.stades.filter(stade =>
      stade.nomStade.toLocaleLowerCase().includes(recherche)
    );
  }
}
