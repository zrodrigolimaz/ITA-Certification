import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface Book {
  title: string;
  author: string;
  description: string;
  id: number;
  isReading?: boolean;
  pages: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books: Book[] = [
    { id: 1, title: 'Macbeth', author: 'William Shakespeare', description: 'A tragédia de Macbeth segue a ascensão de um nobre escocês ao poder e sua subsequente queda devido à ambição e culpa.', pages: 320 },
    { id: 2, title: 'O Mercador de Veneza', author: 'William Shakespeare', description: 'Uma peça que aborda temas de justiça, misericórdia e o conflito entre cristãos e judeus na Veneza renascentista.', pages: 200 },
    { id: 3, title: 'Em Agosto Nos Vemos', author: 'Gabriel García Márquez', description: 'Uma história poética e sensível que explora a vida de uma mulher ao longo de suas visitas anuais ao túmulo de sua mãe.', pages: 150 },
    { id: 4, title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez', description: 'Uma saga épica da família Buendía em Macondo, explorando temas de destino, repetição histórica e realismo mágico.', pages: 417 },
    { id: 5, title: '1984', author: 'George Orwell', description: 'Um romance distópico que explora o totalitarismo, vigilância e controle governamental em um estado opressor.', pages: 328 },
    { id: 6, title: 'A Revolução dos Bichos', author: 'George Orwell', description: 'Uma fábula alegórica que satiriza a corrupção política e o autoritarismo, narrada através da revolta de animais em uma fazenda.', pages: 112 },
    { id: 7, title: 'A Mão e a Luva', author: 'Machado de Assis', description: 'Uma análise das complexidades sociais e emocionais dos personagens centrais, focando no relacionamento entre Guiomar e seus pretendentes.', pages: 220 },
    { id: 8, title: 'Dom Casmurro', author: 'Machado de Assis', description: 'A história de Bentinho, Capitu e Escobar, explorando temas de ciúme, traição e a natureza subjetiva da verdade.', pages: 256 },
    { id: 9, title: 'O Primo Basílio', author: 'Eça de Queirós', description: 'Um romance realista que critica a hipocrisia da sociedade lisboeta do século XIX, centrando-se em um triângulo amoroso.', pages: 440 },
    { id: 10, title: 'O Guarani', author: 'José de Alencar', description: 'Um romance indianista que narra a história de amor entre Peri, um nobre índio, e Ceci, uma donzela branca, no Brasil colonial.', pages: 320 },
    { id: 11, title: 'Senhora', author: 'José de Alencar', description: 'Uma história de amor e vingança que explora a ascensão social e as convenções do casamento na sociedade brasileira do século XIX.', pages: 256 },
    { id: 12, title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', description: 'Uma narrativa inovadora contada por um defunto autor, oferecendo uma crítica mordaz da sociedade brasileira.', pages: 268 },
    { id: 13, title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', description: 'Um dos primeiros romances românticos brasileiros, que narra o amor jovem e as promessas de infância.', pages: 192 },
    { id: 14, title: 'Os Maias', author: 'Eça de Queirós', description: 'Um romance que narra a decadência de uma família aristocrática portuguesa, explorando temas de identidade e destino.', pages: 712 },
    { id: 15, title: 'Grande Sertão: Veredas', author: 'João Guimarães Rosa', description: 'Uma obra-prima da literatura brasileira que explora a complexidade da vida no sertão, através da narrativa de Riobaldo.', pages: 600 },
    { id: 16, title: 'A Escrava Isaura', author: 'Bernardo Guimarães', description: 'Um romance abolicionista que conta a história de uma escrava branca que luta por sua liberdade.', pages: 300 },
    { id: 17, title: 'O Ateneu', author: 'Raul Pompeia', description: 'Um romance de formação que narra a experiência de um jovem em um internato, oferecendo uma crítica da sociedade da época.', pages: 260 },
    { id: 18, title: 'Iracema', author: 'José de Alencar', description: 'Um romance indianista que conta a lenda de Iracema, a virgem dos lábios de mel, e sua trágica história de amor com um europeu.', pages: 160 },
    { id: 19, title: 'Vidas Secas', author: 'Graciliano Ramos', description: 'Uma narrativa sobre a luta de uma família de retirantes no nordeste brasileiro, retratando a miséria e a sobrevivência.', pages: 180 },
    { id: 20, title: 'A Hora da Estrela', author: 'Clarice Lispector', description: 'Um romance existencial que conta a história de Macabéa, uma jovem nordestina que enfrenta a vida com simplicidade e resignação.', pages: 88 },
    { id: 21, title: 'Capitães da Areia', author: 'Jorge Amado', description: 'Um romance que narra a vida de um grupo de meninos de rua em Salvador, abordando temas de marginalização e resistência.', pages: 270 }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  redirectToNotion(): void {
    window.open('https://zrodrigolimaz.notion.site/90b6ea9955294b0fb1f1dadecfd63a28?v=e1554ead3fdd4a16b0fcfeb5754f98d2&pvs=4', '_blank');
  }

  redirectToGitHub(): void {
    window.open('https://github.com/zrodrigolimaz/ITA-Certification/tree/develop', '_blank');
  }

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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToRanking() {
    this.router.navigate(['/ranking']);
  }
}
