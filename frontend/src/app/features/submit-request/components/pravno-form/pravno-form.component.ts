import { Component } from '@angular/core';
import {PseudonimComponent} from "../pseudonim/pseudonim.component";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-pravno-form',
  standalone: true,
    imports: [
      CommonModule,
      ReactiveFormsModule,
      PseudonimComponent,
      UserInfoFormComponent
    ],
  templateUrl: './pravno-form.component.html',
  styleUrl: './pravno-form.component.css'
})
export class PravnoFormComponent {
  pravnoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pravnoForm = this.fb.group(
      {
        poslovnoIme:[''],
        userInfo: this.fb.group({
          name:[''],
          lastname:[''],
          city:[''],
          street:[''],
          streetNum:[''],
          citizenship:[''],
          phone:[''],
          email:[''],
        })
      });
  }

  getFormValue(){
    return this.pravnoForm.value;
  }

  get userInfoGroup(): FormGroup{
    return this.pravnoForm.get('userInfo') as FormGroup;
  }



}
