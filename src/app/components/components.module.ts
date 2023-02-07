import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { FormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';


@NgModule({
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [DashboardComponent,HomeComponent],
    declarations: [DashboardComponent, HomeComponent, RecipesComponent, RecipeInfoComponent, AddRecipeComponent, DashboardProfileComponent],
    providers: [],
})
export class ComponentsModule { }
