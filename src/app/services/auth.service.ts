import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'AZIZ', password: '123', roles: ['USER'] }
  ];

  loggedUser!: string;
  isloggedIn = false;
  roles!: string[];

  constructor(private router: Router) {}

  logout(): void {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): boolean {
    const validUser = this.users.find(
      currentUser =>
        user.username === currentUser.username &&
        user.password === currentUser.password
    );

    if (!validUser) {
      return false;
    }

    this.loggedUser = validUser.username;
    this.isloggedIn = true;
    this.roles = validUser.roles;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    return true;
  }

  isAdmin(): boolean {
    if (!this.roles) {
      return false;
    }
    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string): void {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string): void {
    const user = this.users.find(currentUser => currentUser.username === username);
    if (user) {
      this.roles = user.roles;
    }
  }
}
