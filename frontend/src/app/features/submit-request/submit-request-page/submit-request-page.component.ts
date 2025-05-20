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
import {FormDataService} from '../../../core/services/copyright-data/form-data.service';

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
  pravnoFormData: PravnoPodnosilac | null = null;
  punomocnikFormData: PunomocnikPodnosilac | undefined;

  @ViewChild('fizickoFormRef') fizickoFormComponent?: FizickoFormComponent;
  @ViewChild('pravnoFormRef') pravnoFormComponent?: PravnoFormComponent;
  @ViewChild('punomocnikFormRef') punomocnikFormComponent?: PunomocnikFormComponent;
  @ViewChild('copyrightInfoFormRef') copyrightInfoFormComponent?: CopyrightInfoFormComponent;

  constructor(private formDataService: FormDataService) { }


  goToStep(step: number) {
    this.currentStep = step;
  }

  handleNext(selectedType: string) {
    this.applicantType = selectedType;
    this.goToStep(2);
  }

  collectFormData() {
    if (this.pravnoFormComponent) {
      const formData = this.pravnoFormComponent.getFormValue() as PravnoPodnosilac;
      this.formDataService.setPravnoFormData(formData);
      this.pravnoFormData = formData; // Dodajte ovu liniju da sačuvate podatke o pravnom licu
      this.fizickoFormData = null; // Postavite na null kada je pravno lice
      this.punomocnikFormData = undefined; // Postavite na undefined kada je pravno lice
      console.log("Podaci pravnog lica prikupljeni i poslati servisu:", formData);
      this.goToStep(3);
    } else if (this.punomocnikFormComponent) {
      const formData = this.punomocnikFormComponent.getFormValue() as PunomocnikPodnosilac;
      this.formDataService.setPunomocnikFormData(formData);
      this.punomocnikFormData = formData; // Dodajte ovu liniju da sačuvate podatke o punomoćniku
      this.fizickoFormData = null; // Postavite na null kada je punomoćnik
      this.pravnoFormData = null; // Postavite na null kada je punomoćnik
      console.log("Podaci punomocnika prikupljeni i poslati servisu:", formData);
      this.goToStep(3);
    } else if (this.fizickoFormComponent) {
      const fizickoFormValue = this.fizickoFormComponent.getFormValue();
      const formData: FizickoPodnosilac = {
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
        copyrightInfo: {} as any
      };
      this.formDataService.setFizickoFormData(formData);
      this.fizickoFormData = formData;
      this.pravnoFormData = null; // Postavite na null kada je fizičko lice
      this.punomocnikFormData = undefined; // Postavite na undefined kada je fizičko lice
      console.log("Podaci o podnosiocu (fizicko) prikupljeni i poslati servisu:", this.fizickoFormData);
      this.goToStep(3);
    }
  }

  collectCopyrightInfo() {
    console.log("Pozvana collectCopyrightInfo()");
    console.log("this.copyrightInfoFormComponent:", this.copyrightInfoFormComponent);

    if (this.copyrightInfoFormComponent) {
      const copyrightFormValue = this.copyrightInfoFormComponent.copyrightInfoForm.value;
      console.log("copyrightFormValue:", copyrightFormValue);

      if(this.fizickoFormData){
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
        }
        this.formDataService.setFizickoFormData(this.fizickoFormData);
        console.log("Podaci o delu prikupljeni i ažurirani u servisu (Fizicko):", this.fizickoFormData);
        this.goToStep(4);
      } else if (this.pravnoFormData){
        this.pravnoFormData.copyrightInfo = {
          workType: copyrightFormValue.workType,
          otherWorkType: copyrightFormValue.otherWorkType,
          title: copyrightFormValue.title,
          altTitle: copyrightFormValue.altTitle,
          recordFormat: copyrightFormValue.recordFormat,
          otherRecordFormat: copyrightFormValue.otherRecordFormat,
          isAdaptation: copyrightFormValue.isAdaptation,
          sourceTitle: copyrightFormValue.sourceTitle,
          sourceAuthorInfo: copyrightFormValue.sourceAuthorInfo
        }
        this.formDataService.setPravnoFormData(this.pravnoFormData);
        console.log("Podaci o delu prikupljeni i ažurirani u servisu (Pravno):", this.pravnoFormData);
        this.goToStep(4);
      }

      else if (this.punomocnikFormData) {
        this.punomocnikFormData.copyrightInfo = {
          workType: copyrightFormValue.workType,
          otherWorkType: copyrightFormValue.otherWorkType,
          title: copyrightFormValue.title,
          altTitle: copyrightFormValue.altTitle,
          recordFormat: copyrightFormValue.recordFormat,
          otherRecordFormat: copyrightFormValue.otherRecordFormat,
          isAdaptation: copyrightFormValue.isAdaptation,
          sourceTitle: copyrightFormValue.sourceTitle,
          sourceAuthorInfo: copyrightFormValue.sourceAuthorInfo
        }
        this.formDataService.setPunomocnikFormData(this.punomocnikFormData);
        console.log("Podaci o delu prikupljeni i ažurirani u servisu (Punomocnik):", this.punomocnikFormData);
        this.goToStep(4);
      }

    } else {
      console.warn("Nije moguće prikupiti podatke o delu. copyrightInfoFormComponent ili podaci o podnosiocu nedostaju.");
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
