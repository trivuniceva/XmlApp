import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-applicant-identification',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './applicant-identification.component.html',
  styleUrl: './applicant-identification.component.css'
})
export class ApplicantIdentificationComponent {
  @Output() next = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      applicantType: ['', Validators.required]
    });
  }

  onNext() {
    if (this.form.valid) {
      const selectedType = this.form.value.applicantType;
      console.log("Изабрани тип:", selectedType);
      this.next.emit(selectedType); // pošalji izabrani tip roditelju
    } else {
      this.form.markAllAsTouched();
    }
  }


}
