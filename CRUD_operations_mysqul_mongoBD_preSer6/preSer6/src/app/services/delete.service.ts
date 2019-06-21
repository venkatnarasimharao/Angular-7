import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(private _http:HttpClient) { }
  public deleteProduct(obj:any):any{
    return this._http.post("http://localhost:8080/delete",obj);
  };
};
