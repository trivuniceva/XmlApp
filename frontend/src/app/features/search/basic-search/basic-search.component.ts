import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-basic-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './basic-search.component.html',
  styleUrl: './basic-search.component.css'
})
export class BasicSearchComponent {
  @Input() requestList: any[] = [];
  searchQuery: any;
  selectedFilter: any;

  filterHomework() {

  }

  exportData() {

  }
}
