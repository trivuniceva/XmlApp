import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import {HomeComponent} from './features/pages/home/home.component';
import {SignupComponent} from './features/auth/pages/signup/signup.component';
import {BasicSearchComponent} from './features/search/basic-search/basic-search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: BasicSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
