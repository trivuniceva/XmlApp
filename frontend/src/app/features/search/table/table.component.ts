import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DocumentDetailsComponent} from '../../request-template/document-details/document-details.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    DocumentDetailsComponent,
    NgIf,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() requestList: any[] = [];

  selectedDocument: any;
  showDetails: boolean = false; // Dodajte ovu promenljivu

  showDocumentDetails(document: any) {
    this.selectedDocument = document;
    this.showDetails = true; // Postavite na true kada se klikne na red
  }

  hideDocumentDetails() {
    this.showDetails = false; // Postavite na false da sakrijete detalje
  }
}
