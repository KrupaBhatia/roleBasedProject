import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../auth/auth.js';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private auth: Auth, private router: Router) {}

  isLoggedIn(): boolean {
    return !!this.auth.getToken();
  }
  
  isAdmin(): boolean {
    return this.auth.isAdmin();
  }
  
  logout(): void {
    this.auth.logout();
  }

}
