import { Component } from "@angular/core";
import { countriesService } from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    private CountriesSubscribe:any;
    private result:any;
    constructor(private _servive:countriesService){}
    ngOnInit(){
        this.CountriesSubscribe= this._servive.getCountries().subscribe((posRes)=>{
            this.result = posRes;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error !!!");
            }else{
                console.log("Server Side Error !!!");
            }
        });
    }
    ngOnDestroy(){
        this.CountriesSubscribe.unsubscribe();
    }
};