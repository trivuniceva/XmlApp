import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';

@Component({
  selector: 'app-author-info-form',
  standalone: true,
  imports: [
    UserInfoFormComponent,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './author-info-form.component.html',
  styleUrl: './author-info-form.component.css',
})
export class AuthorInfoFormComponent {
  @Input() authorInfoGroup!: FormGroup;
  @Input() authorIndex!: number;

  get userInfoGroup(): FormGroup {
    return this.authorInfoGroup;
  }
}
