import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  user: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser()
    console.log(this.user)
  }


}
