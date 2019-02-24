import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails:FormGroup;
  constructor(){
    this.userDetails=new FormGroup({
        fname:new FormControl("Naresh",[Validators.required,
                                        Validators.minLength(3),
                                      Validators.maxLength(6)]),
        lname:new FormControl(),
        uemail:new FormControl(),
        addr:new FormGroup({
          ucity:new FormControl(),
          uaddress:new FormControl()
        }),
        gender:new FormControl(),
        ucountry:new FormControl()
    });
  };
  public register():any{
    console.log(this.userDetails.value);
  }
}
