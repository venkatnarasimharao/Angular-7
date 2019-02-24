import { Component,OnInit} from '@angular/core';
import {CustomerService} from "../../services/customers.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  private result:any;
  private CustomerSubscribe:any;
  constructor(private _service:CustomerService) { }
  ngOnInit(){
    this.CustomerSubscribe=this._service.getCustomers().subscribe((posRes):any=>{
      this.result=posRes;
    },(err:HttpErrorResponse):any=>{
      if(err.error instanceof Error){
      console.log("client side error........!");
      }else{
      console.log("server side error..!");
      }
    })
  }
  ngOnDestroy(){
    this.CustomerSubscribe.unsubscribe();
  }
}