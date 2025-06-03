import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {SubmitRequestPageComponent} from '../../submit-request-page/submit-request-page.component';
import {CopyrightPageComponent} from '../../../request-template/pages/copyright-page/copyright-page.component';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    NgIf,
    SubmitRequestPageComponent,
    CopyrightPageComponent
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  @Input() showPopup: boolean = false;
  @Output() popupClosed = new EventEmitter<void>();
  @Output() confirmedSubmit = new EventEmitter<void>();

  closePopup() {
    console.log('Popup closed');
    this.showPopup = false;
    this.popupClosed.emit();

  }

  submitFinalRequest() {
    console.log('Sending final request...');
    this.confirmedSubmit.emit();
    this.showPopup = false;
    this.popupClosed.emit();
  }
}
