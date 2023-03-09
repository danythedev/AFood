import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/data/recipe/recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public areRecipesLoaded = false;

  constructor(
    private recipeService: RecipeService,
  ) {}

  public ngOnInit(): void {
    this.recipeService.loadInitialData().then(() => {
      this.areRecipesLoaded = true;
    })
  }
}
