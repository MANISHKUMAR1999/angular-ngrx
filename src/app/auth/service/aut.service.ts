import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn:'root'
})
export class AuthService {


    constructor(private _htpp:HttpClient){}

    login(email:string,password:string){
        return this._htpp.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
            { email, password, returnSecureToken: true }
          );
    }
}