import { Component, OnInit, Input } from '@angular/core';
import { DeleteService } from "../../services/delete.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: []
})
export class DeleteComponent implements OnInit {
  private deleteStatus:any;
  private deleteSubScribe:any;
  @Input() _records;
  constructor(private _service:DeleteService) { }
  ngOnInit() {
  }
  public remove(obj:any):any{
    this.deleteSubScribe = 
          this._service.deleteProduct(obj)
              .subscribe((posRes)=>{
                if(posRes.delete == "success"){
                  for(var i:number=0;i<this._records.length;i++){
                    if(this._records[i].p_id == obj.p_id){
                      var index= this._records.indexOf(obj.p_id);
                      this._records.splice(index,1);
                    }
                    this.deleteStatus = posRes;
                  }
                }
              },(err:HttpErrorResponse)=>{
                if(err.error instanceof Error){
                  console.log("Client Side Error !!!");
                }else{
                  console.log("Server Side Error !!!");
                }
    });
  };
  ngOnDestroy(){
    this.deleteSubScribe.unsubscribe();
  };
};
