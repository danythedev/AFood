import { Component, OnInit, Output } from '@angular/core';
import { RecipeEntity } from 'src/app/services/data/interfaces/recipe.interface';
import { RecipeService } from 'src/app/services/data/recipe/recipe.service';
import { DialogService } from 'src/app/services/dialogs/dialog.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private dialogService: DialogService, private recipeSerice: RecipeService) { }

  public recipes: RecipeEntity[] = []

  ngOnInit(): void {
    this.recipes = this.recipeSerice.getRecipes;
  }

  public onRecipeClicked(selectedRecipe: RecipeEntity): void{
    this.dialogService.openRecipeInfoDialog(selectedRecipe);
  }

}
