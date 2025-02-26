import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import {HomeComponent} from './features/pages/home/home.component';
import {SignupComponent} from './features/auth/pages/signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
