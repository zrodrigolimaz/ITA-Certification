import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  messages: Message[] = [];

  constructor(private router: Router) { }  // Injeção do Router

  login() {
    if (this.username === 'user' && this.password === 'password') {
      // Simulação de login bem-sucedido
      this.messages = [{ severity: 'success', summary: 'Login Successful', detail: 'You are now logged in.' }];

      // Redirecionar para o dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Mensagem de erro se as credenciais estiverem incorretas
      this.messages = [{ severity: 'error', summary: 'Login Failed', detail: 'Invalid username or password.' }];
    }
  }
}
