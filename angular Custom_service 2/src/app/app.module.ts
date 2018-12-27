import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{ firstComponent} from "./components/first.component";
import{ service_one } from "./services/serviceOne";
import{ service_two } from "./services/serviceTwo";
@NgModule({
  declarations: [
    AppComponent,firstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [service_one,service_two],
  bootstrap: [firstComponent]
})
export class AppModule { }
