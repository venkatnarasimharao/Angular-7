import{Component} from "@angular/core";
@Component({
    selector:"pagetwo",
    templateUrl:"./pagetwo.component.html"
})
export class pagetwoComponent{
    private var_two:string;
    constructor(){
        this.var_two="i am from page two........!";
    };
};