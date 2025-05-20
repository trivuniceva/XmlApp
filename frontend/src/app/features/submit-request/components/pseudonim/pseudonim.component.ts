import {Component, Input} from '@angular/core';
import {AuthorInfo} from '../../../../core/model/AuthorInfo';

@Component({
  selector: 'app-pseudonim',
  standalone: true,
  imports: [],
  templateUrl: './pseudonim.component.html',
  styleUrl: './pseudonim.component.css'
})
export class PseudonimComponent {
  @Input() autor!: AuthorInfo;
}
