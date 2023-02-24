import { Injectable } from '@angular/core';
import { catchError, Subject, tap } from 'rxjs';
import { WarningService } from 'src/app/shared/services/warnings-service';
import { FirebaseService } from '../firebase/firebase.service';
import { ModifiedRecipe, Recipe, RecipeEntity } from './recipe.interface';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  public areRecipesLoadingSubject = new Subject<boolean>();

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
    this.areRecipesLoadingSubject.next(true)
    this.firebaseService.updateRecord(modifiedRecipe, recipeId).subscribe((message) => {
      this.areRecipesLoadingSubject.next(false);
      this.loadInitialData();
    })
  }

  private _loadRecipes() {
    this.areRecipesLoadingSubject.next(true);
    this.warningsService.isWarningOnSubject.next(false);
    this.firebaseService
      .loadData()
      .pipe(
        tap(() => {
          this.warningsService.isWarningOnSubject.next(false);
          this.areRecipesLoadingSubject.next(false);
        })
      )
      .subscribe({
        next: (recipes) => {
          this.recipes = this.getFormatedRecipes(recipes);
        },
        error: () => {
            console.log('Error')
          this.warningsService.isWarningOnSubject.next(true);
          this.warningsService.isWarningOnSubject.subscribe(() => {
            console.log('Sub')
          })
        },
      });
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
