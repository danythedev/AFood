import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/services/data/firebase/firebase-user.model';
import { FirebaseUserService } from 'src/app/services/data/firebase/firebase-user.service';
import { RecipeService } from 'src/app/services/data/recipe/recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public areRecipesLoaded = false;
  public isAuthenticated = false;

  public activeUser: User | null = null;
  public userAuthSub: Subscription | null = new Subscription();

  constructor(
    private recipeService: RecipeService,
    private userService: FirebaseUserService,
  ) {}

  public ngOnInit(): void {

    this.activeUser = this.userService.activeUser;
    if(this.activeUser){
      this.isAuthenticated = true;
    }

    console.log(this.isAuthenticated ? `Welcome ${ this.activeUser?.email}` : 'Not Authenticated please log in.')

    this.userAuthSub = this.userService.userSubject.subscribe((activeUser) => {
      this.isAuthenticated = !!activeUser;
    })

    this.recipeService.loadInitialData().then(() => {
        this.areRecipesLoaded = true;
    })
  }

  public ngOnDestroy(): void {
    this.userAuthSub?.unsubscribe();
  }

}
