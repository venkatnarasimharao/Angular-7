import{Component} from "@angular/core";
@Component({
    selector:"parent",
    templateUrl:"./parent.component.html"
})
export class ParentComponent{
    private my_array:Array<any>=[
        {"p_id":111,"p_name":"p_one","p_cost":10000},
        {"p_id":122,"p_name":"p_two","p_cost":20000},
        {"p_id":123,"p_name":"p_three","p_cost":30000},
        {"p_id":134,"p_name":"p_four","p_cost":40000},
        {"p_id":135,"p_name":"p_five","p_cost":50000}
    ]
    public my_fun(data){
        alert(data);
    }
}