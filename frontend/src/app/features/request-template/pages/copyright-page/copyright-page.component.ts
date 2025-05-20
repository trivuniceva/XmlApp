import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {PodnosilacComponent} from '../../components/podnosilac/podnosilac.component';
import {PseudonimComponent} from '../../../submit-request/components/pseudonim/pseudonim.component';
import {PunomocnikComponent} from '../../components/punomocnik/punomocnik.component';
import {AutorskoDeloComponent} from '../../components/autorsko-delo/autorsko-delo.component';
import {PriloziComponent} from '../../components/prilozi/prilozi.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {PravnoPodnosilac} from '../../../../core/model/PravnoPodnosilac';
import {FizickoPodnosilac} from '../../../../core/model/FizickoPodnosilac';
import {PunomocnikPodnosilac} from '../../../../core/model/PunomocnikPodnosilac';
import {Subscription} from 'rxjs';
import {FormDataService} from '../../../../core/services/copyright-data/form-data.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-copyright-page',
  standalone: true,
  imports: [
    HeaderComponent,
    PodnosilacComponent,
    PseudonimComponent,
    PunomocnikComponent,
    AutorskoDeloComponent,
    PriloziComponent,
    FooterComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './copyright-page.component.html',
  styleUrl: './copyright-page.component.css'
})
export class CopyrightPageComponent {
  fizickoPodnosilac: FizickoPodnosilac | null = null;
  pravnoPodnosilac: PravnoPodnosilac | null = null;
  punomocnikPodnosilac: PunomocnikPodnosilac | null = null;

  private fizickoSub: Subscription | undefined;
  private pravnoSub: Subscription | undefined;
  private punomocnikSub: Subscription | undefined;

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.fizickoSub = this.formDataService.fizickoFormData$.subscribe(data => {
      this.fizickoPodnosilac = data;
      console.log('Podaci fizičkog podnosioca u popupu:', this.fizickoPodnosilac);
    });

    this.pravnoSub = this.formDataService.pravnoFormData$.subscribe(data => {
      this.pravnoPodnosilac = data;
      console.log('Podaci pravnog podnosioca u popupu:', this.pravnoPodnosilac);
    });

    this.punomocnikSub = this.formDataService.punomocnikFormData$.subscribe(data => {
      this.punomocnikPodnosilac = data;
      console.log('Podaci punomoćnika u popupu:', this.punomocnikPodnosilac);
    });
  }

  ngOnDestroy(): void {
    this.fizickoSub?.unsubscribe();
    this.pravnoSub?.unsubscribe();
    this.punomocnikSub?.unsubscribe();
  }

}
