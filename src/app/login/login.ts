import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  user = new User();
  erreur = 0;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLoggedin(): void {
    const isValidUser = this.authService.SignIn(this.user);

    if (isValidUser) {
      this.router.navigate(['/']);
    } else {
      this.erreur = 1;
    }
  }
}
