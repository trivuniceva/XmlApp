import { Component } from '@angular/core';
import {HeaderComponent} from "../../request-template/components/header/header.component";
import {CommonModule, NgIf} from '@angular/common';
import {AuthorInfoComponent} from '../../request-template/components/author-info/author-info.component';
import {
  ApplicantIdentificationComponent
} from '../components/applicant-identification/applicant-identification.component';
import {FizickoFormComponent} from '../components/fizicko-form/fizicko-form.component';
import {PravnoFormComponent} from '../components/pravno-form/pravno-form.component';
import {PunomocnikFormComponent} from '../components/punomocnik-form/punomocnik-form.component';
import {CopyrightInfoFormComponent} from '../components/copyright-info-form/copyright-info-form.component';
import {AttachmentsComponent} from '../components/attachments/attachments.component';
import {ConfirmationDialogComponent} from '../components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-submit-request-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NgIf,
    AuthorInfoComponent,
    ApplicantIdentificationComponent,
    FizickoFormComponent,
    PravnoFormComponent,
    PunomocnikFormComponent,
    CopyrightInfoFormComponent,
    AttachmentsComponent,
    ConfirmationDialogComponent,
  ],
  templateUrl: './submit-request-page.component.html',
  styleUrl: './submit-request-page.component.css'
})
export class SubmitRequestPageComponent {
  currentStep: number = 4;
  applicantType: string | null = null;
  showPopup = false;

  goToStep(step: number) {
    this.currentStep = step;
  }

  handleNext(selectedType: string) {
    this.applicantType = selectedType;
    this.goToStep(2);
  }

  onSubmitForm() {
    this.showPopup = true;
  }
}
