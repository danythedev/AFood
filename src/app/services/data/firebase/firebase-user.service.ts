import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './firebase-user.model';
import { SignInResponse, SignUpResponse } from './firebase.interface';

@Injectable({providedIn: 'root'})
export class FirebaseUserService {

    public userSubject = new Subject<User>();

    /**
     * 
     * @param responseData 
     */
    public handleUserAuthentication(responseData: SignUpResponse | SignInResponse): void{
        const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
        const newUser = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate);
        this.userSubject.next(newUser);
    }   

    
}