import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

//import Directive
//Directive is used to create the Custom Directives
//import TemplateRef
//TemplateRef is used to manipulate the DOM Elements in Structural Directives
//import ViewContainerRef
//ViewContainerRef is used to add/remove elements from memory
//import Input
//Input is used to create the setter functions in Structural Type Custom Directives
@Directive({
    selector:"[hello]"
})
export class structuralDirective{
    constructor(private _templateRef:TemplateRef<any>,
                private _viewContainerRef:ViewContainerRef){}
    @Input() set hello(arg1:boolean){
        if(arg1){
            this._viewContainerRef
                .createEmbeddedView(this._templateRef);
        }else{
            this._viewContainerRef.clear();
        };
    };
};













