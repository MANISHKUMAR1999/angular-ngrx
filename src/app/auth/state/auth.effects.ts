import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs';
import { AuthService } from '../service/aut.service';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(private actions$: Actions, private _authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this._authService.login(action.email, action.password).pipe(
          map((data) => {
            return loginSuccess();
          })
        );
      })
    );
  });
}
