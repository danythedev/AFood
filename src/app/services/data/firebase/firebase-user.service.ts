import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './firebase-user.model';
import { SignInResponse, SignUpResponse } from './firebase.interface';

@Injectable({providedIn: 'root'})
export class FirebaseUserService {

    public userSubject = new Subject<User>();

    private _activeUser: User | null = null;

      // Define the getter
    get activeUser(): User | null {
        return this._activeUser;
    }
    /**
     * This method handles user authentication by taking in a response data object and creating a new user instance.
     * @param {SignInResponse | SignUpResponse } responseUserData - The user data that got the sign up or sign in request.
     */
    public handleUserAuthentication(responseUserData: SignUpResponse | SignInResponse): void {
        const expirationDate = new Date(new Date().getTime() + +responseUserData.expiresIn * 1000);
        const currentUser = new User(responseUserData.email, responseUserData.localId, responseUserData.idToken, expirationDate);
        console.log('Current user', currentUser)
        this._activeUser = currentUser;
        this.userSubject.next(currentUser);
    }   

    
}