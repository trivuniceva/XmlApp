import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.css'
})
export class AttachmentsComponent {
  attachmentsForm: FormGroup;

  attachmentOptions = [
    { label: 'Пример(а)к ауторског дела', controlName: 'workSample' },
    { label: 'Доказ о уплати таксе', controlName: 'paymentProof' },
    { label: 'Пуномоћје', controlName: 'authorization' },
    { label: 'Изјава о ауторству', controlName: 'authorshipStatement' },
  ];

  constructor(private fb: FormBuilder) {
    const controlsConfig: any = {
      otherAttachment: ['']
    };
    this.attachmentOptions.forEach(opt => controlsConfig[opt.controlName] = [false]);
    this.attachmentsForm = this.fb.group(controlsConfig);
  }

  get selectedAttachments(): string[] {
    return this.attachmentOptions
      .filter(opt => this.attachmentsForm.get(opt.controlName)?.value)
      .map(opt => opt.label);
  }
}
