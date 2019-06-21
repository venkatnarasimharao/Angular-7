import { Component,Input } from "@angular/core";
import { InsertService } from "../../services/insert.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"app-insert",
    templateUrl:"./insert.component.html"
})
export class InsertComponent{
    private insertStatus:any;
    private insertSubScribe:any;
    @Input() _records;
    constructor(private _service:InsertService){}
    public insert(obj:any):any{
        this.insertSubScribe = 
                this._service.insertProduct(obj)
                    .subscribe((posRes)=>{
                        if(posRes.insert == "success"){
                            this._records.push(obj);
                        }
                        this.insertStatus = posRes;
                    },
                    (err:HttpErrorResponse)=>{
                        if(err.error instanceof Error){
                            console.log("Client Side Error !!!");
                        }else{
                            console.log("Server Side Error !!!");
                        }
        });
    };
    ngOnDestroy(){
        this.insertSubScribe.unsubscribe();
    };
};