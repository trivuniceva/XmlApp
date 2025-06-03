import { Component } from '@angular/core';
import {AuthorInfoFormComponent} from "../author-info-form/author-info-form.component";
import {PseudonimComponent} from "../pseudonim/pseudonim.component";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-punomocnik-form',
  standalone: true,
  imports: [
    AuthorInfoFormComponent,
    PseudonimComponent,
    UserInfoFormComponent,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './punomocnik-form.component.html',
  styleUrl: './punomocnik-form.component.css'
})
export class PunomocnikFormComponent {
  punomocnikForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.punomocnikForm = this.fb.group({
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

  };

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
    return this.punomocnikForm.get('authors') as FormArray;
  }

  getAuthorGroup(index: number): FormGroup {
    return this.authors.controls[index] as FormGroup;
  }

  getFormValue(){
    return this.punomocnikForm.value;
  }

  get userInfoGroup(): FormGroup{
    return this.punomocnikForm.get('userInfo') as FormGroup;
  }

}
