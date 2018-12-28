import { Component} from '@angular/core';
import{ UppercaseService } from "../services/uppercase.service";
import { HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'uppercase',
  templateUrl: './components.component.html',
})
export class ComponentsComponent{
  private result:any;
  //declaring variable to hold observable
  private uppercaseSubscribe:any;
  constructor(private _service:UppercaseService) { }

  public clickMe(obj):any{
    this.uppercaseSubscribe=this._service.converToUppercase(obj).subscribe(this._successCallBack,this._errorCallBack);
  }
  public _successCallBack=(posRes):any=>{
    this.result=posRes;
  };
  public _errorCallBack=(err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
      console.log("client side error.......!");
    }else{
      console.log("server side error...!");
    }
  }
  ngOnDestroy(){
    this.uppercaseSubscribe.unsubscribe();
  }

}
