import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    NgIf

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  userRole: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userRole$.subscribe((role) => {
      this.userRole = role;
    });
  }

  logout() {
    this.authService.logout();
  }
}
