import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { WarningService } from 'src/app/shared/services/warnings-service';
import { FirebaseService } from '../firebase/firebase.service';
import { ModifiedRecipe, Recipe, RecipeEntity } from './recipe.interface';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(
    private firebaseService: FirebaseService,
  ) {}

  //Stores loaded recipes.
  private recipes: Recipe[] = [];

  /**
   * Loads all the recipes that are necessary to load the app.
   * @returns { Promise<void> } A promise that resolves when the recipes finished loading. 
   */
  public loadInitialData(): Promise<void> {
    return this._loadRecipes();
  }

  public get getRecipes(): Recipe[] {
    return this.recipes;
  }

  /**
   * Updates the recipes in the application with the new values received.
   * @param {ModifiedRecipe} modifiedRecipe - The recipe that has been modified.
   * @param {string} originalRecipeId - The recipe Id that will be modified.
   */
  public updateRecipe(modifiedRecipe: ModifiedRecipe, originalRecipeId: string) {
    this.firebaseService
      .updateRecord(modifiedRecipe, originalRecipeId)
      .subscribe(() => {
        this.loadInitialData();
      });
  }

  
  /**
   * Loads recipes data from the Firebase API and formats it for use in the application.
   * Uses the `getRecipesFromAPI` method from the `firebaseService`.
   * 
   * @returns {Promise<void>} A Promise that resolves when the recipes have been loaded and formatted.
  */
  private async _loadRecipes(): Promise<void> {
    try {
      const loadedRecipes = await lastValueFrom(this.firebaseService.getRecipesFromAPI());
      this.recipes = this.getFormattedRecipes(loadedRecipes);
    } catch (error) {
      console.log('Error in loading recipes', error)
    }
  }

  private getFormattedRecipes(loadedRecipes: RecipeEntity[]) {
    const formatedRecipes: Recipe[] = loadedRecipes.map((recipe, index) => {
      const formatedRecipe = {
        name: recipe.name,
        imageUrl: recipe.imageUrl,
        ingredients: recipe.ingredients,
        id: index.toString(),
      };
      return formatedRecipe;
    });
    return formatedRecipes;
  }
}
