import { Injectable } from '@angular/core';
import { catchError, Subject, tap } from 'rxjs';
import { WarningService } from 'src/app/shared/services/warnings-service';
import { FirebaseService } from '../firebase/firebase.service';
import { ModifiedRecipe, Recipe, RecipeEntity } from './recipe.interface';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(
    private firebaseService: FirebaseService,
    private warningsService: WarningService
  ) {}

  private recipes: Recipe[] = [];

  public loadInitialData() {
    return this._loadRecipes();
  }

  public get getRecipes(): Recipe[] {
    return this.recipes;
  }

  public updateRecipe(modifiedRecipe: ModifiedRecipe, recipeId: string) {
    this.firebaseService
      .updateRecord(modifiedRecipe, recipeId)
      .subscribe((message) => {
        this.loadInitialData();
      });
  }

  private _loadRecipes(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.firebaseService
      .getRecipesFromAPI()
      .subscribe({
        next: (recipes) => {
          this.recipes = this.getFormatedRecipes(recipes);
          resolve();
        },
        error: (error) => {
          console.log('Loading Recipes Error', error);
          reject();
        },
      });
    })
  }

  private getFormatedRecipes(loadedRecipes: RecipeEntity[]) {
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
