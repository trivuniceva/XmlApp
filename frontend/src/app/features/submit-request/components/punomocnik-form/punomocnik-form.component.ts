import { Component } from '@angular/core';
import {AuthorInfoFormComponent} from "../author-info-form/author-info-form.component";
import {PseudonimComponent} from "../pseudonim/pseudonim.component";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-punomocnik-form',
  standalone: true,
    imports: [
      AuthorInfoFormComponent,
      PseudonimComponent,
      UserInfoFormComponent,
      ReactiveFormsModule,
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


    });

  };

  getFormValue(){
    return this.punomocnikForm.value;
  }

  get userInfoGroup(): FormGroup{
    return this.punomocnikForm.get('userInfo') as FormGroup;
  }

}
