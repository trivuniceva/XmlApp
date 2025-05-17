import { Component } from '@angular/core';
import {AuthorInfoComponent} from "../author-info/author-info.component";

@Component({
  selector: 'app-podnosilac',
  standalone: true,
    imports: [
        AuthorInfoComponent
    ],
  templateUrl: './podnosilac.component.html',
  styleUrl: './podnosilac.component.css'
})
export class PodnosilacComponent {

}
