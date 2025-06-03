import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FizickoPodnosilac} from '../../model/FizickoPodnosilac';
import {PravnoPodnosilac} from '../../model/PravnoPodnosilac';
import {PunomocnikPodnosilac} from '../../model/PunomocnikPodnosilac';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) {
  }

  private fizickoFormDataSubject = new BehaviorSubject<FizickoPodnosilac | null>(null);
  fizickoFormData$ = this.fizickoFormDataSubject.asObservable();

  private pravnoFormDataSubject = new BehaviorSubject<PravnoPodnosilac | null>(null);
  pravnoFormData$ = this.pravnoFormDataSubject.asObservable();

  private punomocnikFormDataSubject = new BehaviorSubject<PunomocnikPodnosilac | null>(null);
  punomocnikFormData$ = this.punomocnikFormDataSubject.asObservable();

  setFizickoFormData(data: FizickoPodnosilac) {
    this.fizickoFormDataSubject.next(data);
  }

  setPravnoFormData(data: PravnoPodnosilac) {
    this.pravnoFormDataSubject.next(data);
  }

  setPunomocnikFormData(data: PunomocnikPodnosilac) {
    this.punomocnikFormDataSubject.next(data);
  }

  submitFizickoRequest(data: FizickoPodnosilac) {
    return this.http.post('/api/zahtev/fizicko', data);
  }

  submitPravnoRequest(data: PravnoPodnosilac) {
    return this.http.post('/api/zahtev/pravno', data);
  }

  submitPunomocnikRequest(data: PunomocnikPodnosilac) {
    return this.http.post('/api/zahtev/punomocnik', data);
  }

}
