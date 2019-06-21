import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { InsertComponent } from './components/insert/insert.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';


import { FetchService } from "./services/fetch.service";
import { InsertService } from "./services/insert.service";
import { UpdateService } from "./services/update.service";
import { DeleteService } from "./services/delete.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [FetchService,InsertService,UpdateService,DeleteService],
  bootstrap: [FetchComponent]
})
export class AppModule { }
