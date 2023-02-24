import { Injectable } from '@angular/core';
import { ModifiedRecipe, Recipe, RecipeFormValue } from '../recipe/recipe.interface';
import _isEqual from 'lodash-es/isEqual'
import { FirebaseService } from '../firebase/firebase.service';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({providedIn: 'root'})
export class ChangesService {
    constructor(private recipeService: RecipeService) {

     }
    
    public applyNewRecipeChanges(modifiedRecipe: RecipeFormValue, originalRecipe: Recipe){
        const areNewChanges = !_isEqual(modifiedRecipe,originalRecipe);
        console.log('Are there new changes?', areNewChanges, originalRecipe)

        if(areNewChanges){
            const modifiedRecipeProps: ModifiedRecipe = {
            }
            Object.keys(modifiedRecipe).forEach(key => {
            //Asserting type keyof due that both interfaces share exact same properties.
              if(!_isEqual(originalRecipe[key as keyof Recipe], modifiedRecipe[key])){
                modifiedRecipeProps[key] = modifiedRecipe[key];
              }
            })
            this.recipeService.updateRecipe(modifiedRecipeProps, originalRecipe.id)
        }
    }




}