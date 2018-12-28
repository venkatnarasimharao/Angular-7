import { Component, OnInit } from '@angular/core';
import{CustomersService} from "../../services/customers.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  private result:any;
  private countriesSubscribe:any;
  constructor(private _service:CustomersService) { }

  ngOnInit() {
    this.countriesSubscribe=this._service.getCountries().subscribe(this._posResponse,this._errorResponse);
  }
  public _posResponse=(posRes):any=>{
    this.result=posRes;
  }
  public _errorResponse=(err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
      console.log("client side error....!");
    }
    else{
      console.log("server side error..!")
    }
  }
  ngOnDestroy(){
    this.countriesSubscribe.unsubscribe();
  }
}
