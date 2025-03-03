import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-metadata-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './metadata-search.component.html',
  styleUrl: './metadata-search.component.css'
})
export class MetadataSearchComponent {
  title: any;
  author: any;
  category: any;
  startDate: any;
  endDate: any;
  logicalOperator: any;

  onSearch() {

  }
}
