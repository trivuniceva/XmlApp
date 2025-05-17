import { Component } from '@angular/core';
import {AuthorInfoFormComponent} from "../author-info-form/author-info-form.component";
import {PseudonimComponent} from "../pseudonim/pseudonim.component";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";

@Component({
  selector: 'app-punomocnik-form',
  standalone: true,
    imports: [
        AuthorInfoFormComponent,
        PseudonimComponent,
        UserInfoFormComponent
    ],
  templateUrl: './punomocnik-form.component.html',
  styleUrl: './punomocnik-form.component.css'
})
export class PunomocnikFormComponent {

}
