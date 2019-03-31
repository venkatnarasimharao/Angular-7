//NgModule is the Predefined Class , NgModule used to create the custom modules
import { NgModule } from "@angular/core";
import { countriesComponent } from './countries.component';
import { countriesService } from './countries.service';
import { HttpClientModule } from '@angular/common/http';

//Import CommonModule
//CommonModule is the Predefined Class
//CommonModule used to get the CommonServices from Framework
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from "@angular/router";

//Variables defined with "const" behave like let variables, except they cannot be reassigned:
//making countriesComponet as default component in lazy laoding application....(2nd component)
export const appRoutes:Routes=[
    {path:"",component:countriesComponent}
]
//RouterModule.forChild(appRoutes) tells the frame work
@NgModule({
    declarations:[countriesComponent],
    imports:[HttpClientModule,CommonModule,RouterModule.forChild(appRoutes)],
    providers:[countriesService],
    exports:[countriesComponent]
})
export class myModule{}