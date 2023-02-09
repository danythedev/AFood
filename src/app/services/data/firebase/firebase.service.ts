import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeEntity } from '../recipe/recipe.interface';

@Injectable({providedIn: 'root'})
export class FirebaseService {

    constructor(private httpService: HttpClient) { }

    public saveNewData(){

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

}