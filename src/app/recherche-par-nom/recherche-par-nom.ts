import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stade } from '../stade.model';
import { StadeService } from '../stade.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html'
})
export class RechercheParNomComponent implements OnInit {
  nomStade = '';
  searchTerm = '';
  stades: Stade[] = [];
  allStades: Stade[] = [];

  constructor(private stadeService: StadeService) {}

  ngOnInit(): void {
    this.allStades = this.stadeService.getStades();
    this.stades = this.allStades;
  }

  rechercherStades(): void {
    this.stades = this.stadeService.rechercherParNom(this.nomStade);
  }

  onKeyUp(filterText: string): void {
    const filter = (filterText ?? '').toLocaleLowerCase();
    this.stades = this.allStades.filter(stade =>
      stade.nomStade.toLocaleLowerCase().includes(filter)
    );
  }
}
