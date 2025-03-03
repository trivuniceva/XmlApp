import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class AdvancedSearchComponent {
  @Input() requestList: any[] = [];

  authorFilter: string = '';
  statusFilter: string = '';
  selectedOperator: string = 'AND';

  // filteredRequestList = [...this.requestList];

  performAdvancedSearch() {
    let filteredRequests = this.requestList;

    if (this.authorFilter) {
      filteredRequests = filteredRequests.filter(request => request.authorName.includes(this.authorFilter));
    }

    if (this.statusFilter) {
      filteredRequests = filteredRequests.filter(request => request.status.includes(this.statusFilter));
    }

    if (this.selectedOperator === 'AND') {
      // Apply AND logic to combine filters
    } else if (this.selectedOperator === 'OR') {
      // Apply OR logic to combine filters
    } else if (this.selectedOperator === 'NOT') {
      // Apply NOT logic to exclude certain results
    }

    // this.filteredRequestList = filteredRequests;
  }

}
