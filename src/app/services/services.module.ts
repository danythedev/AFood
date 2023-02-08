import { NgModule } from '@angular/core';
import { RecipeService } from './data/recipe/recipe.service';
import { DialogService } from './dialogs/dialog.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [DialogService, RecipeService],
})
export class ServicesModule { }
