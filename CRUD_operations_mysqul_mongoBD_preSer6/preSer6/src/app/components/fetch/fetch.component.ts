import { Component, OnInit } from '@angular/core';
import { FetchService } from "../../services/fetch.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styles: []
})
export class FetchComponent implements OnInit {
  private records:any;
  private insertSubScribe:any;
  constructor(private _service:FetchService) { 
  }
  ngOnInit() {
    this.insertSubScribe = 
                this._service.getProducts()
                    .subscribe((posRes)=>{
                      this.records = posRes;
                    },
                    (err:HttpErrorResponse)=>{
                        if(err.error instanceof Error){
                          console.log("Client Side Error !!!");
                        }else{
                          console.log("Server Side Error !!!");
                        }
    });
  }
  ngOnDestroy(){
    this.insertSubScribe.unsubscribe();
  }
}
