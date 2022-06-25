import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
