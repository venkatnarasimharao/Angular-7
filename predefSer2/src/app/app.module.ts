import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomersService} from "./services/customers.service"
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [CustomersService],
  bootstrap: [CustomersComponent]
})
export class AppModule { }
