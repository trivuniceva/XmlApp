import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-document-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './document-details.component.html',
  styleUrl: './document-details.component.css'
})
export class DocumentDetailsComponent {
  @Input() document: any;
  @Output() hideDocumentDetails = new EventEmitter<void>();

  downloadXHTML() {

  }

  downloadPDF() {

  }

  downloadRDF() {

  }

  downloadJSON() {

  }

  acceptRequest() {

  }

  rejectRequest() {

  }

  close() {
    this.hideDocumentDetails.emit(); // Emitujte događaj
  }

}
