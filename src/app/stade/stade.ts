import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stade } from '../stade.model';
import { StadeService } from '../stade.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-stade',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stade.html',
  styleUrl: './stade.css'
})
export class StadeComponent implements OnInit {

  stades: Stade[] = [];

  constructor(
    private stadeService: StadeService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.stades = this.stadeService.getStades();
  }

  supprimerStade(idStade: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce stade ?')) {
      this.stadeService.supprimerStade(idStade);
      this.stades = this.stadeService.getStades();
    }
  }
}
