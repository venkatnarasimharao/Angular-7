import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{ChildComponent} from "./child.component";
import{ParentComponent} from "./parent.component";
@NgModule({
  declarations: [
    AppComponent,ChildComponent,ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
