import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface UserRanking {
  username: string;
  points: number;
}

interface Trophy {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean;
  private readingList: number[] = [];
  
  private userPoints = 1300;

  private rankings: UserRanking[] = [
    { username: 'user1', points: 1200 },
    { username: 'user2', points: 1150 },
    { username: 'admin', points: 1300 },
    { username: 'user3', points: 900 },
    { username: 'user4', points: 850 }
  ];

  private trophies: Trophy[] = [
    { name: 'Iniciante', description: 'Concedido ao completar o primeiro livro.' },
    { name: 'Leitor Ávido', description: 'Concedido ao completar 5 livros.' },
    { name: 'Master', description: 'Concedido ao completar 10 livros.' }
  ];

  constructor(private router: Router) { 
    this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false');
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
    this.readingList = [];
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
    return this.rankings.sort((a, b) => b.points - a.points);
  }

  getUserRanking(username: string): number {
    const sortedRankings = this.getRankings();
    const userIndex = sortedRankings.findIndex(user => user.username === username);
    return userIndex + 1;
  }

  getUserPoints(): number {
    return this.userPoints;
  }

  getUserTrophies(): Trophy[] {
    return this.trophies;
  }
}
