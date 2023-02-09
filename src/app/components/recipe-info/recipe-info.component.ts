import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeEntity, RecipeFormValue } from 'src/app/services/data/recipe/recipe.interface';
import  _cloneDeep from 'lodash-es/cloneDeep';
import { ChangesService } from 'src/app/services/data/changes/changes.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
})
export class RecipeInfoComponent  {
  public recipeInfoForm!: FormGroup;
  public recipeFormOriginalValue!: RecipeFormValue;

  constructor(
    public dialogRef: MatDialogRef<RecipeInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RecipeEntity,
    private formBuilder: FormBuilder,
    private changesService: ChangesService
  ) {

    this.recipeInfoForm = this.formBuilder.group({
      name: [data.name],
      ingredients: [data.ingredients]
    })

    this.recipeFormOriginalValue = _cloneDeep(this.recipeInfoForm.value);
  }

  public onSubmitForm(): void {
    if(this.recipeInfoForm.valid){
      const formData = this.recipeInfoForm.value;
      
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
