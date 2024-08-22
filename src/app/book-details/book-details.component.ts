import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Book {
  title: string;
  author: string;
  description: string;
  pages: number;
  id: number;
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;
  
  books: Book[] = [
    { id: 1, title: 'Macbeth', author: 'William Shakespeare', description: 'A tragédia de Macbeth segue a ascensão de um nobre escocês ao poder e sua subsequente queda devido à ambição e culpa.', pages: 320 },
    { id: 2, title: 'O Mercador de Veneza', author: 'William Shakespeare', description: 'Uma peça que aborda temas de justiça, misericórdia e o conflito entre cristãos e judeus na Veneza renascentista.', pages: 200 },
    { id: 3, title: 'Em Agosto Nos Vemos', author: 'Gabriel García Márquez', description: 'Uma história poética e sensível que explora a vida de uma mulher ao longo de suas visitas anuais ao túmulo de sua mãe.', pages: 150 },
    { id: 4, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', description: 'Uma saga épica da família Buendía em Macondo, explorando temas de destino, repetição histórica e realismo mágico.', pages: 417 },
    { id: 5, title: '1984', author: 'George Orwell', description: 'Um romance distópico que explora o totalitarismo, vigilância e controle governamental em um estado opressor.', pages: 328 },
    { id: 6, title: 'A Revolução dos Bichos', author: 'George Orwell', description: 'Uma fábula alegórica que satiriza a corrupção política e o autoritarismo, narrada através da revolta de animais em uma fazenda.', pages: 112 }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.book = this.books.find(book => book.id === id);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
