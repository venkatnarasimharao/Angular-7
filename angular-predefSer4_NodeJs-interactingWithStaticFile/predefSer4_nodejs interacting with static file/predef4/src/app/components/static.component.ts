import{ Component} from "@angular/core";
import { staticService } from "../services/static.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector:"static",
    templateUrl:"./static.component.html"
})
export class staticComplement{
    private result:any;
    private staticSubscribe:any;
    constructor(private _service:staticService){}
    ngOnInit(){
        this.staticSubscribe = this._service.getproducts().subscribe(this._successCallBack,this._errorCallBack);
    }
    public _successCallBack=(posRes):any=>{
        this.result=posRes;
    }
    public _errorCallBack=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side error......!");
        }else{
            console.log("server side error respnose.........!");
        };
    };
    ngOnDestroy(){
        this.staticSubscribe.unsubscribe();
    }
}