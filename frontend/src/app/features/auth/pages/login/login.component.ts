import { Component } from '@angular/core';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';

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

  constructor(private router: Router, private authService: AuthService) { }

  forgotPassword() {

  }

  goToSignup() {
    this.router.navigate(['/signup'])
  }

  handleLogin(event: any) {
    console.log("ajmo log")

    console.log("Username:", event.username);
    console.log("Password:", event.password);

    this.authService.login(event.username, event.password).subscribe(response => {
      console.log('Login successful', response);
      this.authService.storageHandle({ user: response });
      this.router.navigate(['/profile'])
    }, error => {
      console.error('Login failed', error);
    });
  }
}
