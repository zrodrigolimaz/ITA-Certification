import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Importe o AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  messages: Message[] = [];

  constructor(private router: Router, private authService: AuthService) { }  // Injeção do AuthService

  login() {
    if (this.authService.login(this.username, this.password)) {
      // Se o login for bem-sucedido
      this.messages = [{ severity: 'success', summary: 'Login Successful', detail: 'You are now logged in.' }];
    } else {
      // Mensagem de erro se as credenciais estiverem incorretas
      this.messages = [{ severity: 'error', summary: 'Login Failed', detail: 'Invalid username or password.' }];
    }
  }
}
