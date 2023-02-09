import { NgModule } from '@angular/core';
import { ChangesService } from './data/changes/changes.service';
import { FirebaseService } from './data/firebase/firebase.service';
import { RecipeService } from './data/recipe/recipe.service';
import { DialogService } from './dialogs/dialog.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [DialogService, RecipeService, ChangesService, FirebaseService],
})
export class ServicesModule {}
