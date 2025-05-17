import { Component } from '@angular/core';
import {PseudonimComponent} from '../pseudonim/pseudonim.component';
import {UserInfoFormComponent} from '../user-info-form/user-info-form.component';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-author-info-form',
  standalone: true,
  imports: [
    PseudonimComponent,
    UserInfoFormComponent,
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './author-info-form.component.html',
  styleUrl: './author-info-form.component.css'
})
export class AuthorInfoFormComponent {
  isAnonymousAuthor: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      authors: this.fb.array([this.createAuthorForm()]),
      deathYear: ['']
    });
  }

  createAuthorForm(): FormGroup {
    return this.fb.group({
      name: [''],
      lastname: [''],
      city: [''],
      street: [''],
      streetNum: [''],
      citizenship: ['']
    });
  }


  get authors(): FormArray {
    return this.form.get('authors') as FormArray;
  }

  addCoAuthor(): void {
    this.authors.push(this.createAuthorForm());
  }

  removeAuthor(index: number): void {
    if (this.authors.length > 1) {
      this.authors.removeAt(index);
    }
  }

  submit() {

  }
}
