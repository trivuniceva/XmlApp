import {Component, Input} from '@angular/core';
import {AuthorInfoComponent} from "../author-info/author-info.component";
import {UserInfo} from '../../../../core/model/UserInfo';
import {FizickoPodnosilac} from '../../../../core/model/FizickoPodnosilac';
import {PravnoPodnosilac} from '../../../../core/model/PravnoPodnosilac';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-podnosilac',
  standalone: true,
  imports: [
    AuthorInfoComponent,
    NgIf
  ],
  templateUrl: './podnosilac.component.html',
  styleUrl: './podnosilac.component.css'
})
export class PodnosilacComponent {
  // @Input() podnosilac!: UserInfo;
  @Input() fizickoPodnosilacData: FizickoPodnosilac | null = null;
  @Input() pravnoPodnosilacData: PravnoPodnosilac | null = null;

  get userInfo(): UserInfo | undefined {
    if (this.fizickoPodnosilacData) {
      return this.fizickoPodnosilacData.userInfo;
    }
    if (this.pravnoPodnosilacData) {
      return this.pravnoPodnosilacData.userInfo; // Pretpostavljam da i PravnoPodnosilac ima userInfo
    }
    return undefined;
  }
}
