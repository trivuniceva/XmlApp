import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../request-template/components/header/header.component";
import { CommonModule, NgIf } from '@angular/common';
import { AuthorInfoComponent } from '../../request-template/components/author-info/author-info.component';
import { ApplicantIdentificationComponent } from '../components/applicant-identification/applicant-identification.component';
import { FizickoFormComponent } from '../components/fizicko-form/fizicko-form.component';
import { PravnoFormComponent } from '../components/pravno-form/pravno-form.component';
import { PunomocnikFormComponent } from '../components/punomocnik-form/punomocnik-form.component';
import { CopyrightInfoFormComponent } from '../components/copyright-info-form/copyright-info-form.component';
import { AttachmentsComponent } from '../components/attachments/attachments.component';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { PravnoPodnosilac } from '../../../core/model/PravnoPodnosilac';
import { PunomocnikComponent } from '../../request-template/components/punomocnik/punomocnik.component';
import { PunomocnikPodnosilac } from '../../../core/model/PunomocnikPodnosilac';
import { FizickoPodnosilac } from '../../../core/model/FizickoPodnosilac';
import { FormArray } from '@angular/forms';

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
  currentStep: number = 1;
  applicantType: string | null = null;
  showPopup = false;

  fizickoFormData: FizickoPodnosilac | null = null;
  pravnoFormData: PravnoPodnosilac | undefined;
  punomocnikFormData: PunomocnikPodnosilac | undefined;

  @ViewChild('fizickoFormRef') fizickoFormComponent?: FizickoFormComponent;
  @ViewChild('pravnoFormRef') pravnoFormComponent?: PravnoFormComponent;
  @ViewChild('punomocnikFormRef') punomocnikFormComponent?: PunomocnikFormComponent;
  @ViewChild('copyrightInfoFormRef') copyrightInfoFormComponent?: CopyrightInfoFormComponent;

  goToStep(step: number) {
    this.currentStep = step;
  }

  handleNext(selectedType: string) {
    this.applicantType = selectedType;
    this.goToStep(2);
  }

  collectFormData() {
    if (this.pravnoFormComponent) {
      this.pravnoFormData = this.pravnoFormComponent.getFormValue() as PravnoPodnosilac;
      console.log("Podaci pravnog lica prikupljeni:", this.pravnoFormData);
      this.goToStep(3);
    } else if (this.punomocnikFormComponent) {
      this.punomocnikFormData = this.punomocnikFormComponent.getFormValue() as PunomocnikPodnosilac;
      console.log(this.punomocnikFormData);
      this.goToStep(3);
    } else if (this.fizickoFormComponent) {
      const fizickoFormValue = this.fizickoFormComponent.getFormValue();
      this.fizickoFormData = {
        userInfo: fizickoFormValue.userInfo,
        isAuthorSubmitting: this.fizickoFormComponent.isAuthorSubmitting,
        authors: (fizickoFormValue.authors as any[]).map(author => ({
          name: author.name,
          lastname: author.lastname,
          city: author.city,
          street: author.street,
          streetNum: author.streetNum,
          citizenship: author.citizenship,
          phone: author.phone,
          email: author.email,
          isAnonymousAuthor: author.isAnonymousAuthor
        })),
        copyrightInfo: {} as any // Inicijalizujemo prazan objekat, popunicemo kasnije
      };
      console.log("Podaci o podnosiocu (fizicko) prikupljeni:", this.fizickoFormData);
      this.goToStep(3);
    }
  }

  collectCopyrightInfo() {
    if (this.copyrightInfoFormComponent && this.fizickoFormData) {
      const copyrightFormValue = this.copyrightInfoFormComponent.copyrightInfoForm.value;
      this.fizickoFormData.copyrightInfo = {
        workType: copyrightFormValue.workType,
        otherWorkType: copyrightFormValue.otherWorkType,
        title: copyrightFormValue.title,
        altTitle: copyrightFormValue.altTitle,
        recordFormat: copyrightFormValue.recordFormat,
        otherRecordFormat: copyrightFormValue.otherRecordFormat,
        isAdaptation: copyrightFormValue.isAdaptation,
        sourceTitle: copyrightFormValue.sourceTitle,
        sourceAuthorInfo: copyrightFormValue.sourceAuthorInfo
      };
      console.log("Podaci o delu prikupljeni:", this.fizickoFormData.copyrightInfo);
      this.goToStep(4);
    }
  }

  onSubmitForm() {
    if (this.pravnoFormData) {
      console.log("Podaci pravnog lica za submit:", this.pravnoFormData);
    } else if (this.punomocnikFormData) {
      console.log(this.punomocnikFormData);
    } else if (this.fizickoFormData) {
      console.log("Finalni podaci za fizicko lice:", this.fizickoFormData);
    }

    this.showPopup = true;
  }
}
