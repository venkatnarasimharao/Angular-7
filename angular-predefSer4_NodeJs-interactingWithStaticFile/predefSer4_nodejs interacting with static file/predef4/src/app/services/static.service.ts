import{ Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class staticService{
    constructor(private _http:HttpClient){}
    public getproducts():any{
       return this._http.get("http://localhost:8084/staticfiles");
    }
}