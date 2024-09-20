import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
LoginForm!:FormGroup
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.LoginForm = this._fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required]
    })


  }
  LoginFormData(){
    console.log(this.LoginForm)
  }
}
