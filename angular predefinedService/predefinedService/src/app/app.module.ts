import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { countriesComponent } from './components/countries.components';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './services/countries.service';


@NgModule({
  declarations: [
    AppComponent,countriesComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [countriesComponent]
})
export class AppModule { }
