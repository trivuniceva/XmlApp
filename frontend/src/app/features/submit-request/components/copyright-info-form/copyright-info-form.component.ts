import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {AuthorInfoFormComponent} from '../author-info-form/author-info-form.component';

@Component({
  selector: 'app-copyright-info-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorInfoFormComponent,
  ],
  templateUrl: './copyright-info-form.component.html',
  styleUrl: './copyright-info-form.component.css'
})
export class CopyrightInfoFormComponent {
  isAdaptation: boolean = false;
  copyrightInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.copyrightInfoForm = this.fb.group({
      workType: [''],
      otherWorkType: [''],
      title: [''],
      altTitle: [''],
      recordFormat: [''],
      otherRecordFormat: [''],
      isAdaptation: [false],
      sourceTitle: [''],
      sourceAuthorInfo: this.fb.group({
        name: [''],
        lastname: [''],
        city: [''],
        street: [''],
        streetNum: [''],
        citizenship: [''],
        phone: [''],
        email: [''],
        isAnonymousAuthor: [false]
      })
    });
  }

  get form() {
    return this.copyrightInfoForm.value;
  }

  get sourceAuthorInfoGroup() {
    return this.copyrightInfoForm.get('sourceAuthorInfo') as FormGroup;
  }
}
