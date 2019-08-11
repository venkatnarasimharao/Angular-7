import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class ChildComponent{
    @Input() p_id: number;
    @Input() p_name: string;
    @Input() p_cost: number;

    @Output() SendData:EventEmitter<any>=new EventEmitter();

    public clickMe():any{
        this.SendData.emit(this.p_id+"...."+this.p_name+"....."+this.p_cost);
    }
}