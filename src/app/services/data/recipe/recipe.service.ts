import { Injectable } from '@angular/core';
import { RecipeEntity } from '../interfaces/recipe.interface';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor() {}

  private recipes: RecipeEntity[] = [];

  private recipesMockData: RecipeEntity[] = [
    {
      name: 'Pizza Hawaiana',
      ingredients: [
        { name: 'Pasta', quantity: 1 },
        { name: 'Tomato', quantity: 4 },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80'
    },
    {
      name: 'Choriqueso',
      ingredients: [
        { name: 'Queso', quantity: 1 },
        { name: 'Toritilla', quantity: 1 },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
  ];

  public loadInitialData(): Promise<void> {
    return this._loadRecipes();
  }

  private _loadRecipes(): Promise<void> {
    const mockRecipePromise = new Promise<RecipeEntity[]>((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(this.recipesMockData);
        }, 1000);
      } catch (error) {
        reject('There was an error');
      }
    });
    return mockRecipePromise.then((results: RecipeEntity[]) => {
      this.recipes = results;
    });
  }

  public get getRecipes(): RecipeEntity[] {
    return this.recipes;
  }
}
