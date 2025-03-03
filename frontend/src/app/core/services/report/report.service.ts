import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {}

  generateReport(startDate: string, endDate: string): Observable<any> {
    return this.http.post<any>('/api/generate-report', { startDate, endDate });
  }
}
