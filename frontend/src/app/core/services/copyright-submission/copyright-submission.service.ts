import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FizickoPodnosilac} from '../../model/FizickoPodnosilac';
import {PravnoPodnosilac} from '../../model/PravnoPodnosilac';
import {PunomocnikPodnosilac} from '../../model/PunomocnikPodnosilac';

@Injectable({
  providedIn: 'root'
})
export class CopyrightSubmissionService {

  private readonly baseUrl = 'http://localhost:8080/api/submit';

  constructor(private http: HttpClient) {}

  submitFizicko(data: FizickoPodnosilac) {
    return this.http.post(`${this.baseUrl}/fizicko`, data);
  }

  submitPravno(data: PravnoPodnosilac) {
    return this.http.post(`${this.baseUrl}/pravno`, data);
  }

  submitPunomocnik(data: PunomocnikPodnosilac) {
    return this.http.post(`${this.baseUrl}/punomocnik`, data);
  }
}
