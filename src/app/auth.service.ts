import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface UserRanking {
  username: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private readingList: number[] = []; // Lista de IDs de livros marcados como "em leitura"
  
  private rankings: UserRanking[] = [
    { username: 'user1', points: 1200 },
    { username: 'user2', points: 1150 },
    { username: 'admin', points: 1300 },
    { username: 'user3', points: 900 },
    { username: 'user4', points: 850 }
  ];

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

  getRankings(): UserRanking[] {
    // Ordenar o ranking pela quantidade de pontos, do maior para o menor
    return this.rankings.sort((a, b) => b.points - a.points);
  }

  getUserRanking(username: string): number {
    const sortedRankings = this.getRankings();
    const userIndex = sortedRankings.findIndex(user => user.username === username);
    return userIndex + 1; // Retorna a posição no ranking (1-indexed)
  }
}
