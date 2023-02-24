import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/data/firebase/firebase.service';
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
  public isServerLoading = false;

  private loadingSubscription = new Subscription();
  private showWarningSubscription = new Subscription();
  private severLoadingSubscription = new Subscription();

  constructor(
    private recipeService: RecipeService,
    private warningsService: WarningService,
    private firebaseService: FirebaseService
  ) {}

  public ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
    this.showWarningSubscription.unsubscribe();
    this.severLoadingSubscription.unsubscribe();
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

      this.severLoadingSubscription =
      this.firebaseService.isServerLoading.subscribe((isServerLoadingData) => {
        console.log('Server Loading', isServerLoadingData)
        this.isServerLoading = isServerLoadingData;
      });

    this.recipeService.loadInitialData();
  }
}
