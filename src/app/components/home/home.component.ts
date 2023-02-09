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
  public isLoading = false;
  public showWarning = false;

  private loadingSubscription = new Subscription();
  private showWarningSubscription = new Subscription();

  constructor(
    private recipeService: RecipeService,
    private warningsService: WarningService
  ) {}

  public ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  public ngOnInit(): void {
    this.loadingSubscription =
      this.recipeService.areRecipesLoadingSubject.subscribe((isLoading) => {
        this.isLoading = isLoading;
      });

    this.showWarningSubscription =
      this.warningsService.isWarningOnSubject.subscribe((showWarning) => {
        console.log('Is WARNING', showWarning)
        this.showWarning = showWarning;
      });

    this.recipeService.loadInitialData();
  }
}
