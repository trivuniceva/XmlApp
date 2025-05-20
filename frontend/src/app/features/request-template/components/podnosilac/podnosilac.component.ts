import {Component, Input} from '@angular/core';
import {AuthorInfoComponent} from "../author-info/author-info.component";
import {UserInfo} from '../../../../core/model/UserInfo';

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
  @Input() podnosilac!: UserInfo;
}
