import { Component } from '@angular/core';
import {PseudonimComponent} from "../pseudonim/pseudonim.component";
import {UserInfoFormComponent} from "../user-info-form/user-info-form.component";

@Component({
  selector: 'app-pravno-form',
  standalone: true,
    imports: [
        PseudonimComponent,
        UserInfoFormComponent
    ],
  templateUrl: './pravno-form.component.html',
  styleUrl: './pravno-form.component.css'
})
export class PravnoFormComponent {

}
