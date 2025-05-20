import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthorInfoComponent} from '../author-info/author-info.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-autorsko-delo',
  standalone: true,
  imports: [
    FormsModule,
    AuthorInfoComponent,
    NgIf
  ],
  templateUrl: './autorsko-delo.component.html',
  styleUrl: './autorsko-delo.component.css'
})
export class AutorskoDeloComponent {
  @Input() delo!: {
    workType: string;
    otherWorkType?: string;
    title: string;
    altTitle?: string;
    recordFormat: string;
    otherRecordFormat?: string;
    isAdaptation: boolean | null;
    sourceTitle?: string;
    sourceAuthorInfo?: any; // Ili AuthorInfo ako planiraš detaljnije da ga prikazuješ
  };
}
