import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  var_one:string = "angular7";
  var_two:string = "REACTJS";
  var_three:string = "node js";
  var_four:number = 100;
  var_five:number = 0.9;
  var_six:number = 100.12345;
  var_seven:any = {"p_id":111,"p_name":"p_one","p_cost":10000};
  var_eigth:Date = new Date();
}
