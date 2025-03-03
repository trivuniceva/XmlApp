import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import {HomeComponent} from './features/home/home.component';
import {SignupComponent} from './features/auth/pages/signup/signup.component';
import {SearchPageComponent} from './features/search/search-page/search-page.component';
import {ReportGeneratorComponent} from './features/reports/report-generator/report-generator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'report', component: ReportGeneratorComponent },
];
