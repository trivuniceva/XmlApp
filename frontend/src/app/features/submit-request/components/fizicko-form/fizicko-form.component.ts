import {Component, EventEmitter, Output} from '@angular/core';
import {AuthorInfoFormComponent} from "../author-info-form/author-info-form.component";
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {UserInfoFormComponent} from '../user-info-form/user-info-form.component';

@Component({
  selector: 'app-fizicko-form',
  standalone: true,
  imports: [
    AuthorInfoFormComponent,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgForOf,
    NgClass,
    UserInfoFormComponent
  ],
  templateUrl: './fizicko-form.component.html',
  styleUrl: './fizicko-form.component.css'
})
export class FizickoFormComponent {
  isAuthorSubmitting: boolean = false;
  fizickoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fizickoForm = this.fb.group(
      {
        userInfo: this.fb.group({
          name:[''],
          lastname:[''],
          city:[''],
          street:[''],
          streetNum:[''],
          citizenship:[''],
          phone:[''],
          email:[''],
        }),
        authorSubmitting: this.isAuthorSubmitting,

      });
  }


  getFormValue(){
    return this.fizickoForm.value;
  }

  get userInfoGroup(): FormGroup{
    return this.fizickoForm.get('userInfo') as FormGroup;
  }

}
