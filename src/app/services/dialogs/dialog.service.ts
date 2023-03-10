import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeInfoComponent } from '../../components/recipe-info/recipe-info.component';
import { RecipeEntity } from '../data/recipe/recipe.interface';
import _cloneDeep from 'lodash-es/cloneDeep'

@Injectable({providedIn: 'root'})
export class DialogService {
    constructor(public dialog: MatDialog) { }
    
    public openRecipeInfoDialog(selectedRecipe: RecipeEntity): void {
        const selectedRecipeData = _cloneDeep(selectedRecipe);
        this.dialog.open(RecipeInfoComponent, {
            data: selectedRecipeData
        });
    }
}