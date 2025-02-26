import { Component } from '@angular/core';
import {LoginFormComponent} from '../components/login-form/login-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  forgotPassword() {

  }

  goToSignup() {

  }

  handleLogin($event: any) {
    this.router.navigate(['/signup'])
  }
}
