// admin.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin',
  template: '<h2>Admin Page</h2>',
  imports: [CommonModule]
})
export class AdminComponent {}
