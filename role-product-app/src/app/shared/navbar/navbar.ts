import { Component, OnInit } from '@angular/core';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  isLoggedIn = false;
  isAdminUser = false;

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      this.isAdminUser = this.auth.isAdmin();
    });
  }


  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}

  logout(): void {
    this.auth.logout();
  }

  isAdmin(): boolean {
    return this.isAdminUser;
  }
}
