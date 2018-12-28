import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UppercaseService {

  constructor(private _http:HttpClient) { }
  //create the custom function
  public converToUppercase(obj):any{
      //obj is a json object
      //obj should come from uppercaseComponent
      return this._http.post("http://test-routes.herokuapp.com/test/uppercase",obj);
  };
};
