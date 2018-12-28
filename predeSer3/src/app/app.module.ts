import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import{ UppercaseService } from "./services/uppercase.service";
import{ HttpClientModule} from "@angular/common/http";
import{ FormsModule } from "@angular/forms";
 
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [UppercaseService],
  bootstrap: [ComponentsComponent]
})
export class AppModule { }
