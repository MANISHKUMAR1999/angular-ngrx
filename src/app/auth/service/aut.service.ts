import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponseData } from "src/app/models/AuthResponseData.model";
import { User } from "src/app/models/user.model";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn:'root'
})
export class AuthService {


    constructor(private _htpp:HttpClient){}

    login(email:string,password:string):Observable<AuthResponseData>{
        return this._htpp.post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
            { email, password, returnSecureToken: true }
          );
    }

    formatUser(data:AuthResponseData){

        const expirationDate = new Date(new Date().getTime()+ +data.expiresIn*1000)
        const user  = new User(data.email,data.idToken,data.localId,expirationDate)
        return user
    }
}