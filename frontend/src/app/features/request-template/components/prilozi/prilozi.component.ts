import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-prilozi',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './prilozi.component.html',
  styleUrl: './prilozi.component.css'
})
export class PriloziComponent {
  prilogOpisDela: boolean = false;
  prilogPrimerDela: boolean = false;

}
