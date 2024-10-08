import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  autoLogin,
  loginStart,
  loginSuccess,
  signUpStart,
  signUpSuccess,
} from './auth.actions';
import { exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { catchError } from 'rxjs';
import { AuthService } from '../service/aut.service';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this._authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ errorMessage: '' }));

            const user = this._authService.formatUser(data);
            this._authService.setUserDataInLocalStorage(user)
            return loginSuccess({ user });
          }),
          catchError((errResp) => {
            console.log(errResp.error.error.message);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this._authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ errorMessage: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess, signUpSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ errorMessage: '' }));
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpStart),
      exhaustMap((action) => {
        return this._authService.signUp(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this._authService.formatUser(data);
            this._authService.setUserDataInLocalStorage(user)
            return signUpSuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this._authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ errorMessage: errorMessage }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(autoLogin),
      map((action)=>{
        const user = this._authService.getUserFromLocalStorage();
        console.log(user)
      })
    )
  },{dispatch:false})
  // signUpRedirect$ = createEffect(()=>{
  //   return this.actions$.pipe(
  //     ofType(signUpSuccess),
  //     tap((action)=>{
  //       this.store.dispatch(setErrorMessage({errorMessage:''}))
  //       this.router.navigate(['/'])
  //     })
  //   )
  //     },{dispatch:false})
}
