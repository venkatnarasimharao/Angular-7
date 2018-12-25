//importing myservice
import { myservice } from "../services/my.service";
//importing component
//component are used to convert ts to HTML structure
import{ Component } from "@angular/core";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class secondComponent{
    //declaring variable to hold result
    public result:any;

    //create the object to myservice
    //dependency injection

    constructor(public _service:myservice){}
    //where _serice is the reference of myservice

      //first life cycle hook
      /*Lifecycle hooks are simply functions that get called at specific points of a component's 
      life in our Angular apps. They landed in AngularJS 1.5 and are to be used alongside the 
      .component() method, and have slowly evolved over the last few versions to include some 
      more powerful (and Angular v2+ inspired) hooks.*/

        //ngOnInit() is the first life cycle hook
      
        //first life cycle hook is used to write business logic
        /*A callback method that is invoked immediately after the default change detector has 
        checked the directive's data-bound properties for the first time, 
        and before any of the view or content children have been checked. It is invoked 
        only once when the directive is instantiated.*/

    ngOnInit(){
        this.result=this._service.mongoDBData();
    }
}