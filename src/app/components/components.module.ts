import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [CommonModule],
    exports: [NavbarComponent,HomeComponent],
    declarations: [NavbarComponent, HomeComponent],
    providers: [],
})
export class ComponentsModule { }
