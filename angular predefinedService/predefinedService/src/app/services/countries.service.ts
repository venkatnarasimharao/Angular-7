import { Injectable } from '@angular/core';
//import injectable
//HttpClient is the predefined class in angular4+
import{ HttpClient} from "@angular/common/http";

@Injectable()
export class CountriesService {
  //create the reference to HttpClient
 //where _http is the reference 
  constructor(private _http:HttpClient) { }
  //create the custom funcion
  public getCountries():any{
    //make rest Api calls
    return this._http.get("http://restcountries.eu/rest/v2/all");
  }
}
