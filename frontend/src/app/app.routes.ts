import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import {HomeComponent} from './features/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
