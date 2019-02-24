import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { pageoneComponent } from './components/pageone/pageone.component';
import { pagetwoComponent } from './components/pagetwo/pagetwo.component';
import { pagethreeComponent } from './components/pagethree/pagethree.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './routings/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,pageoneComponent,pagetwoComponent,pagethreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
