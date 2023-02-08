import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeEntity } from 'src/app/services/data/interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
})
export class RecipeInfoComponent  {
  public recipeInfoForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RecipeInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RecipeEntity,
    private formBuilder: FormBuilder
  ) {
    this.recipeInfoForm = this.formBuilder.group({
      name: [data.name],
      ingredients: [data.ingredients]
    })
  }

  public onSubmit(formValue: any): void {
    if(this.recipeInfoForm.valid){
      console.log('New Form changes', formValue)
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
