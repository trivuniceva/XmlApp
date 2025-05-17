import { Component } from '@angular/core';
import {AuthorInfoFormComponent} from "../author-info-form/author-info-form.component";
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
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
    UserInfoFormComponent
  ],
  templateUrl: './fizicko-form.component.html',
  styleUrl: './fizicko-form.component.css'
})
export class FizickoFormComponent {
  isAuthorSubmitting: boolean = false;

}
