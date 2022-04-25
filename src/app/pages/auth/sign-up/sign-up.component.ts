import { Component } from '@angular/core';
import { IOptionsForm } from 'src/app/interfaces/options';
import { ACTIONS } from '@shared/constants/constant';

@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
  options:IOptionsForm={
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }
  constructor() { }

  

}
