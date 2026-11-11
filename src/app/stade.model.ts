
import { Categorie } from './model/categorie.model';

export class Stade {
  idStade!: number;
  nomStade!: string;
  ville!: string;
  capacite!: number;
  dateCreation!: string;
  typeStade!: Categorie;
}
