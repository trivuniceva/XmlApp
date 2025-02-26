import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SignupFormComponent} from '../../components/signup-form/signup-form.component';
import {NgIf} from '@angular/common';

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

  ngAfterViewInit() {
    console.log(this.signupFormComponent.signupForm);
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }


  onSubmitForm() {

  }

}
