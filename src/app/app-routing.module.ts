import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/auth/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
{
  path: 'auth', component: AuthenticationComponent
},
{
  path: 'home', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
