import{Routes, RouterModule} from "@angular/router"
import { authGuard } from './auth.guard';
import { pageOneComponent } from "./pageone.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";
//Variables defined with const behave like let variables, except they cannot be reassigned:

//loadChildren is a module
//To target child module we use loadChildren insted of component
// in it path of componet file followed by # and module name 
//and to load taking permission we have canLoad
export const appRoutes:Routes=[
    {path:"page_one",component:pageOneComponent},
    {path:"lazy",loadChildren:"./my.module#myModule",canLoad:[authGuard]}
];
//making the lazyRoutes from the reference of normal routes
//lazyRoutes <=== appRoutes
//making normal routes to lazy loading.(in booting time) we use ModuleWithProviders
//if we dont give page will load at booting time and it is not called as lazy loading

//to load appRoutes based on click we use ModuleWithProviders
// "lazyRoutes" is used in app.module for imports
export const lazyRoutes:ModuleWithProviders= RouterModule.forRoot(appRoutes);

//why laz loading
//we use it for load images or data when ever if required to the user
//if normally application load page loading time increases and performace is decreased so inorder to over come we use lazy loading

//Creates a module with all the router providers and directives.
// It also optionally sets up an application listener to perform an initial navigation.