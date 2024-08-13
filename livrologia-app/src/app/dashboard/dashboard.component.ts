import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface Book {
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books: Book[] = [
    { title: 'Macbeth', author: 'William Shakespeare', description: 'A tragédia de Macbeth segue a ascensão de um nobre escocês ao poder e sua subsequente queda devido à ambição e culpa.' },
    { title: 'O Mercador de Veneza', author: 'William Shakespeare', description: 'Uma peça que aborda temas de justiça, misericórdia e o conflito entre cristãos e judeus na Veneza renascentista.' },
    { title: 'Em Agosto Nos Vemos', author: 'Gabriel García Márquez', description: 'Uma história poética e sensível que explora a vida de uma mulher ao longo de suas visitas anuais ao túmulo de sua mãe.' },
    { title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', description: 'Uma saga épica da família Buendía em Macondo, explorando temas de destino, repetição histórica e realismo mágico.' },
    { title: '1984', author: 'George Orwell', description: 'Um romance distópico que explora o totalitarismo, vigilância e controle governamental em um estado opressor.' },
    { title: 'A Revolução dos Bichos', author: 'George Orwell', description: 'Uma fábula alegórica que satiriza a corrupção política e o autoritarismo, narrada através da revolta de animais em uma fazenda.' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

} 