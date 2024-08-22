import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private readingList: number[] = []; // Lista de IDs de livros marcados como "em leitura"


  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
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
    this.readingList = []; // Limpa a lista de leitura ao deslogar
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  markAsReading(bookId: number): void {
    if (!this.readingList.includes(bookId)) {
      this.readingList.push(bookId);
    }
  }

  getReadingList(): number[] {
    return this.readingList;
  }
}
