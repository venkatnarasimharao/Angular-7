import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private _http:HttpClient) { }
  public aboutModuleData():any{
    var obj = window.localStorage.getItem("login_details");
    var my_obj = {"token":JSON.parse(obj).token};
    return this._http.post("http://localhost:8080/about"
                            ,my_obj);
  };
};
