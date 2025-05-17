import { Component } from '@angular/core';
import {AuthorInfoComponent} from "../author-info/author-info.component";

@Component({
  selector: 'app-punomocnik',
  standalone: true,
    imports: [
        AuthorInfoComponent
    ],
  templateUrl: './punomocnik.component.html',
  styleUrl: './punomocnik.component.css'
})
export class PunomocnikComponent {

}
