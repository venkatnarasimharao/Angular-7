import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{firsComponent} from "./components/first.component";
import{secondComponent} from "./components/second.component";
import{myservice} from "./services/my.service";

@NgModule({
  declarations: [
    AppComponent,firsComponent,secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [myservice],
  bootstrap: [firsComponent]
})
export class AppModule { }
