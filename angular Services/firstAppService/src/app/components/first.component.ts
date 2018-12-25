import { myservice } from "../services/my.service";
import{ Component} from "@angular/core";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})

export class firsComponent{
    public result:any;
    constructor(public _service:myservice){}
    ngOnInit(){
        this.result=this._service.mySQLData();
    }
}