import {Component, ViewChild} from '@angular/core';
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
import {PravnoPodnosilac} from '../../../core/model/PravnoPodnosilac';
import {PunomocnikComponent} from '../../request-template/components/punomocnik/punomocnik.component';
import {PunomocnikPodnosilac} from '../../../core/model/PunomocnikPodnosilac';
import {FizickoPodnosilac} from '../../../core/model/FizickoPodnosilac';

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

  fizickoFormData: FizickoPodnosilac | undefined;
  pravnoFormData: PravnoPodnosilac | undefined;
  punomocnikFormData: PunomocnikPodnosilac | undefined;

  @ViewChild('fizickoFormRef') fizickoFormComponent?: FizickoFormComponent;
  @ViewChild('pravnoFormRef') pravnoFormComponent?: PravnoFormComponent;
  @ViewChild('punomocnikFormRef') punomocnikFormComponent?: PunomocnikFormComponent;


  goToStep(step: number) {
    this.currentStep = step;
  }

  handleNext(selectedType: string) {
    this.applicantType = selectedType;
    this.goToStep(2);
  }

  collectFormData() {
    if (this.pravnoFormComponent) {
      this.pravnoFormData = this.pravnoFormComponent.getFormValue() as PravnoPodnosilac; // Castuj na PravnoPodnosilac
      console.log("Podaci pravnog lica prikupljeni:", this.pravnoFormData);
      this.goToStep(3);
    }

    else if (this.punomocnikFormComponent) {
      this.punomocnikFormData = this.punomocnikFormComponent.getFormValue() as PunomocnikPodnosilac;
      console.log(this.punomocnikFormData)
      this.goToStep(3);
    }

    else if (this.fizickoFormComponent) {
      const formValue = this.fizickoFormComponent.getFormValue();
      this.fizickoFormData = {
        userInfo: formValue.userInfo,
        isAuthorSubmitting: this.fizickoFormComponent.isAuthorSubmitting, // Pristup isAuthorSubmitting
        authors: (formValue.authors as any[]).map(author => ({ // Mapiramo podatke autora
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
      };
      console.log(this.fizickoFormData);
      this.goToStep(3);
    }


  }

  onSubmitForm() {
    if (this.pravnoFormData) {
      console.log("Podaci pravnog lica za submit:", this.pravnoFormData);
      console.log("Poslovno ime:", this.pravnoFormData.poslovnoIme);
      console.log("Ime korisnika:", this.pravnoFormData.userInfo.name);
    }

    else if (this.punomocnikFormData){
      console.log(this.punomocnikFormData)
    }

    else if (this.fizickoFormData){
      console.log(this.fizickoFormData)
      console.log("Autori:", this.fizickoFormData.authors);
    }

    this.showPopup = true;
  }
}
