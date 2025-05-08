import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  @Output() loginEvent = new EventEmitter<{ username: string; password: string }>();

  login() {
    this.loginEvent.emit({ username: this.username, password: this.password });
  }

}
