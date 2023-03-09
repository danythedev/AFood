import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from 'src/app/services/data/recipe/recipe.service';
import { RecipeInfoComponent } from '../recipe-info/recipe-info.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isRecipeDialogOpened = false;

  constructor (public dialog: MatDialog, private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  /**
   * onAddButtonClicked
   */
  public onAddButtonClicked() {
    console.log('Adding')
  }

  public onShowRecipeInfo(){
    
  }

}
