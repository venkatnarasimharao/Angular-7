import{Component, ViewChild, ViewChildren, QueryList} from "@angular/core";
import { SecondComponent } from './second.component';
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class FirstComponent{
    // @ViewChild(SecondComponent)
    // private _second:SecondComponent;
    // public clickMe():any{
    //     this._second.var_one="NodeJS";
    //     this._second.var_two="ExpressJS";
    // }
    @ViewChildren(SecondComponent)
    public _second:QueryList<SecondComponent>=new QueryList;
}