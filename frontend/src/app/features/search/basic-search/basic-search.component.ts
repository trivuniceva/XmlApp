import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-basic-search',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './basic-search.component.html',
  styleUrl: './basic-search.component.css'
})
export class BasicSearchComponent {
  @Input() requestList: any[] = [];
  searchQuery: any;
  selectedFilter: any;

  vrstaDjela = [
    { course: 'Drama' },
    { course: 'Romansa' },
    { course: 'Psihologija' }
  ];

  filterHomework() {

  }

  exportData() {

  }
}
