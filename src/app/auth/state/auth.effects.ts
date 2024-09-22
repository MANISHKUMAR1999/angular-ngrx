import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs';
import { AuthService } from '../service/aut.service';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(private actions$: Actions, private _authService: AuthService,private store:Store<AppState>) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this._authService.login(action.email, action.password).pipe(
          map((data) => {
           this.store.dispatch(setLoadingSpinner({status:false}))

            const user = this._authService.formatUser(data)
            return loginSuccess({user});
          })
        );
      })
    );
  });
}
