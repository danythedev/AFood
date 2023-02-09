import { Injectable } from '@angular/core';
import { RecipeFormValue } from '../recipe/recipe.interface';
import _isEqual from 'lodash-es/isEqual'

@Injectable({providedIn: 'root'})
export class ChangesService {
    constructor() {

     }
    
    public applyNewRecipeChanges(newChanges: RecipeFormValue, originalChanges: RecipeFormValue){
        const areNewChanges = _isEqual(newChanges,originalChanges);
        console.log('Are there new changes?', areNewChanges)
        if(areNewChanges){
            
        }
    }




}