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
  currentStep: number = 0;
  applicantType: string | null = null;
  showPopup = false;

  pravnoFormData: PravnoPodnosilac | undefined;
  punomocnikFormData: PunomocnikPodnosilac | undefined;

  @ViewChild(PravnoFormComponent, { static: false }) pravnoFormComponent?: PravnoFormComponent;
  @ViewChild(PunomocnikFormComponent, { static: false }) punomocnikFormComponent?: PunomocnikFormComponent;

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
    } else if (this.punomocnikFormComponent) {
      this.punomocnikFormData = this.punomocnikFormComponent.getFormValue() as PunomocnikPodnosilac;
      console.log(this.punomocnikFormData)
      this.goToStep(3);
    }


  }

  onSubmitForm() {
    if (this.pravnoFormData) {
      console.log("Podaci pravnog lica za submit:", this.pravnoFormData);
      console.log("Poslovno ime:", this.pravnoFormData.poslovnoIme);
      console.log("Ime korisnika:", this.pravnoFormData.userInfo.name);
    } else if (this.punomocnikFormData){
      console.log(this.punomocnikFormData)
    }



    this.showPopup = true;
  }
}
