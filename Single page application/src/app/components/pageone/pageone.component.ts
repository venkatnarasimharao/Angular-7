import {Component} from "@angular/core";
@Component({
    selector:"pageone",
    templateUrl:"./pageone.component.html"
})
export class pageoneComponent{
    private var_one:string;
    constructor(){
        this.var_one="i am from page one.........!";
    };
};