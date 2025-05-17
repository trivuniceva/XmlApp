import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {PodnosilacComponent} from '../../components/podnosilac/podnosilac.component';
import {PseudonimComponent} from '../../../submit-request/components/pseudonim/pseudonim.component';
import {PunomocnikComponent} from '../../components/punomocnik/punomocnik.component';
import {AutorskoDeloComponent} from '../../components/autorsko-delo/autorsko-delo.component';
import {PriloziComponent} from '../../components/prilozi/prilozi.component';
import {FooterComponent} from '../../components/footer/footer.component';

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
    FooterComponent
  ],
  templateUrl: './copyright-page.component.html',
  styleUrl: './copyright-page.component.css'
})
export class CopyrightPageComponent {

}
