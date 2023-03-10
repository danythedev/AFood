import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Recipe, RecipeEntity } from 'src/app/services/data/recipe/recipe.interface';
import { RecipeService } from 'src/app/services/data/recipe/recipe.service';
import { DialogService } from 'src/app/services/dialogs/dialog.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private dialogService: DialogService, private recipeService: RecipeService) { }

  public recipes: Recipe[] = []
  public newRecipesSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes;
    this.newRecipesSubscription = this.recipeService.recipesListenerSubject.subscribe((newRecipes: Recipe[]) => {
      this.recipes = newRecipes;
    });
  }

  /**
   * Triggers when a recipe was selected to pass its data to a dialog.
   * @param {Recipe} selectedRecipe - The selected recipe data the dialog will use for edition.
   */
  public onRecipeClicked(selectedRecipe: Recipe): void{
    this.dialogService.openRecipeInfoDialog(selectedRecipe);
  }

}
