import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService) { }

  login() {
    const result = this.authService.login(this.username, this.password);

    if (!result) {
      this.loginError = 'Nome de usuário ou senha inválidos.';
    }
  }
}
