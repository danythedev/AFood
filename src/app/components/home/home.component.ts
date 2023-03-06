import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/data/recipe/recipe.service';
import { WarningService } from 'src/app/shared/services/warnings-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public showWarning = false;
  private showWarningSubscription = new Subscription();

  public areRecipesLoaded = false;

  constructor(
    private recipeService: RecipeService,
    private warningsService: WarningService,
  ) {}

  public ngOnDestroy(): void {
    this.showWarningSubscription.unsubscribe();
  }

  public ngOnInit(): void {
    this.showWarningSubscription =
      this.warningsService.isWarningOnSubject.subscribe((showWarning) => {
        console.log('Is WARNING', showWarning)
        this.showWarning = showWarning;
      });

    this.recipeService.loadInitialData().then(() => {
      this.areRecipesLoaded = true;
    })
  }
}
