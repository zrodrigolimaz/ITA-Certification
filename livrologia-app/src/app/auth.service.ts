import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Simulação de autenticação, onde o usuário e senha corretos são 'user' e 'password'
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
