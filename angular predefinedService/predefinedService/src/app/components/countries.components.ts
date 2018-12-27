//import components
import{ Component} from "@angular/core";
//import countryService
import { CountriesService } from "../services/countries.service";
//import HttpErrorResponse
//HttpErroeResponse is a class used to categroize the error
import {HttpErrorResponse } from "@angular/common/http";
//use component
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    //declare variable to hold postion response
    private result:any;
    //declare variable to hold subscribe() return type
    private countriesSubscript:any;
    //create the reference to service
    //dependency Injectable
    constructor(private _service:CountriesService){}

    //first life cycle
    ngOnInit(){
        this.countriesSubscript=this._service.getCountries().subscribe(this._successCallBack,this._errorCallBack);
    }
    public _successCallBack=(posRes):any=>{
        this.result=posRes;
    }
    public _errorCallBack=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side error...........!");
        }else{
            console.log("server side error.........!");
        }
    }
    ngOnDestroy(){
        this.countriesSubscript.unsubscribe();
    }
}