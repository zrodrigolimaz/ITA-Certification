import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  messages: Message[] = []; // Adicionando a propriedade messages

  constructor() { }

  login() {
    if (this.username === 'user' && this.password === 'password') {
      // Simulação de login bem-sucedido
      this.messages = [{ severity: 'success', summary: 'Login Successful', detail: 'You are now logged in.' }];
    } else {
      // Mensagem de erro se as credenciais estiverem incorretas
      this.messages = [{ severity: 'error', summary: 'Login Failed', detail: 'Invalid username or password.' }];
    }
  }
}
