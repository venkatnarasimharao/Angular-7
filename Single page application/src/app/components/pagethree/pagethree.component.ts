import {Component} from "@angular/core";
@Component({
    selector:"pagethree",
    templateUrl:"./pagethree.component.html"
})
export class pagethreeComponent{
    private var_three:string;
    constructor(){
        this.var_three="i am from page three........!";
    };
};