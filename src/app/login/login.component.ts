import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  login() {
    // Lógica para iniciar sesión
  }

  register() {
    // Lógica para registrarse
  }
}
