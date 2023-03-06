import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GlobalInterceptor } from '../interceptors/global-interceptor.service';
import { ChangesService } from './data/changes/changes.service';
import { FirebaseUserService } from './data/firebase/firebase-user.service';
import { FirebaseService } from './data/firebase/firebase.service';
import { RecipeService } from './data/recipe/recipe.service';
import { DialogService } from './dialogs/dialog.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DialogService,
    RecipeService,
    ChangesService,
    FirebaseService,
    FirebaseUserService,
    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },
  ],
})
export class ServicesModule {}
