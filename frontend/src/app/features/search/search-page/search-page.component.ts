import { Component } from '@angular/core';
import { BasicSearchComponent } from "../basic-search/basic-search.component";
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component';
import { MetadataSearchComponent } from '../metadata-search/metadata-search.component';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    BasicSearchComponent,
    AdvancedSearchComponent,
    MetadataSearchComponent,
    TableComponent,
    NgIf,
    FormsModule,
    NgForOf,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  activeTab: string = 'basic'; // pceetni tab


  requestList = [
    {
      requestNumber: 'A-123',
      authorName: 'Marko Marković',
      workTitle: 'Umetnička slika',
      workType: 'Likovno delo',
      recordForm: 'Optički disk',
      status: 'Pending'
    },
    {
      requestNumber: 'A-124',
      authorName: 'Ana Petrović',
      workTitle: 'Mapa sveta',
      workType: 'Geografsko delo',
      recordForm: 'Štampani tekst',
      status: 'Accepted'
    },
    {
      requestNumber: 'A-125',
      authorName: 'Jovan Jovanović',
      workTitle: 'Tehnička uputstva',
      workType: 'Računarski program',
      recordForm: 'Elektronski format',
      status: 'Pending'
    }
  ];

  filteredRequestList = [...this.requestList];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }



}
