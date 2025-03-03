import { Component } from '@angular/core';
import {ReportService} from '../../../core/services/report/report.service';
import { jsPDF } from 'jspdf';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-report-generator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './report-generator.component.html',
  styleUrl: './report-generator.component.css'
})
export class ReportGeneratorComponent {
  startDate: string = '';
  endDate: string = '';

  constructor(private reportService: ReportService) {}

  generateReport() {
    if (this.startDate && this.endDate) {
      this.reportService.generateReport(this.startDate, this.endDate)
        .subscribe((reportData) => {
          this.createPDF(reportData);
        });
    } else {
      alert('Molimo vas unesite oba datuma.');
    }
  }

  private createPDF(reportData: any) {
    import('jspdf').then((jsPDF) => {
      // const doc = new jsPDF();

      // doc.text('Izveštaj o zahtevima', 20, 20);
      // doc.text(`Period: ${this.startDate} - ${this.endDate}`, 20, 30);
      // doc.text(`Broj podnetih zahteva: ${reportData.submittedRequests}`, 20, 40);
      // doc.text(`Broj prihvaćenih zahteva: ${reportData.acceptedRequests}`, 20, 50);
      // doc.text(`Broj odbijenih zahteva: ${reportData.rejectedRequests}`, 20, 60);

      // doc.save('izvestaj.pdf');
    });
  }

}
