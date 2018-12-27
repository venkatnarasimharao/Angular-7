
import { Injectable } from "@angular/core";
import { service_two } from "./serviceTwo";

@Injectable()

export class service_one{
    public fun_one():any{
        return this.service.fun_two();
    }
    constructor(private service:service_two){}
}