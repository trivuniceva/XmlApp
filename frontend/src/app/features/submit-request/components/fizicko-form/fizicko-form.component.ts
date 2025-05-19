import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';
import { AuthorInfoFormComponent } from '../author-info-form/author-info-form.component';

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
    this.fizickoForm = this.fb.group({
      userInfo: this.fb.group({
        name: [''],
        lastname: [''],
        city: [''],
        street: [''],
        streetNum: [''],
        citizenship: [''],
        phone: [''],
        email: [''],
      }),
      authors: this.fb.array([this.createAuthorForm()]),
    });
  }

  createAuthorForm(): FormGroup {
    return this.fb.group({
      name: [''],
      lastname: [''],
      city: [''],
      street: [''],
      streetNum: [''],
      citizenship: [''],
      phone: [''],
      email: [''],
      isAnonymousAuthor: [false]
    });
  }

  addAuthor(): void {
    this.authors.push(this.createAuthorForm());
  }

  removeAuthor(index: number): void {
    if (this.authors.length > 1) {
      this.authors.removeAt(index);
    }
  }

  get authors(): FormArray {
    return this.fizickoForm.get('authors') as FormArray;
  }

  get userInfoGroup(): FormGroup {
    return this.fizickoForm.get('userInfo') as FormGroup;
  }

  getAuthorGroup(index: number): FormGroup {
    return this.authors.controls[index] as FormGroup;
  }

  getFormValue() {
    return this.fizickoForm.value;
  }
}
