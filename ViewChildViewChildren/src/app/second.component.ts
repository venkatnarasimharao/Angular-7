import{Component} from "@angular/core";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class SecondComponent{
    public var_one:string;
    public var_two:string;
    constructor(){
        this.var_one="Anuglar7";
        this.var_two="AngularJS";
    }
}