import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { RecipeEntity } from '../recipe/recipe.interface';
import { FirebaseUserService } from './firebase-user.service';
import {
  SignUpResponse as SignUpResponse,
  SignInResponse,
} from './firebase.interface';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  public isServerLoading = new Subject<boolean>();

  constructor(
    private httpService: HttpClient,
    private userService: FirebaseUserService
  ) {}

  public updateRecipe(newData: object, recordId: string) {
    console.log({ newData, recordId });
    return this.httpService.patch(
      `https://afood-da784-default-rtdb.firebaseio.com/recipes/${recordId}.json`,
      newData
    );
  }

  public getRecipesFromAPI(): Observable<RecipeEntity[]> {
    return this.httpService.get<RecipeEntity[]>(
      'https://afood-da784-default-rtdb.firebaseio.com/recipes.json'
    );
  }

  // TODO: Implement Delete Recipes
  // // public deleteRecord(){

  // // }

  /**
   * Triggers an http request to sign up an User into Firebase
   * @param {string} email - The email the user is registering
   * @param {string} password - The password set for the user account
   * @returns {Subscription} - A subscription that gets the response of the firebase sign up request.
   */
  public signUpUser(email: string, newPassword: string) {
    return this.httpService
      .post<SignUpResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsrbTDi8W9W4QJILsAg2NedLv0UBkiCCI',
        {
          email: email,
          password: newPassword,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          console.log('Sign Up Data', resData)
          this.userService.handleUserAuthentication(resData);
        })
      );
  }

  /**
   * Triggers an http request to sign up an User into Firebase
   * @param {string} email - The email the user is registering
   * @param {string} password - The password set for the user account
   * @returns {Subscription} - A subscription that gets the response of the firebase sign up request.
   */
  public signIn(
    email: string,
    currentPassword: string
  ): Observable<SignInResponse> {
    return this.httpService
      .post<SignInResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsrbTDi8W9W4QJILsAg2NedLv0UBkiCCI',
        {
          email: email,
          password: currentPassword,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          console.log('Sign In data', resData);
          this.userService.handleUserAuthentication(resData);
        })
      );
  }
}
