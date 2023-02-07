import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RecipeInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

 public onNoClick(): void {
    this.dialogRef.close();
  }

}
