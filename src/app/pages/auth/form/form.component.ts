import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { IOptionsForm } from "src/app/interfaces/options";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  authForm!: FormGroup;
  @Input() options!:IOptionsForm
  constructor(private readonly fb: FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.options.id ==="Sign In") {
       this.authService.signIn(this.authForm.value).subscribe(
         res=>{
           console.log(res);
           localStorage.setItem('token',res.token);
           this.router.navigate(['/home']);

           
         }
       )
      
    }

  }
  private initForm(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
