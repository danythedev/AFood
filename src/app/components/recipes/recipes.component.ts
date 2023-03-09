import { Component, OnInit, Output } from '@angular/core';
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

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes;
  }

  public onRecipeClicked(selectedRecipe: Recipe): void{
    this.dialogService.openRecipeInfoDialog(selectedRecipe);
  }

}
