// user.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user',
  template: '<h2>User Page</h2>',
  imports: [CommonModule]
})
export class UserComponent {}
