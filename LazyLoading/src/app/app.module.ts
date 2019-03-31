import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './index.component';
import { pageOneComponent } from './pageone.component';
import { lazyRoutes } from './app.routes';
import { authGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,IndexComponent,pageOneComponent
  ],
  imports: [
    BrowserModule,lazyRoutes
  ],
  providers: [authGuard],
  bootstrap: [IndexComponent]
})
export class AppModule { }