import { Component} from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector:'app-index',
    templateUrl:'./index.component.html'
})
export class IndexComponent{
    constructor(private _router:Router){}
    public clickMe():any{
        this._router.navigate(['/page_three']);
    };
}