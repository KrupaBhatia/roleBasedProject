import { Component } from '@angular/core';
import { Auth } from './auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App {
  isLoggedIn = false;

  constructor(private auth: Auth) {
    this.auth.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
