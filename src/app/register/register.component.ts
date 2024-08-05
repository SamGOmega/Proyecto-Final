// register.component.ts
import { Component } from '@angular/core';
import { AuthGuard } from '../../app/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = 'user'; // Valor por defecto para el rol
  message: string = '';
  validationErrors: string[] = [];

  constructor(private authService: AuthGuard, private router: Router) {}

  validatePassword() {
    this.validationErrors = [];
    const lengthPattern = /^.{8,}$/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const specialCharPattern = /[^a-zA-Z0-9]/;
    const consecutiveNumbersPattern = /(\d)\1/;
    const consecutiveLettersPattern = /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;

    if (!lengthPattern.test(this.password)) {
      this.validationErrors.push('La contraseña debe tener al menos 8 caracteres.');
    }
    if (!uppercasePattern.test(this.password)) {
      this.validationErrors.push('La contraseña debe contener al menos una letra mayúscula.');
    }
    if (!lowercasePattern.test(this.password)) {
      this.validationErrors.push('La contraseña debe contener al menos una letra minúscula.');
    }
    if (!specialCharPattern.test(this.password)) {
      this.validationErrors.push('La contraseña debe contener al menos un carácter especial.');
    }
    if (consecutiveNumbersPattern.test(this.password)) {
      this.validationErrors.push('La contraseña no puede contener números consecutivos.');
    }
    if (consecutiveLettersPattern.test(this.password)) {
      this.validationErrors.push('La contraseña no puede contener letras consecutivas.');
    }
  }

  register() {
    this.validatePassword();
    if (this.validationErrors.length === 0) {
      if (this.authService.register(this.username, this.password, this.role)) {
        this.message = 'Registration successful!';
      } else {
        this.message = 'Username already exists.';
      }
    } else {
      this.message = 'Please fix the errors in your password.';
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
