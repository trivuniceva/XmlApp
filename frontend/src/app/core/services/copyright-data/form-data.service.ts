import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FizickoPodnosilac} from '../../model/FizickoPodnosilac';
import {PravnoPodnosilac} from '../../model/PravnoPodnosilac';
import {PunomocnikPodnosilac} from '../../model/PunomocnikPodnosilac';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

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
}
