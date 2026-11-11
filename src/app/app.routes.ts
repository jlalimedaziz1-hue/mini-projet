import { Routes } from '@angular/router';
import { StadeComponent } from './stade/stade';
import { AddStade } from './add-stade/add-stade';
import { ModifierStade } from './modifier-stade/modifier-stade';
import { RechercheParTypeStadeComponent } from './recherche-par-type-stade/recherche-par-type-stade';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';
import { LoginComponent } from './login/login';
import { ForbiddenComponent } from './forbidden/forbidden';
import { produitGuard } from './services/produit.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'stade', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: 'stade', component: StadeComponent },
  { path: 'add-stade', component: AddStade, canActivate: [produitGuard] },
  { path: 'modifier-stade/:id', component: ModifierStade },
  { path: 'rechercheParCategorie', component: RechercheParTypeStadeComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: '**', redirectTo: 'stade' }
];
