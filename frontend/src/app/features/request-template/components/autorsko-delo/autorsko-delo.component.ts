import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthorInfoComponent} from '../author-info/author-info.component';

@Component({
  selector: 'app-autorsko-delo',
  standalone: true,
  imports: [
    FormsModule,
    AuthorInfoComponent
  ],
  templateUrl: './autorsko-delo.component.html',
  styleUrl: './autorsko-delo.component.css'
})
export class AutorskoDeloComponent {
  naslovDela: string = '';
  naslovOriginalnogDela: string = '';
  autorOriginalnogDela: string = '';
  deloPrerade: string = '';
  vrstaDela: string = '';
  formaZapisa: string = ''; // Promenjeno da čuva izabranu formu
  autorPrezime: string = '';
  autorIme: string = '';
  autorAdresa: string = '';
  autorDrzavljanstvo: string = '';
  autorImenaSmrti: string = '';
  autorAnoniman: boolean = false;
}
