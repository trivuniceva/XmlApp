import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

  form = {
    workType: '',
    otherWorkType: '',
    title: '',
    altTitle: '',
    recordFormat: '',
    otherRecordFormat: '',
    isAdaptation: null as boolean | null,
    sourceTitle: '',
    sourceAuthor: ''
  };
}
