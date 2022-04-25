import { Component } from '@angular/core';
import { IOptionsForm } from 'src/app/interfaces/options';
import { ACTIONS } from '@shared/constants/constant';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  options:IOptionsForm={
    id:ACTIONS.signIn ,
    label: "Incio de Sesión"
  }
  constructor(private auth: AuthService) { }

  

}
