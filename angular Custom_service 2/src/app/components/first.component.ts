import { service_one } from '../services/serviceOne';

import{ Component} from "@angular/core";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})

export class firstComponent{
    private res:any;
    constructor(private _service:service_one){}

    ngOnInit(){
        this.res=this._service.fun_one();
    }
}