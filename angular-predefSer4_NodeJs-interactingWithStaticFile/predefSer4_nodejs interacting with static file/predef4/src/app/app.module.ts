import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{staticService} from "./services/static.service";
import{staticComplement} from "./components/static.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,staticComplement
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [staticService],
  bootstrap: [staticComplement]
})
export class AppModule { }
