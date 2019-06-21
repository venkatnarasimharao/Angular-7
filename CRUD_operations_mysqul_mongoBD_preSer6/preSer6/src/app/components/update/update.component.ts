import { Component,Input } from "@angular/core";
import { UpdateService } from "../../services/update.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"app-update",
    templateUrl:"./update.component.html"
})
export class UpdateComponent{
    private updateStatus:any;
    private updateSubScribe:any;
    @Input() _records;
    constructor(private _service:UpdateService){}
    public update(obj:any):any{
        this.updateSubScribe = 
                this._service.updateProduct(obj)
                    .subscribe((posRes)=>{
                        if(posRes.update == "success"){
                            for(var i:number=0;i<this._records.length;i++){
                              if(this._records[i].p_id == obj.p_id){
                                this._records[i].p_name = obj.p_name;
                                this._records[i].p_cost = obj.p_cost;
                              };
                            }
                        }
                        this.updateStatus = posRes;
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
        this.updateStatus.unsubscribe();
    };
};