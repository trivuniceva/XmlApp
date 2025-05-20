import {Component, Input} from '@angular/core';
import {AuthorInfoComponent} from "../author-info/author-info.component";
import {PunomocnikPodnosilac} from '../../../../core/model/PunomocnikPodnosilac';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-punomocnik',
  standalone: true,
  imports: [
    AuthorInfoComponent,
    NgIf
  ],
  templateUrl: './punomocnik.component.html',
  styleUrl: './punomocnik.component.css'
})
export class PunomocnikComponent {
  @Input() punomocnikData: PunomocnikPodnosilac | null = null;
}
