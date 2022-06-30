import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  logIn() {
    this.authService.login().subscribe((resp: Auth) => {
      if (resp.id) {
        this.router.navigate(['./heroes']);
      }
    });
  }

  signIn() {
    this.authService.logout();
    this.router.navigate(['./heroes']);
  }
}
