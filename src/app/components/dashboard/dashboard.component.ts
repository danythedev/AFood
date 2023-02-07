import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeInfoComponent } from '../recipe-info/recipe-info.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isRecipeDialogOpened = false;

  constructor (public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('Dashboard Init')
  }

/**
 * onAddButtonClicked
 */
public onAddButtonClicked() {
  const dialogRef = this.dialog.open(RecipeInfoComponent, {

  })
  
  dialogRef.afterClosed().subscribe((result) => {
    console.log('Dialog Closed')
  })
}

}
