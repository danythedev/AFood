import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
    exports: [DashboardComponent,HomeComponent, ReactiveFormsModule],
    declarations: [DashboardComponent, HomeComponent, RecipesComponent, RecipeInfoComponent, AddRecipeComponent, DashboardProfileComponent, AuthenticationComponent],
    providers: [],
})
export class ComponentsModule { }
