import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-author-info',
  standalone: true,
  imports: [],
  templateUrl: './author-info.component.html',
  styleUrl: './author-info.component.css'
})
export class AuthorInfoComponent {
  @Input() formGroup!: FormGroup;

}
