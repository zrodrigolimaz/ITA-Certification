import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface Book {
  title: string;
  author: string;
  description: string;
  id: number;
  isReading?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books: Book[] = [
    { id: 1, title: 'Macbeth', author: 'William Shakespeare', description: 'A tragédia de Macbeth segue a ascensão de um nobre escocês ao poder e sua subsequente queda devido à ambição e culpa.' },
    { id: 2, title: 'O Mercador de Veneza', author: 'William Shakespeare', description: 'Uma peça que aborda temas de justiça, misericórdia e o conflito entre cristãos e judeus na Veneza renascentista.' },
    { id: 3, title: 'Em Agosto Nos Vemos', author: 'Gabriel García Márquez', description: 'Uma história poética e sensível que explora a vida de uma mulher ao longo de suas visitas anuais ao túmulo de sua mãe.' },
    { id: 4, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', description: 'Uma saga épica da família Buendía em Macondo, explorando temas de destino, repetição histórica e realismo mágico.' },
    { id: 5, title: '1984', author: 'George Orwell', description: 'Um romance distópico que explora o totalitarismo, vigilância e controle governamental em um estado opressor.' },
    { id: 6, title: 'A Revolução dos Bichos', author: 'George Orwell', description: 'Uma fábula alegórica que satiriza a corrupção política e o autoritarismo, narrada através da revolta de animais em uma fazenda.' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const readingList = this.authService.getReadingList();
    this.books = this.books.map(book => ({
      ...book,
      isReading: readingList.includes(book.id)
    }));
  }

  viewBookDetails(index: number) {
    const bookId = this.books[index].id;
    this.router.navigate(['/book-details', bookId]);
  }

  logout() {
    this.authService.logout();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToRanking() {
    this.router.navigate(['/ranking']);
  }

} 