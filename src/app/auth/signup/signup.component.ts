import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { signUpStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup
  constructor(private _fb:FormBuilder, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.signupForm = this._fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  signUpFormSubmit(){
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(signUpStart({email,password}))
  }
}
