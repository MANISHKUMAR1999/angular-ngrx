import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
LoginForm!:FormGroup
  constructor(private _fb:FormBuilder, private store:Store<AppState>) { }

  ngOnInit(): void {

    this.LoginForm = this._fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required]
    })


  }
  LoginFormData(){
    const email = this.LoginForm.value.email;
    const password = this.LoginForm.value.password
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(loginStart({email,password}))
  }
}
