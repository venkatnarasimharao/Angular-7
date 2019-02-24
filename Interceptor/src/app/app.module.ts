import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import{CustomerService}from "./services/customers.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptor } from './interceptors/my.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [CustomerService,{
    provide:HTTP_INTERCEPTORS,
    useClass:MyInterceptor,
    multi:true
  }],
  bootstrap: [CustomersComponent]
})
export class AppModule { }
