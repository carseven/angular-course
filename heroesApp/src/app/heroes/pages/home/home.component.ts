import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        padding: 20px;
      }
    `,
  ],
})
export class HomeComponent {
  get auth() {
    return this.authService.auth;
  }
  constructor(private readonly authService: AuthService) {}
}
