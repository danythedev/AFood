import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModifiedRecipe, RecipeEntity } from '../recipe/recipe.interface';
import { AuthData as AuthResponseData } from './firebase.interface';

@Injectable({providedIn: 'root'})
export class FirebaseService {

  public isServerLoading = new Subject<boolean>();

    constructor(private httpService: HttpClient) { }

    public updateRecord(newData: object, recordId: string){
      console.log({newData, recordId})
      return this.httpService.patch(`https://afood-da784-default-rtdb.firebaseio.com/recipes/${recordId}.json`, newData)
    }

    public replaceAndStoreNewData(recipeData: RecipeEntity[]){
       this.httpService.put('https://afood-da784-default-rtdb.firebaseio.com/recipes.json', recipeData).subscribe((result) => {
         console.log('Results', result)
       })
    }

    public loadData(): Observable<RecipeEntity[]>{
        return this.httpService.get<RecipeEntity[]>('https://afood-da784-default-rtdb.firebaseio.com/recipes.json')
    }

    public deleteRecord(){
  
      
    }

    /**
     * 
     * @param email 
     * @param newPassword 
     * @returns 
     */
    public signUpUser(email: string, newPassword: string) {
      this.isServerLoading.next(true)
      return this.httpService.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsrbTDi8W9W4QJILsAg2NedLv0UBkiCCI',
      {
        email: email,
        password: newPassword,
        returnSecureToken: true
      }
      ).subscribe((response) => {
        this.isServerLoading.next(false)
        console.log('User Sign up', response)
      })
    }

}