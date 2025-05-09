import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SignupFormComponent} from '../../components/signup-form/signup-form.component';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SignupFormComponent,
    NgIf
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements AfterViewInit{
  @ViewChild(SignupFormComponent) signupFormComponent!: SignupFormComponent;
  currentStep: number = 1;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngAfterViewInit() {
    console.log(this.signupFormComponent.signupForm);
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }


  onSubmitForm() {
    if(this.signupFormComponent && this.signupFormComponent.signupForm.valid){
      this.authService.signup( {
        username: this.signupFormComponent.signupForm.value.username,
        password: this.signupFormComponent.signupForm.value.password,
        confirmPassword: this.signupFormComponent.signupForm.value.confirmPassword,
        firstname: this.signupFormComponent.signupForm.value.firstname,
        lastname: this.signupFormComponent.signupForm.value.lastname,
        phone: this.signupFormComponent.signupForm.value.phone,
        address: this.signupFormComponent.signupForm.value.address,
        }
      ).subscribe(
        response => {
          console.log("Registration successful: ", response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error("Registration error: ", error);
        }
      );
    } else {
      console.error("Form is invalid.");
    }

  }

}
