import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-submit-request',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './submit-request.component.html',
  styleUrl: './submit-request.component.css'
})
export class SubmitRequestComponent {
  formData: any;

  submitForm() {
    
  }
}
